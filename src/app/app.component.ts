import { Produto } from './produto';
import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectx';

  ativo: boolean = false;
  valorSalvo: any;
  listaProdutos: any = [];

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
