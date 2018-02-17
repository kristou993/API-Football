import { Screenshot } from '@ionic-native/screenshot';
import { Component,Input } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  @Input()
  selectedItem: any;

  card:boolean=true;
  goals:boolean=true;

  constructor(public navCtrl: NavController, public navParams: NavParams,private socialSharing: SocialSharing,private screenshot: Screenshot,public alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    console.log( this.selectedItem);
   
  }
  facebook()
  {


     this.screenshot.URI(80).then(res => {
           this.socialSharing.shareViaFacebook("",res.URI,"Multiservice.tn").then(res=>{
                 let alert = this.alertCtrl.create({
      title: 'succès!',
      subTitle: 'Screenshot creée',
      buttons: ['OK']
    });
    alert.present();

           })

  }).catch(err => {
       let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'error ',
      buttons: ['OK']
    });
    alert.present();
  });

  }


  Instagram()
  {

       this.screenshot.URI(80).then(res => {
           this.socialSharing.shareViaInstagram("",res.URI).then(res=>{
                 let alert = this.alertCtrl.create({
      title: 'succès!',
      subTitle: 'Screenshot creée',
      buttons: ['OK']
    });
    alert.present();

           })

  }).catch(err => {
       let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'error ',
      buttons: ['OK']
    });
    alert.present();
  });

  }
}
