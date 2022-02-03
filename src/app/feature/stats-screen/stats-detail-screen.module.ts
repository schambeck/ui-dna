import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsDetailComponent} from './stats-detail/stats-detail.component';
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from 'primeng/button';
import { StatsFormComponent } from './stats-form/stats-form.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import { SkeletonModule } from 'primeng/skeleton';
import {BlockUIModule} from 'primeng/blockui';
import {PanelModule} from 'primeng/panel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    StatsDetailComponent,
    StatsFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    SkeletonModule,
    BlockUIModule,
    PanelModule
  ],
  exports: [
    StatsDetailComponent
  ]
})
export class StatsDetailScreenModule {
}
