import { LogService } from './../shared/log.service';
import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ["Android", "IOS", "Angular"];

  eventAddCursoLocal = new EventEmitter<string>();
  static eventAddCursoGlobal = new EventEmitter<string>();

  constructor(private logService: LogService) { 
    logService.consoleLog('constructor CursosService.');
  }

  getCursos(){
    return this.cursos;
  }

  addCurso(valor){
    this.eventAddCursoLocal.emit(valor);
    CursosService.eventAddCursoGlobal.emit(valor);
    this.logService.consoleLog(valor);
    this.cursos.push(valor);
}


}
