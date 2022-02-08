import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsService} from "./service/stats.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StatsService]
})
export class SharedModule {
}
