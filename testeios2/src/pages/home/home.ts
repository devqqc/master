import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';
import { Toast } from '@ionic-native/toast';
import { Platform } from 'ionic-angular';
import { Screenshot } from '@ionic-native/screenshot';
import { SocialSharing } from '@ionic-native/social-sharing';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { CallNumber } from '@ionic-native/call-number';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  retorno: any =  { Mensagem: "Sem erros"};

  constructor(
    public navCtrl: NavController
    ,private localNotifications: LocalNotifications
    ,private platform: Platform
    ,private toast: Toast
    ,private screenshot: Screenshot
    ,private socialSharing: SocialSharing
    ,private barcodeScanner: BarcodeScanner
    ,private callNumber: CallNumber
    ,private launchNavigator: LaunchNavigator) {

  }

  navegarLocalizacao(){
    let options: LaunchNavigatorOptions = {
      start: 'London, ON'
    };
    
    this.launchNavigator.navigate('Toronto, ON', options)
      .then(
        success => this.showToast('Launched navigator'),
        error => this.showToast('Error launching navigator ' + error)
      );
  }



  discarNumero(){
    this.callNumber.callNumber("999018816", true)
    .then(() => this.showToast('Launched dialer!'))
    .catch(() => this.showToast('Error launching dialer'));
  }

  abrirLeitorQrCode(){
    
        this.barcodeScanner.scan().then((barcodeData) => {
          this.retorno = barcodeData;  
          this.showToast('sucesso:' + barcodeData);
          this.showToast(barcodeData);
         }, (err) => {
          this.retorno = err;  
          this.showToast('erro:' + err);
          this.showToast(err);
         });
    
       
      }

  enviarPush(){
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      at: new Date(new Date().getTime() + 3600),
      led: 'FF0000',
      sound: null
   });
  }

  compartilharImagem(){
    this.screenshot.URI(80).then((res) => {
      this.showToast('screenshot sucess');
      this.showToast(res);
      this.showToast('compartilharImagem');
      this.socialSharing.share("Teste compartilhar","teste share",res.URI,null);
      //this.socialSharing.shareViaFacebook("Comparilhar Imagem facebook", res.URI, null)
    }, (error) => {
      this.showToast('screenshot error');
      this.showToast(error);
    });
  }

  enviarToast(){
    this.showToast("teste!");
  }

  showToast(msg){
    if(this.platform.is('core') || this.platform.is('mobileweb')) {
      console.log(msg);
    } else {
      this.toast.show(msg, '5000', 'center').subscribe(
        toast => {
        }
      );
    }
  }

}
