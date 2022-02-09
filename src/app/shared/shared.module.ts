import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatsService} from "./service/stats.service";
import { MutantService } from './service/mutant.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StatsService, MutantService]
})
export class SharedModule {
}
