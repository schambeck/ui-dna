import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import { SidebarScreenModule } from '../sidebar-screen/sidebar-screen.module';
import {BadgeModule} from 'primeng/badge';
import { NotificationScreenModule } from '../notification-screen/notification-screen.module';

@NgModule({
  declarations: [
    HeaderComponent,
    LoggedUserComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    ToolbarModule,
    ButtonModule,
    MenuModule,
    SidebarModule,
    SidebarScreenModule,
    BadgeModule,
    NotificationScreenModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderScreenModule { }
