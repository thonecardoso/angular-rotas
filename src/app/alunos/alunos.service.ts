import {Injectable} from '@angular/core';
import {Aluno} from './alunos.component';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'Aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'Aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'Aluno03@email.com'},
    {id: 4, nome: 'Aluno 04', email: 'Aluno04@email.com'}
  ];

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  constructor() {
  }

  getAluno(id: number): any {
    let alunoRetorno = {};
    this.alunos.forEach((aluno: Aluno) => {
      if (aluno.id == id) {
        alunoRetorno = aluno;
      }
    });
    return alunoRetorno;
  }

  save(aluno: Aluno): void {
    if (aluno.id != 0) {
      for (let i = 0; i < this.alunos.length; i++) {
        if (aluno.id == this.alunos[i].id) {
          this.alunos[i] = aluno;
        }
      }
    }
  }
}
