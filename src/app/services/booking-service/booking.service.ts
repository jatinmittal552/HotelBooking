import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  getBookingList():Observable<any>{
    return this.http.get("https://localhost:7275/api/booking/GetBookingList")
  }
  addBookingList(input:any):Observable<any>{
    return this.http.post("https://localhost:7275/api/booking/AddBookingList",input)
  }
  deleteBookingList(input:string):Observable<any>{
    return this.http.delete("https://localhost:7275/api/booking/DeleteBookingList?hname="+input)
  }
}
