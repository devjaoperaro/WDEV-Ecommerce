import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ar: boolean = false;

  
  ativo: boolean = false;
  valorSalvo: any;
  listaProdutos: any = [];

  MouseEvent(){
    this.ar = !this.ar;
  }


  produto: Produto = new Produto();


  criar(){
    this.ativo = !this.ativo;
  }

  salvarCampo(salvo){
    this.valorSalvo = salvo;
  }

  adicionar(){
    this.listaProdutos.push(this.produto);

    this.produto = new Produto();      //zerando o input 
  }

}
