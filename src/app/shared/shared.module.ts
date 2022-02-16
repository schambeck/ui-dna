import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsService} from "./service/stats.service";
import { MutantService } from './service/mutant.service';
import { SseService } from './service/sse.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StatsService, MutantService, SseService]
})
export class SharedModule {
}
