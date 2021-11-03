import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { AlunoComponent } from './aluno/aluno.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { DeletarAlunoComponent } from './deletar-aluno/deletar-aluno.component';

const routes : Routes = [
  {path: 'alunos', component: ListarAlunosComponent},
  {path: 'alunos/cadastrar', component: CadastroAlunoComponent},
  {path: 'alunos/detalhes/:id', component: AlunoComponent},
  {path: 'alunos/editar/:id', component: EditarAlunoComponent},
  {path: 'alunos/excluir/:id', component: DeletarAlunoComponent},
  {path: '', redirectTo:'/alunos', pathMatch: 'full'}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
