import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsComponent } from './steps/steps.component';
import { PersonalComponent } from './personal/personal.component';
import { SeatComponent } from './seat/seat.component';
import { PaymentComponent } from './payment/payment.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  //{path: '', redirectTo: '/personal', pathMatch: 'full'}
  { path: 'root', component: AppComponent },
  {
    path: 'steps',
    component: StepsComponent,
    children: [
      {path: '', redirectTo: 'personal', pathMatch: 'full'},
      { path: 'personal', component: PersonalComponent },
      { path: 'seat', component: SeatComponent },
      { path: 'payment', component: PaymentComponent },
    ],
  },
  {path: '', redirectTo: '/steps/personal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
