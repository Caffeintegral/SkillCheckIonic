import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShipData } from '../../providers/shipdata';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  shipsData: any;
  ship: any;

  constructor(public navCtrl: NavController, public shipdata: ShipData) {


  }

  // ionViewWillEnter() {
  //   this.shipdata.getJsonData().subscribe(
  //     result => {
  //       this.shipsData = result.data;
  //       console.log("Success : " + this.shipsData);
  //     },
  //     err => {
  //       console.error("Error : " + err);
  //     },
  //     () => {
  //       console.log('getData completed');
  //     }
  //   );
  // }

  // ionViewDidEnter() {
  //   for (var i = 0; i < this.shipsData.length; i++) {
  //     if (this.shipsData[i].name == 'Hashidate') {
  //       console.log(this.shipsData[i].name);
  //       console.log(this.shipsData[i].type)
  //       console.log(this.shipsData[i].tier)
  //       this.ship = this.shipsData[i]
  //     }
  //   }
  // }

  onclick2() {
    console.log(this.ship.name)
  }

}
