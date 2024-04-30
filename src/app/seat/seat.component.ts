import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})

export class SeatComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
    
  }

  navigateToPrev() {
    this.router.navigate(['/steps/personal'])
  }

  navigateToNext() {
    this.router.navigate(['/steps/payment'])
  }
}