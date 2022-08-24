import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from "src/app/auth/auth.service";
import { OAuthService } from "angular-oauth2-oidc";
import { NotificationPanelComponent } from './notification-panel.component';
import { Observable, of } from "rxjs";

describe('NotificationPanelComponent', () => {
  let component: NotificationPanelComponent;
  let fixture: ComponentFixture<NotificationPanelComponent>;
  let oauthServiceSpy: jasmine.SpyObj<OAuthService>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    oauthServiceSpy = jasmine.createSpyObj('OAuthService', ['getAccessToken']);
    authServiceSpy = jasmine.createSpyObj('AuthService', [], {'isAuthenticated$': of(new Observable(subscriber => subscriber.next(true)))});

    await TestBed.configureTestingModule({
      declarations: [ NotificationPanelComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        { provide: OAuthService, useValue: oauthServiceSpy },
        { provide: AuthService, useValue: authServiceSpy }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
