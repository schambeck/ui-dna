import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PayloadDna } from 'src/app/shared/model/payload-dna';
import { MutantService } from 'src/app/shared/service/mutant.service';

@Component({
  selector: 'app-mutant',
  templateUrl: './mutant.component.html',
  styleUrls: ['./mutant.component.css']
})
export class MutantComponent implements OnDestroy {

  static DEFAULT_SIZE = 6;
  static DEFAULT_DNA = "AAATTT\n" +
                       "CCCGGG\n" +
                       "AAATTT\n" +
                       "CCCGGG\n" +
                       "AAATTT\n" +
                       "CCCGGG";
  
  size = new Number(MutantComponent.DEFAULT_SIZE);
  dna = new String(MutantComponent.DEFAULT_DNA);

  saving = false;
  mutant$?: Subscription;

  constructor(private service: MutantService, private messageService: MessageService) { }

  ngOnDestroy(): void {
    if (this.mutant$) {
      this.mutant$?.unsubscribe();
    }
  }
  
  save(): void {
    this.saving = true;
    var payload: PayloadDna = {
      dna: this.dna.split("\n")
    };
    this.mutant$ = this.service.mutant(payload).subscribe({
      next: dna => this.messageService.add({severity: 'success', summary: 'DNA Created', detail: JSON.stringify(dna)}),
      complete: () => this.saving = false
    });
  }

  reset(): void {
    this.size = MutantComponent.DEFAULT_SIZE;
    this.dna = MutantComponent.DEFAULT_DNA;
  }

}
