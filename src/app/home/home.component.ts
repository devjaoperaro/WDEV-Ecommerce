import { InsereProduto } from './../insere-produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //  template: `<ng2-smart-table [settings]="setting"></ng2-smart-table>`
})
export class HomeComponent implements OnInit {

  produtos;

  constructor() { 
    this.produtos = [ 
      new InsereProduto('caneta', 2.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZP_ugMLtz4hIjBXiXvPz6KlqSW43u3lLBigV6o6NTSqmaPBjh'),
      new InsereProduto('caneca', 5.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYHJUtF4VUDlWrOAkVE5UGnMO-5wSBd3qMJtEF5UGyLwMz6nQz')
    ];
  }
 
   
    
  
  ngOnInit() {
  }

}
