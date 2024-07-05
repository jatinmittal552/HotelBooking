import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HotellistComponent } from './hotellist/hotellist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { HoteldataService } from './services/hoteldata.service';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { FilterPipe } from './Pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SharedService } from './services/shared.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HttpClientModule} from '@angular/common/http';
import { MessagesComponent } from './messages/messages.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookingsComponent } from './bookings/bookings.component';
import { ContactService } from './services/contact-service/contact.service';
import { BookingService } from './services/booking-service/booking.service';
import { HotellistService } from './services/hotel-list/hotellist.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NotfoundComponent,
    HotellistComponent,
    FooterComponent,
    ConfirmationComponent,
    FilterPipe,
    ContactFormComponent,
    SignupComponent,
    MessagesComponent,
    LoginComponent,
    BookingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HoteldataService,SharedService,ContactService,BookingService,HotellistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
