import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from "src/app/auth/auth.service";
import { OAuthStorage } from "angular-oauth2-oidc";
import { NotificationPanelComponent } from './notification-panel.component';

describe('NotificationPanelComponent', () => {
  let component: NotificationPanelComponent;
  let fixture: ComponentFixture<NotificationPanelComponent>;
  let oAuthStorageSpy: jasmine.SpyObj<OAuthStorage>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    oAuthStorageSpy = jasmine.createSpyObj('OAuthStorage', ['getItem']);
    authServiceSpy = jasmine.createSpyObj('AuthService', [], ['isAuthenticated$']);

    await TestBed.configureTestingModule({
      declarations: [ NotificationPanelComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [
        { provide: OAuthStorage, useValue: oAuthStorageSpy },
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
