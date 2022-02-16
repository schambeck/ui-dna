import { Component } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';
import {MenuItem} from 'primeng/api';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-logged-user',
  templateUrl: './logged-user.component.html',
  styles: [],
})
export class LoggedUserComponent {

  items!: MenuItem[];
  user$: Observable<User | null | undefined>;

  constructor(public auth: AuthService) {
    this.user$ = auth.user$?.pipe(tap({ next: user => this.next(user!) }));
  }

  next(user: User): void {
    this.items = [
      {
        label: user.name,
        items: [
          {label: 'Profile', icon: 'pi pi-fw pi-user', routerLink: "/profile"},
          {label: 'Log out', icon: 'pi pi-fw pi-power-off', command: () => this.auth.logout({ returnTo: document.location.origin })}
        ]
      }
    ];
  }

}
