import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService  {

  private baseApiUrl = 'http://contactsapi.loc';

  constructor(private httpClient: HttpClient) {}

  getContacts(): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contacts`);
  }



  getContact(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/contact/${id}`);
  }

  removeContact(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseApiUrl}/contact/${id}`);
  }
}
