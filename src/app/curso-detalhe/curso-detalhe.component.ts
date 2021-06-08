import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id!: string;
  inscricao!: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      ((value: any) => this.id = value['id'])
    );
  }

  ngOnDestroy(): void{
    this.inscricao.unsubscribe();
  }

}
