import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input()
  display?: boolean;

  @Output()
  displayChange = new EventEmitter<boolean>();

  items: MenuItem[];

  constructor() {
    this.items = [
      {
        label: 'General',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            routerLink: ["/home"]
          },
          {
              label: 'Profile',
              icon: 'pi pi-fw pi-user',
              routerLink: ["/profile"]
          },
        ]
      },
      {
        label: 'DNA',
        items: [
          {
            label: 'Mutant',
            icon: 'pi pi-fw pi-plus',
            routerLink: ["/mutant"]
          },
          {
            label: 'Stats',
            icon: 'pi pi-fw pi-chart-bar',
            routerLink: ["/stats"]
        }
          ]
      }
    ];
  }

  ngOnInit(): void {
  }

  toggleDisplay(): void {
    this.display = !this.display;
    this.displayChange.emit(this.display);
  }

}
