import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PanelModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileScreenModule { }
