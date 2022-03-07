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
import { EditMutantComponent } from './edit-mutant/edit-mutant.component';
import {InputTextModule} from 'primeng/inputtext';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@NgModule({
  declarations: [
    MutantComponent,
    ListMutantComponent,
    EditMutantComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    CardModule,
    BrowserAnimationsModule,
    SkeletonModule,
    AccordionModule,
    TooltipModule,
    PaginatorModule,
    ProgressSpinnerModule
  ],
  exports: [
    MutantComponent,
    EditMutantComponent
  ]
})
export class MutantScreenModule { }
