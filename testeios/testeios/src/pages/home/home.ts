import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';
import { Toast } from '@ionic-native/toast';

//import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
//import { AndroidPermissions } from '@ionic-native/android-permissions';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { CallNumber } from '@ionic-native/call-number';
//import { OpenNativeSettings } from '@ionic-native/open-native-settings';
//import { SocialSharing } from '@ionic-native/social-sharing';
//import { Screenshot } from '@ionic-native/screenshot';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  retorno: any =  { Mensagem: "Sem erros"};

  constructor(public navCtrl: NavController
    //,private localNotifications: LocalNotifications
    ,private toast: Toast
    ,private platform: Platform
    /*
    ,private socialSharing: SocialSharing
    ,private screenshot: Screenshot
    
    ,private androidPermissions: AndroidPermissions
    ,private barcodeScanner: BarcodeScanner
    ,private callNumber: CallNumber
    
    ,private launchNavigator: LaunchNavigator
    ,private openNativeSettings: OpenNativeSettings
    */
  ) {

  }


  enviarPush(){
    // iOS (>= 8)
    // Android (SDK >=7)
    //this.localNotifications.schedule({
    //  text: 'Delayed ILocalNotification',
    //  at: new Date(new Date().getTime() + 3600),
    //  led: 'FF0000',
    //  sound: null
   //});
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



  testarToast(){
    this.showToast("Hello World!");
  }



  /*

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

    verificarPermissaoCamera(){

    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      success => {
        this.retorno = success;
        this.showToast(success)
      },
      err => {
        this.retorno = err;
        this.showToast(err)
      }
    );
  }

  solicitarpermissaoCamera(){
    this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      success => {
        this.retorno = success;
        this.showToast(success)
      },
      err => {
        this.retorno = err;
        this.showToast(err)
      }
    );
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

  discarNumero(){
    this.callNumber.callNumber("999018816", true)
    .then(() => this.showToast('Launched dialer!'))
    .catch(() => this.showToast('Error launching dialer'));
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

  abrirConfiguracoesGPS(){
    this.openNativeSettings.open('location').then(
      success => this.showToast('Settings openned'),
      error => {
        this.showToast('Error open settings ');
        this.retorno = error;
      }
    );
  }
  */
}
