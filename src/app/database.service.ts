import { Injectable } from '@angular/core';
import { Aluno } from './aluno.model';
import { AlunoComponent } from './aluno/aluno.component';
import { listaAlunosCadastrados } from './dbListaAlunos';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  listaAlunos : Aluno [] = listaAlunosCadastrados;

  constructor() { }

  getAlunos() : Aluno[]{
    return this.listaAlunos;
  }

  // addAluno(aluno : Aluno) : boolean {
  //   if
  // }

  addAluno(aluno : Aluno): boolean{
    if (aluno.age >= 18 && aluno.name.length > 0 && aluno.name.trim()){
      // if(aluno.urlPicture == "" || aluno.urlPicture == null){
      //   aluno.urlPicture= "https://st2.depositphotos.com/4111759/12123/v/950/depositphotos_121232442-stock-illustration-male-default-placeholder-avatar-profile.jpg";
      // }

      aluno.id = uuidv4();
      console.log(aluno);
      this.listaAlunos.push(aluno);

      return true;
    }
    return false;

  }

  getAluno(id : string) : Aluno{
    for(let a of this.listaAlunos){
      if(a.id === id){
        return a;
      }
    }
  }

  editarAluno(alunoEditado : Aluno, aluno : Aluno) : boolean {
    console.log("1---")
    console.log(alunoEditado)
    console.log("1---")
    console.log(aluno)
    if(aluno.id === alunoEditado.id){
      let i = this.listaAlunos.indexOf(aluno);
        console.log("=========");
      if(i > -1){
        console.log(i);
        this.listaAlunos[i] = alunoEditado;
        return true
      }
    }

    console.log(aluno);
    return false;

  }

  excluirAluno(aluno : Aluno) : boolean {
    let i = this.listaAlunos.indexOf(aluno);
    if(i > -1){
      this.listaAlunos.splice(i,1);
      return true
    }
    return false;

  }
}






