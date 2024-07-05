import { Component, OnInit } from '@angular/core';
import { HotellistService } from '../services/hotel-list/hotellist.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-hotellist',
  templateUrl: './hotellist.component.html',
  styleUrls: ['./hotellist.component.css']
})
export class HotellistComponent implements OnInit {

  filteredString:string='';

  fulllist:any[]=[];
  constructor(private HoteList:HotellistService, private shared:SharedService) { }

  ngOnInit(): void {
    this.getHotelData();
  }

  getHotelData(){
    this.HoteList.getHotelList().subscribe(res=>{
      console.log(res);
      this.fulllist=res;
    })
  }

  giveId(message:any){
    console.log(message);
    this.shared.setMessage(message);
  }
}
