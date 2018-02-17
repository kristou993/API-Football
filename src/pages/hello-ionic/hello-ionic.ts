import { DatePipe } from '@angular/common';
import { footservice } from './../../app/service/foot.service';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  foot: any[];
  LigaBBVA: any[];
  BBVA:any[];
  SeriaA:any[];
  Germany:any[];
  check : boolean=false;
  card:boolean=false;
  showfoot:boolean=false;
  datedeb:Date;
  datefin:Date;
  finaldate:string;
  debutdate:string;
 
  annee:number;
  mois:number;
 
  jourdeb:number;
  jourfin:number;
  
  
  constructor(private service : footservice,private pipe : DatePipe,public navCtrl: NavController, public navParams: NavParams) {
    
     
  }


  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }


togglecheck()
{
this.check=!this.check;
}
toggleCard()
{
  this.card=!this.card;

}

GetFootball(f)
{
  this.datedeb=f.value.datedeb;
  console.log(this.datedeb);
this.datefin=f.value.datefin;
console.log(this.datefin);
 this.debutdate=(this.pipe.transform(this.datedeb,'yyyy/M/d'))
this.finaldate=(this.pipe.transform(this.datefin,'yyyy/M/d'))
 console.log(this.debutdate);
  console.log(this.finaldate);

   this.service.Football(this.debutdate,this.finaldate).subscribe(article=>this.foot=article);
this.service.Football2(this.debutdate,this.finaldate).subscribe(article=>this.LigaBBVA=article);
this.service.LaLiga(this.debutdate,this.finaldate).subscribe(article=>this.BBVA=article);
this.service.SerieA(this.debutdate,this.finaldate).subscribe(article=>this.SeriaA=article);
this.service.GermanLiga(this.debutdate,this.finaldate).subscribe(article=>this.Germany=article)

this.showfoot=true;
 
}
}
