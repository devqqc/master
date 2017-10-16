import { Injectable } from '@angular/core';

@Injectable()
export class UtilidadesService {

  constructor() { 
    console.log('constructor UtilidadesService(singleton).');
  }

  getAppName(){
    return "Meu primeiro app angular";
  }

}
