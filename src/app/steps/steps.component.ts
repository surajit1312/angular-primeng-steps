import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

export interface CustomMenuItem extends MenuItem {
  customLabel: string;
}

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  providers: [MessageService],
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit, AfterViewInit {
  items!: CustomMenuItem[];

  activeIndex: number = 0;
  // @ViewChildren('p-steps-item', { read: ElementRef }) stepItems!: QueryList<MenuItem>;

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
        customLabel: 'AAAA,BBBB,CCCC'
      },
      {
        label: 'Seat',
        routerLink: 'seat',
        customLabel: 'DDDD,EEEE'
      },
      {
        label: 'Payment',
        routerLink: 'payment',
        customLabel: 'FFFF,GGGG,HHHH'
      },
    ];
  }

  ngAfterViewInit(): void {
    const stepItems = document.getElementsByClassName('p-steps-title');
    const listItems = Array.from(document.getElementsByClassName('p-steps-title'));
    this.items.forEach((item: CustomMenuItem, index: number) => {
      let minStrList = '';
      const minLists = item.customLabel.split(',');
      minLists.forEach((minListItem: string) => {
        minStrList += `<li>${minListItem.trim()}</li>`;
      });
      const elementConst = `<ul class="p-step-header-title">${minStrList}</ul>`;
      document.getElementsByClassName('p-steps-title')[index].innerHTML = elementConst;
    });
  }
}
