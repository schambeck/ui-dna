import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map, Observable, switchMap, timer} from 'rxjs';

import {Stats} from '../model/stats';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private url = `${environment.urlBase}/mutant`;
  private timer = environment.pollingTimer;

  constructor(private http: HttpClient) {
  }

  stats(): Observable<Stats> {
    const url = `${this.url}/stats`;
    return timer(1, this.timer).pipe(
      switchMap(() => this.http.get<any>(url).pipe(
        map(json => <Stats>{
          ratio: json.ratio, 
          countMutantDna: json.count_mutant_dna, 
          countHumanDna: json.count_human_dna}
        )
      ))
    );
  }

}
