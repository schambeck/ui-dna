import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LoggedUserComponent } from './logged-user/logged-user.component';
import { ButtonModule } from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import {MenuModule} from 'primeng/menu';

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
    MenuModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderScreenModule { }
