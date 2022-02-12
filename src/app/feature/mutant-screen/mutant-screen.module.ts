import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutantComponent } from './mutant/mutant.component';
import {PanelModule} from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';
import { ListMutantComponent } from './list-mutant/list-mutant.component';
import {TableModule} from "primeng/table";
import {CardModule} from "primeng/card";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SkeletonModule } from 'primeng/skeleton';
import {AccordionModule} from 'primeng/accordion';
import {TooltipModule} from 'primeng/tooltip';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    MutantComponent,
    ListMutantComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    CardModule,
    BrowserAnimationsModule,
    SkeletonModule,
    AccordionModule,
    TooltipModule,
    PaginatorModule
  ]
})
export class MutantScreenModule { }
