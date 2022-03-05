import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/overlaypanel';
import { Observable, Subject, Subscription } from 'rxjs';
import { CountUnread } from 'src/app/shared/model/count-unread';
import { Notification } from 'src/app/shared/model/notification';
import { CountUnreadMessage } from 'src/app/shared/model/count-unread-message';
import { NotificationService } from 'src/app/shared/service/notification.service';

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
    private router: Router) {
    this.notifications = this.notificationService.findAll();
    this.stream$ = this.notificationService.stream().subscribe(this.next.bind(this));
    this.notificationService.countUnread().subscribe(this.setCount.bind(this));
  }

  onRowSelect(event: any): void {
    if (event.data) {
      this.notificationService.markAsRead(event.data.id).subscribe({ 
        next: () => console.log(`Marked as read: ${event.data.id}`) 
      });
      this.router.navigate([decodeURI(event.data.link)]);
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

  setCount(count: CountUnread): void {
    this.setCountUnread(count.countUnread);
  }

  setCountUnread(count: number): void {
    console.log(`countUnread: ${count}`)
    this.countUnread$.next(count);
  }

}
