import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dna } from 'src/app/shared/model/dna';
import { MutantService } from 'src/app/shared/service/mutant.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-mutant',
  templateUrl: './edit-mutant.component.html',
  styleUrls: ['./edit-mutant.component.css']
})
export class EditMutantComponent {

  dna$?: Observable<Dna>;
  
  constructor(private route: ActivatedRoute, private location: Location, private service: MutantService) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.dna$ = this.service.get(id);
    }
  }

  back(): void {
    this.location.back();
  }

}
