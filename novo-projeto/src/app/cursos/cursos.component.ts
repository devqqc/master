import { UtilidadesService } from './../utilidades/utilidades.service';
import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service'


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  providers: [ CursosService]
  //adiciona o provedor para nao definir o serviço como uma singleton
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  appName: string = 'Sem nome';


  constructor(private cursosService: CursosService
    ,private utilidadesService: UtilidadesService
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.appName = this.utilidadesService.getAppName();
    this.cursosService.eventAddCursoLocal.subscribe( valor => console.log('valor recebido por emissão local: ' + valor) );
    this.cursosService.eventAddCursoLocal.subscribe( valor => console.log('valor recebido por emissão global: ' + valor) );
  }

  onAddCurso(valor){
      this.cursosService.addCurso(valor);
  }

}
