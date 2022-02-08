import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: MenuItem[];

  constructor(auth: AuthService) {
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

}
