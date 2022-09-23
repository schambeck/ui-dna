import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthModule } from "./auth/auth.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {StatsScreenModule} from "./feature/stats-screen/stats-screen.module";
import { ProfileScreenModule } from './feature/profile-screen/profile-screen.module';
import { HeaderScreenModule } from './feature/header-screen/header-screen.module';
import { SidebarScreenModule } from './feature/sidebar-screen/sidebar-screen.module';
import { HomeScreenModule } from './feature/home-screen/home-screen.module';
import { MutantScreenModule } from './feature/mutant-screen/mutant-screen.module';
import { MessageService } from 'primeng/api';
import { ErrorHttpInterceptorService } from './shared/service/error-http-interceptor.service';
import {ToastModule} from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HeaderScreenModule,
    SidebarScreenModule,
    ProfileScreenModule,
    HomeScreenModule,
    MutantScreenModule,
    StatsScreenModule,
    ToastModule,
    ProgressSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptorService,
      multi: true
    },
    {
      provide: APP_BASE_HREF, 
      useValue: '/ui-dna/'
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
