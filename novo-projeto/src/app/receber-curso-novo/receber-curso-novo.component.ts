import { LogService } from './../shared/log.service';
import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'receber-curso-novo',
  templateUrl: './receber-curso-novo.component.html',
  styleUrls: ['./receber-curso-novo.component.scss']
})
export class ReceberCursoNovoComponent implements OnInit {

  ultimoCursoLocal: string = '';
  ultimoCursoGlobal: string = '';

  constructor(private cursosService: CursosService,private logService: LogService) { }

  ngOnInit() {
    this.logService.consoleLog('ReceberCursoNovoComponent.ngOnInit()');
    this.cursosService.eventAddCursoLocal.subscribe( valor => this.ultimoCursoLocal = valor);
    CursosService.eventAddCursoGlobal.subscribe( valor => this.ultimoCursoGlobal = valor);
  }

}
