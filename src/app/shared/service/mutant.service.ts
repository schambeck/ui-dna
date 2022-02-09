import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import { Dna } from '../model/dna';
import { PayloadDna } from '../model/payload-dna';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MutantService {

  private url = `${environment.urlBase}/mutant`;

  constructor(private http: HttpClient) {
  }

  mutant(payload: PayloadDna): Observable<Dna> {
    const url = `${this.url}`;
    return this.http.post<Dna>(url, payload, httpOptions)
  }

}
