import { Component } from '@angular/core';
import { Dna } from 'src/app/shared/model/dna';
import { MutantService } from 'src/app/shared/service/mutant.service';
import { Observable, tap } from "rxjs";
import { Page } from 'src/app/shared/model/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-mutant',
  templateUrl: './list-mutant.component.html',
  styleUrls: ['./list-mutant.component.css']
})
export class ListMutantComponent {

  rows = 10;
  page$ = this.load();
  fake = new Array(10);
  loading = false;
  totalElements = 0;
  currentPage = 0;

  constructor(private service: MutantService,
    private router: Router) { }

  load(page = 0): Observable<Page<Dna>> {
    this.loading = true;
    this.currentPage = page;
    return this.service.list(page, this.rows).pipe(tap({
      next: page => this.totalElements = page.totalElements,
      error: () => this.loading = false,
      complete: () => this.loading = false
    }));
  }

  refresh(): void {
    this.page$ = this.load(this.currentPage);
  }

  paginate(event: any) {
    this.rows = event.rows;
    this.page$ = this.load(event.page);
  }

  navigateToDetail(dna: Dna): void {
    this.router.navigate(['mutant', dna.id]);
  }

}
