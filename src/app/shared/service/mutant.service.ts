import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpUrlEncodingCodec} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from '../../../environments/environment';
import { Dna } from '../model/dna';
import { PayloadDna } from '../model/payload-dna';
import { Page } from '../model/page';

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

  list(page = 0, rows = 10): Observable<Page<Dna>> {
    let params = new HttpParams().set('page', page).set('size', rows);
    return this.http.get<Page<Dna>>(this.url, { params: params });
  }

  get(id: string): Observable<Dna> {
    const url = `${this.url}/${encodeURIComponent(id)}`;
    return this.http.get<Dna>(url);
  }

}
