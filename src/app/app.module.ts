import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunoComponent } from './aluno/aluno.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';


@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    MenuComponent,
    CadastroAlunoComponent,
    ListarAlunosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
