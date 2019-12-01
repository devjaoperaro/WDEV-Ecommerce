import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html', 
  styleUrls: ['./curso.component.css'],
  template: `<ng2-smart-table [settings]="settings"></ng2-smart-table>`
})
export class CursoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };


 
    
  

}
