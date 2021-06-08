import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(): any {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ];
  }

  getCurso(id: any): any {
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }

  constructor() {
  }
}
