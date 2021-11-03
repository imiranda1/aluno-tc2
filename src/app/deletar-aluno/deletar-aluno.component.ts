import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno.model';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-deletar-aluno',
  templateUrl: './deletar-aluno.component.html',
  styleUrls: ['./deletar-aluno.component.css']
})
export class DeletarAlunoComponent implements OnInit {

  alunoExcluir: Aluno;
  constructor(
    private service: DatabaseService,
    private rota : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.getAluno();
    this.excluirAluno();
  }

  getAluno(): void {
    let id = this.rota.snapshot.paramMap.get("id")
    this.alunoExcluir = this.service.getAluno(id);
    console.log(this.alunoExcluir);
    if(this.alunoExcluir === undefined){
      this.router.navigate(['/alunos']);
      alert('Aluno não encontrado...');
    }
  }

  excluirAluno(): void {
    if (this.service.excluirAluno(this.alunoExcluir)){
      alert('Aluno excluído com sucesso!')
      this.router.navigate(['/alunos']);
    }

  }

}
