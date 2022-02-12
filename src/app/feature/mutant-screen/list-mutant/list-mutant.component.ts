import { Component, OnInit } from '@angular/core';
import { Dna } from 'src/app/shared/model/dna';
import { MutantService } from 'src/app/shared/service/mutant.service';
import {Subscription} from "rxjs";
import { Page } from 'src/app/shared/model/page';

@Component({
  selector: 'app-list-mutant',
  templateUrl: './list-mutant.component.html',
  styleUrls: ['./list-mutant.component.css']
})
export class ListMutantComponent implements OnInit {

  dnas$?: Subscription;
  page = new Page<Dna>();
  rows = 10;
  selectedDna?: Dna;
  fake: Dna[] = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  loading: boolean = false;

  constructor(private service: MutantService) { }

  ngOnInit(): void {
    this.load();
  }

  load(page = 0): void {
    this.loading = true;
    this.dnas$ = this.service.list(page, this.rows).subscribe({
      next: page => this.page = page,
      error: () => this.loading = false,
      complete: () => this.loading = false
    });
  }

  paginate(event: any) {
    this.rows = event.rows;
    this.load(event.page);
  }

  navigateToDetail(dna: Dna): void {
    // this.router.navigate(['/dna-detail', {id: dna.id}]).then(() => console.log(`navigateToDetail ${JSON.stringify(dna)}`));
  }

}
