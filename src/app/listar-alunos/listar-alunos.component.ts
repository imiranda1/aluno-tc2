import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { listaAlunosCadastrados } from "../dbListaAlunos";

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  listaDeAlunos : Aluno[];
  perfilAlunoSelecionado: Aluno

  constructor() { }

  ngOnInit(): void {
    this.listaDeAlunos = listaAlunosCadastrados;
  }

  verPerfil(aluno : Aluno) : void {
    console.log(aluno.name);
    this.perfilAlunoSelecionado = aluno;
  }



}
