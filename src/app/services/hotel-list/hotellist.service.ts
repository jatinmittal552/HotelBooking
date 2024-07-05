import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotellistService {

  constructor(private http:HttpClient) { }

  getHotelList():Observable<any>{
    return this.http.get("https://localhost:7275/api/HotelData/GetHotelList")
  }

  // addHotelList(input:any):Observable<any>{
  //   return this.http.post("https://localhost:7275/api/HotelData/AddHotelList",input)
  // }
}
