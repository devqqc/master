import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(valor){
    console.log(`consoleLog->${valor}`);
  }

}
