import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { PayloadDna } from 'src/app/shared/model/payload-dna';
import { MutantService } from 'src/app/shared/service/mutant.service';

const DEFAULT_SIZE = 6;
const DEFAULT_DNA = "AAAATT\n" +
                     "CCCGGG\n" +
                     "AAATTT\n" +
                     "CCCGGG\n" +
                     "AAATTT\n" +
                     "CCCGGG";

@Component({
  selector: 'app-mutant',
  templateUrl: './mutant.component.html',
  styleUrls: ['./mutant.component.css']
})
export class MutantComponent implements OnDestroy {

  size = new Number(DEFAULT_SIZE);
  dna = new String(DEFAULT_DNA);

  saving = false;
  mutant$?: Subscription;

  constructor(private titleService: Title, private service: MutantService, private messageService: MessageService) {
    this.titleService.setTitle("Mutant");
  }

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
      error: () => this.saving = false,
      complete: () => this.saving = false
    });
  }

  reset(): void {
    this.size = DEFAULT_SIZE;
    this.dna = DEFAULT_DNA;
  }

}
