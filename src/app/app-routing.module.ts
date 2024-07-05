import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HotellistComponent } from './hotellist/hotellist.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path:'hotellist',component:HotellistComponent},
  {path:"confirmation",component:ConfirmationComponent},
  {path:"contact-form",component:ContactFormComponent},
  {path:"bookings",component:BookingsComponent},
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:'messages',component:MessagesComponent},
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
