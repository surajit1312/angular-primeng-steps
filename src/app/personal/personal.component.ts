import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})

export class PersonalComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
    
  }

  navigateToNext() {
    this.router.navigate(['/steps/seat'])
  }
}