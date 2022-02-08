import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson?: string;
  user$?: Subscription;

  constructor(public auth: AuthService) {}

  ngOnInit() {
    if (this.auth.user$) {
      this.auth.user$.subscribe(
        (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
      );
    }
  }

  ngOnDestroy(): void {
    this.user$?.unsubscribe();
  }

}
