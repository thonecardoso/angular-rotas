import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {CursosService} from "../cursos/cursos.service";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id!: string;
  curso: any;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (value: any) => {
        this.id = value.id;
        this.curso = this.cursoService.getCurso(this.id);

        if(this.curso == null){
          this.router.navigate(['naoEncontrado']);
        }
      });
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe();
  }

}
