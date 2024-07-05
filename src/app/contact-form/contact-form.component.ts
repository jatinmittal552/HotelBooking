import { Component, OnInit } from '@angular/core';
import { IContact } from '../Models/contactModel';
import { ContactService } from '../services/contact-service/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactData!:IContact;
  constructor(private message: ContactService) { }

  ngOnInit(): void {
    this.addContactData();
  }

  addContactData(){
    this.contactData = {
      id:0,
      fname:'',
      email:'',
      msg:'',
    }
  }

  sendContactData(){
    this.message.addContactList(this.contactData).subscribe(result=>{
      window.location.reload();
      console.log("Sent",this.contactData)
    })
  }

}
