import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Forms',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'ReactiveForms',
            icon: 'pi pi-fw pi-plus',
            routerLink: '/reactiveForms',
            routerLinkActiveOptions: 'active'
          },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/templateDrivenForms'
          },
          {
            label: 'Component Communication',
            icon: '',
            routerLink: '/compCommunication'
          }
        ]
      },
      {
        label: 'Services',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Employee List', icon: 'pi pi-fw pi-plus', routerLink: '/employeeList' },
          {
            label: 'TemplateDrivenForms',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'pi pi-fw pi-cog',
        items: [
          { label: 'New', icon: 'pi pi-fw pi-plus' },
          { label: 'Actions', icon: 'pi pi-fw pi-cog' }
        ]
      }
    ];
  }

}
