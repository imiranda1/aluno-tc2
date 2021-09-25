import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Aluno } from '../aluno.model';
import { AlunoComponent } from '../aluno/aluno.component';
import { listaAlunosCadastrados } from "../dbListaAlunos";


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  alunoAdicionar : Aluno = {name:"",age:0,urlPicture:""};
  constructor() { }

  ngOnInit(): void {
  }

  salvarAluno(aluno : Aluno) : void {
    this.alunoAdicionar = aluno

    if (this.validaAluno(aluno)){

      if(aluno.urlPicture ===""){
        aluno.urlPicture = "https://pbs.twimg.com/media/EnM7TmrXcAI0LKx.jpg"
      }

      listaAlunosCadastrados.push(this.alunoAdicionar);
      alert("Aluno Cadastrado com Sucesso");

    }else{
      alert("Formulário Inválido");
    }
  }

  validaAluno(a : Aluno):boolean{
    if (a.age >= 18 && a.name.length > 0 && a.name.trim()){
      return true;
    }
    else false;
  }
}
