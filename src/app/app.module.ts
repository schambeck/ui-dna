import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {StatsScreenModule} from "./feature/stats-screen/stats-screen.module";
import { ProfileScreenModule } from './feature/profile-screen/profile-screen.module';
import { HeaderScreenModule } from './feature/header-screen/header-screen.module';
import { SidebarScreenModule } from './feature/sidebar-screen/sidebar-screen.module';
import { HomeScreenModule } from './feature/home-screen/home-screen.module';
import { environment as env } from '../environments/environment';
import { MutantScreenModule } from './feature/mutant-screen/mutant-screen.module';
import { MessageService } from 'primeng/api';
import { ErrorHttpInterceptorService } from './shared/service/error-http-interceptor.service';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    HeaderScreenModule,
    SidebarScreenModule,
    ProfileScreenModule,
    HomeScreenModule,
    MutantScreenModule,
    StatsScreenModule,
    ToastModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptorService,
      multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
