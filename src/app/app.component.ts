import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinApp';
  items: MenuItem[];

    ngOnInit() {
      this.items = [
        {
            label: 'Home',
            icon: 'fa fa-home fa-2x',
            routerLink:'home'
        },
        {
          label:'Funds',
          icon:'fa fa-suitcase fa-2x',
          routerLink:'#'
        },
        {
          label:'Members',
          icon:'fa fa-group fa-2x',
          routerLink:'members'
        },
        {
          label:'Admin',
          icon:'fa fa-dashboard fa-2x',
          items: [{
            label: 'New', 
            icon: 'pi pi-fw pi-plus',
            items: [
                {label: 'Project'},
                {label: 'Other'},
            ]
        },
        {label: 'Open'},
        {separator:true},
        {label: 'Quit'}
    ]
        }
    ];    
    }
}
