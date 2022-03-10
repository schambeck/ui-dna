import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Observable, Subject, Subscription } from 'rxjs';
import { Notification } from 'src/app/shared/model/notification';
import { CountUnreadMessage } from 'src/app/shared/model/count-unread-message';
import { NotificationService } from 'src/app/shared/service/notification.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent {

  notifications: Observable<Notification[]>;
  stream$?: Subscription;
  countUnread$ = new Subject<number>();
  selectedNotification?: Notification;
  @ViewChild('opLg') opLg?: OverlayPanel;
  @ViewChild('opSm') opSm?: OverlayPanel;

  constructor(private notificationService: NotificationService,
    private router: Router,
    public auth: AuthService) {
    if (this.auth && this.auth.getAccessTokenSilently) {
      this.auth.getAccessTokenSilently().subscribe(this.token.bind(this));
    }
    this.notifications = this.notificationService.findByUser();
  }

  token(token: string): void {
    this.stream$ = this.notificationService.stream(token).subscribe(this.next.bind(this));
  }

  onRowSelect(notification: Notification): void {
    if (notification) {
      this.notificationService.markAsRead(notification.id).subscribe({
        next: () => console.log(`Marked as read: ${notification.id}`)
      });
      this.router.navigate([decodeURI(notification.link)]);
      this.getVisiblePanel()?.hide();
    }
  }

  togglePanel(event: any): void {
    this.getVisiblePanel()?.toggle(event);
  }

  getVisiblePanel(): OverlayPanel | undefined {
    if (this.opLg?.el.nativeElement.offsetParent) {
      return this.opLg;
    }
    if (this.opSm?.el.nativeElement.offsetParent) {
      return this.opSm;
    }
    return undefined;
  }

  next(notificationCount: CountUnreadMessage): void {
    this.setCountUnread(notificationCount.countUnread);
  }

  setCountUnread(count: number): void {
    this.countUnread$.next(count);
  }

}
