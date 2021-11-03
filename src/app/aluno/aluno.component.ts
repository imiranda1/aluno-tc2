import { Location } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  alunoVizualizar : Aluno;

  constructor(
    private service: DatabaseService,
    private rota : ActivatedRoute,
    private router : Router)
     {

     }

  ngOnInit(): void {
    this.getAluno()
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id")
    this.alunoVizualizar = this.service.getAluno(id);
    console.log(this.alunoVizualizar.urlPicture);
    if(this.alunoVizualizar.urlPicture == null ||this.alunoVizualizar.urlPicture == '' || this.alunoVizualizar.urlPicture === undefined ){
      this.alunoVizualizar.urlPicture="https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121232442-stock-illustration-male-default-placeholder-avatar-profile.jpg"
    }
    console.log(this.alunoVizualizar);
    if(this.alunoVizualizar === undefined){
      this.router.navigate(['/alunos']);
      alert('Aluno não encontrado...');
    }
  }

  voltar() : void {
    this.router.navigate(['/alunos']);
  }

}
