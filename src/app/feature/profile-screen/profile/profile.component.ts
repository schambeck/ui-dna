import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from "src/app/auth/auth.service";
import { OAuthService } from "angular-oauth2-oidc";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  profileJson?: string;

  constructor(private titleService: Title,
              private oauthService: OAuthService,
              public authService: AuthService) {}

  ngOnInit() {
    this.titleService.setTitle("Profile");
    this.profileJson = JSON.stringify(this.oauthService.getIdentityClaims(), null, 4);
  }

}
