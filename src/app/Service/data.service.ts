import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../Model/Email';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { } 

  fetchEmails(): Observable<Email[]> {

    return this._http.get<Email[]>("/assets/data/email.json");

  }
}
