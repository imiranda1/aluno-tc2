import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';
import { AppRoutingModule } from './app-routing.module';
import { EditarAlunoComponent } from './editar-aluno/editar-aluno.component';
import { DeletarAlunoComponent } from './deletar-aluno/deletar-aluno.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    MenuComponent,
    CadastroAlunoComponent,
    ListarAlunosComponent,
    EditarAlunoComponent,
    DeletarAlunoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
