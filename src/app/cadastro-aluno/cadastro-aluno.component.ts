import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Aluno } from '../aluno.model';
import { AlunoComponent } from '../aluno/aluno.component';
import { DatabaseService } from '../database.service';
import { listaAlunosCadastrados } from "../dbListaAlunos";


@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  // alunoAdicionar : Aluno = {id:"",name:"",age:0,urlPicture:""};
  formCadastroAluno: FormGroup
  constructor(private service : DatabaseService, private router : Router) { }

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario(){
    this.formCadastroAluno = new FormGroup({
      name: new FormControl(null),
      age: new FormControl(null),
      urlPicture: new FormControl(null),
    })
  }
  salvarAluno() : void {
    if (this.service.addAluno(this.formCadastroAluno.value)){
      console.log(this.formCadastroAluno.value);
      alert("Aluno Cadastrado com Sucesso");
      this.router.navigate(['/alunos'])

    }else{
      alert("Formulário Inválido");
    }
  }
}
