import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app-routing.module';
import { HomeComponent } from './components/Screen/home/home.component';
import { CartComponent } from './components/Screen/cart/cart.component';
import { ProductComponent } from './components/Screen/product/product.component';
import { AdminDashBoardComponent } from './components/Screen/admin-dash-board/admin-dash-board.component';
import { ErrorNotFoundComponent } from './components/Screen/error-not-found/error-not-found.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/Screen/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import {UserFormServiceService} from './service/user-form-service.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentComponent } from './components/Screen/payment/payment.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProductComponent,
    AdminDashBoardComponent,
    ErrorNotFoundComponent,
    NavbarComponent,
    SidebarComponent,
    UserProfileComponent,
    PaymentComponent,  
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,       
    HttpClientModule
  ],
  providers: [UserFormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor() {
    console.log("app moudle started");
    
  }
}
