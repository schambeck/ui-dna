import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import {MenuItem} from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styles: [],
})
export class LoggedUserComponent {

  items: MenuItem[] = [];
  user$?: Subscription;

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
  }

  ngOnInit(): void {
    if (this.auth.user$) {
      this.user$ = this.auth.user$.subscribe(user => {
        this.items = [
          {
            label: user?.name,
            items: [
              {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: "/profile"},
              {label: 'Log out', icon: 'pi pi-fw pi-power-off', command: () => this.auth.logout({ returnTo: document.location.origin })}
            ]
          },
        ];
      });
    }
  }

  ngOnDestroy(): void {
    this.user$?.unsubscribe();
  }

}
