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

  addContact(data: object): Observable<any> {
    return this.httpClient.post(`${this.baseApiUrl}/contact/add`, data);
  }

  modContact(id: number, data: object): Observable<any> {
    return this.httpClient.put(`${this.baseApiUrl}/contact/${id}`, data);
  }

  removeContact(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseApiUrl}/contact/${id}`);
  }

}
