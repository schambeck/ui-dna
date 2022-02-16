import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import {TableModule} from "primeng/table";
import {BadgeModule} from 'primeng/badge';
import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [
    NotificationPanelComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    PanelModule
  ],
  exports: [
    NotificationPanelComponent
  ]
})
export class NotificationScreenModule { }
