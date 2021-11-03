import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css']
})
export class ListarAlunosComponent implements OnInit {

  listaDeAlunos : Aluno[];
  perfilAlunoSelecionado: Aluno

  constructor(private service : DatabaseService) { }

  ngOnInit(): void {
    this.getAlunos()
  }

  getAlunos() : void {
    this.listaDeAlunos = this.service.getAlunos()
  }

  verPerfil(aluno : Aluno) : void {
    console.log(aluno.name);
    this.perfilAlunoSelecionado = aluno;
  }



}
