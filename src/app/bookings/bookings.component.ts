import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking-service/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  listOfBookings:any[]=[];
  constructor(private getBookings:BookingService) { }

  ngOnInit(): void {
    this.getBookingList();
  }

  getBookingList(){
    this.getBookings.getBookingList().subscribe(res=>{
      this.listOfBookings=res;
      
    })
  }

  cancelRoom(abc:string){
    this.getBookings.deleteBookingList(abc).subscribe(result=>{
      this.getBookingList();
    })
  }

}
