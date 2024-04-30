import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

import { StepsComponent } from './steps/steps.component';

import { SeatComponent } from './seat/seat.component';
import  { PersonalComponent } from './personal/personal.component';
import { PaymentComponent } from './payment/payment.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ AppComponent, StepsComponent, SeatComponent, PersonalComponent, PaymentComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StepsModule,
    ToastModule,
    AppRoutingModule
  ],
  
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
