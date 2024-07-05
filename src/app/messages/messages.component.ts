import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact-service/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  listOfMessages:any[]=[];
  constructor(private messages:ContactService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(){
    // window.location.reload();
    this.messages.getContactList().subscribe((res:any)=>{
      this.listOfMessages=res;
      console.log(this.listOfMessages);
    })
  }
}
