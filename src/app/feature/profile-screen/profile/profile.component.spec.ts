import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from "src/app/auth/auth.service";
import { ProfileComponent } from './profile.component';
import { OAuthService } from "angular-oauth2-oidc";

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let oauthServiceSpy: jasmine.SpyObj<OAuthService>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    oauthServiceSpy = jasmine.createSpyObj('OAuthService', ['getIdentityClaims']);
    authServiceSpy = jasmine.createSpyObj('AuthService', ['getUsername']);

    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [
        { provide: OAuthService, useValue: oauthServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
