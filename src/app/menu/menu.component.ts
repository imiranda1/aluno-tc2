import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  listar: boolean;
  cadastrar: boolean;

  constructor() { }

  ngOnInit(): void {
    this.listar = true;
  }

  listarAlunos(): void{
    this.listar = true;
    this.cadastrar = false

  }

  cadastrarAluno(): void{
    this.listar = false;
    this.cadastrar = true;
  }
}
