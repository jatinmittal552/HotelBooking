import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import Swal from 'sweetalert2';
import { BookingService } from '../services/booking-service/booking.service';
import { IBooking } from '../Models/bookingModel';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  finaldata:any[]=[];
  bookingfinal!: IBooking;

  constructor(private shared:SharedService,private bookingData:BookingService) { }

  ngOnInit(): void {
    this.finaldata=this.shared.getMessage();
    console.log("hwgdugwedgwbedkw:::::::",this.finaldata[0])
    this.initBookingFinal();
  }

  initBookingFinal(){
    this.bookingfinal={
      id:this.finaldata[0].id,
      hname:this.finaldata[0]._name,
      hlocation:this.finaldata[0]._location,
      rating:this.finaldata[0].rating,
      info:this.finaldata[0]._info,
      price:this.finaldata[0].price,
      imgfirst:this.finaldata[0].imgfirst,
      imgsecond:this.finaldata[0].imgsecond,
      imgthird:this.finaldata[0].imgthird,
      imgfourth:this.finaldata[0].imgfourth
    }
  }

  hotelConfirmed(){
    console.log("Booking Data:",this.bookingfinal);
    this.bookingData.addBookingList(this.bookingfinal).subscribe(result=>{
      console.log("Booking Data Inserted")
    })



    Swal.fire(
      'Confirmed!',
      'Your booking has been confirmed.',
      'success'
    )
    setTimeout(() => {
      this.finaldata.pop();
    }, 700);
  }

}
