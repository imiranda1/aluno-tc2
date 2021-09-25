import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  @Input() alunoVizualizar : Aluno;
    // aluno : Aluno = {
    //   name: "Icaro",
    //   age: 32,
    //   urlPicture:'https://thispersondoesnotexist.com/'
    // }

  constructor() { }

  ngOnInit(): void {

  }

}
