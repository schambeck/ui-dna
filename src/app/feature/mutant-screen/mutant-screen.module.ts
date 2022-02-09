import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MutantComponent } from './mutant/mutant.component';
import {PanelModule} from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    MutantComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    FormsModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule
  ]
})
export class MutantScreenModule { }
