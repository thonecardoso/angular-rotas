import {Component, OnDestroy, OnInit} from '@angular/core';
import {Aluno} from '../alunos.component';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AlunosService} from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {

  aluno: Aluno = { id: 0, email: '', nome: ''};
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        const id = params.id;
        this.aluno = this.alunosService.getAluno(id);
        console.log(this.aluno);
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  adicionarAluno(): void {
    this.alunosService.save(this.aluno);
  }
}
