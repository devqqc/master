import { DadosProvider } from './../../providers/dados/dados';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,private dadosProvider: DadosProvider) {

  }

  getBandas(){
    return this.dadosProvider.getBandas();
  }

}
