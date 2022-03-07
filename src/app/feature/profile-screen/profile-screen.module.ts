import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    CardModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileScreenModule { }
