import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContactList():Observable<any>{
    return this.http.get("https://localhost:7275/api/ContactedPerson/GetContactList")
  }

  addContactList(input:any):Observable<any>{
    return this.http.post("https://localhost:7275/api/ContactedPerson/AddContactList",input)
  }
}
