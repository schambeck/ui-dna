import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsComponent} from './stats/stats.component';
import {CardModule} from "primeng/card";
import { SkeletonModule } from 'primeng/skeleton';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    BrowserAnimationsModule,
    SkeletonModule,
    PanelModule
  ],
  exports: [
    StatsComponent
  ]
})
export class StatsScreenModule {
}
