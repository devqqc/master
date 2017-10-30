import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { Observable } from "rxjs/Observable";
import { Toast } from '@ionic-native/toast';
import { Autostart } from '@ionic-native/autostart';
import { AppMinimize } from '@ionic-native/app-minimize';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contagem: number = 0;
  contagemteste: number = 0;

  constructor(
    public navCtrl: NavController,
    private backgroundMode: BackgroundMode,
    private toast: Toast,
    private autostart: Autostart,
    private appMinimize: AppMinimize,
    private platform: Platform
  ) {
    this.backgroundMode.on('enable').subscribe( observer => {
      this.loop();
    });
  }

  loop(){
    if(!this.backgroundMode.isEnabled())
      return;
    
      this.showToast('Estou vivo!')
    this.contagem = this.contagem + 1;
    setTimeout(() => {
      this.loop();
     },10000);
  }

  looptest(){
    this.contagemteste = this.contagemteste + 1;
    setTimeout(() => {
      this.looptest();
     },1000);
  }

  showToast(msg){
    this.toast.show(msg, '2000', 'bottom').subscribe(
      toast => {
      }
    );
  }


  startService(){
    this.backgroundMode.enable();
    this.contagem = 0;
    this.appMinimize.minimize();
  }

  stopService(){
    this.backgroundMode.disable();
  }

}
