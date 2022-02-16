import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SseService } from './sse.service';
import { Notification } from '../model/notification';
import { CountUnread } from '../model/count-unread';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CountUnreadMessage } from '../model/count-unread-message';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = `${environment.urlBaseNotification}`;

  constructor(private sseService: SseService<CountUnreadMessage>, private http: HttpClient) {
  }

  stream(): Observable<CountUnreadMessage> {
    let url = `${this.url}/sse`;
    return this.sseService.stream(`${url}`);
  }

  countUnread(): Observable<CountUnread> {
    let url = `${this.url}/notifications/queries/count-unread`;
    return this.http.get<CountUnread>(url);
  }

  findAll(): Observable<Notification[]> {
    let url = `${this.url}/notifications`;
    return this.http.get<Notification[]>(url);
  }

  markAsRead(id: string): Observable<Notification> {
    const url = `${this.url}/notifications/${id}/actions/mark-as-read`;
    return this.http.put<Notification>(url, undefined, httpOptions);
  }

}
