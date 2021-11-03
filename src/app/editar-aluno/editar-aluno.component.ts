import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-editar-aluno',
  templateUrl: './editar-aluno.component.html',
  styleUrls: ['./editar-aluno.component.css']
})
export class EditarAlunoComponent implements OnInit {
  formEditarAluno : FormGroup;
  alunoEditar : Aluno;
  constructor(    private service: DatabaseService,
    private rota : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.getAluno()
    this.inicializarFormulario();
  }


  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id")
    this.alunoEditar = this.service.getAluno(id);
    console.log(this.alunoEditar);
    if(this.alunoEditar === undefined){
      this.router.navigate(['/alunos']);
      alert('Aluno não encontrado...');
    }
  }

  salvarAluno() : void {
    console.log(this.formEditarAluno.value)
    if (this.service.editarAluno(this.formEditarAluno.value, this.alunoEditar)){
      alert("Aluno Editado com Sucesso");
      this.router.navigate(['/alunos'])

    }else{
      alert("Erro na atualização dos dados");
    }
  }



  private inicializarFormulario(){
    this.formEditarAluno = new FormGroup({
      name: new FormControl(this.alunoEditar.name),
      age: new FormControl(this.alunoEditar.age),
      urlPicture: new FormControl(this.alunoEditar.urlPicture),
      id: new FormControl(this.alunoEditar.id)
    })
  }



}
