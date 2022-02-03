import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {map, Observable, switchMap, timer} from 'rxjs';

import {Stats} from '../model/stats';
import {environment} from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Accept': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private url = `${environment.urlBase}/mutant/stats`;
  private timer = environment.pollingTimer;

  constructor(private http: HttpClient) {
  }

  find(): Observable<Stats> {
    const url = `${this.url}`;
    return timer(1, this.timer).pipe(
      switchMap(() => this.http.get<any>(url, httpOptions).pipe(
        map(json => <Stats>{
          ratio: json.ratio, 
          countMutantDna: json.count_mutant_dna, 
          countHumanDna: json.count_human_dna}
        )
      ))
    );
  }

}
