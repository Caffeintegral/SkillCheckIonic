import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SkillPage } from '../skill/skill';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  type: any;
  ship: any;
  holdCountry: any;
  holdType: any;
  holdShipName: any;
  country: string;
  shiptype: string;
  shipname: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {


  }

  toNextPage() {
    if (this.country != null && this.shiptype != null && this.shipname != null) {
      console.log("334")
      this.navCtrl.push(SkillPage, {
        shipName: this.holdShipName,
        typeH: this.holdType,
        country: this.holdCountry
      });
    }
    else {
      this.dispAlert();
    }


  }

  dispAlert() {
    const alert = this.alertCtrl.create({
      title: 'すべて選択したください', buttons: ['閉じる']
    });
    alert.present();
  }

  setType(val: any) {
    this.holdCountry = val
    this.type = null
    this.ship = null
    this.shipname = null
    // console.log(this.holdCountry)
    if (val == 'jp') {
      console.log("jp")
      this.type = [
        { text: '駆逐艦', value: 'jpdd' },
        { text: '巡洋艦', value: 'jpca' },
        { text: '戦艦', value: 'jpbb' },
        { text: '航空母艦', value: 'jpcv' }
      ];
    }
    if (val == 'us') {
      console.log("us")
      this.type = [
        { text: '駆逐艦', value: 'usdd' },
        { text: '巡洋艦', value: 'usca' },
        { text: '戦艦', value: 'usbb' },
        { text: '航空母艦', value: 'uscv' }
      ];
    }
    if (val == 'km') {
      console.log("km")
      this.type = [
        { text: '駆逐艦', value: 'kmdd' },
        { text: '巡洋艦', value: 'kmca' },
        { text: '戦艦', value: 'kmbb' },
        { text: '航空母艦', value: 'kmcv' }
      ];
    } if (val == 'ru') {
      console.log("ru")
      this.type = [
        { text: '駆逐艦', value: 'rudd' },
        { text: '巡洋艦', value: 'ruca' },
        { text: '戦艦', value: 'rubb' }
      ];
    }
    if (val == 'uk') {
      console.log("uk")
      this.type = [
        { text: '駆逐艦', value: 'ukdd' },
        { text: '巡洋艦', value: 'ukca' },
        { text: '戦艦', value: 'ukbb' },
        { text: '航空母艦', value: 'ukcv' }
      ];
    }
    if (val == 'fr') {
      console.log("fr")
      this.type = [
        { text: '駆逐艦', value: 'frdd' },
        { text: '巡洋艦', value: 'frca' },
        { text: '戦艦', value: 'frbb' }
      ];
    }
    if (val == 'pa') {
      console.log("pa")
      this.type = [
        { text: '駆逐艦', value: 'padd' },
        { text: '巡洋艦', value: 'paca' }
      ];
    }
    if (val == 'po') {
      console.log("po")
      this.type = [
        { text: '駆逐艦', value: 'podd' }
      ];
    }
    if (val == 'et') {
      console.log("et")
      this.type = [
        { text: '駆逐艦', value: 'etdd' },
        { text: '巡洋艦', value: 'etca' },
      ];
    }
  }

  setShip(val: any) {
    this.holdType = val
    this.ship = null
    this.shipname = null
    console.log(this.holdType)
    if (val == 'jpdd') {
      console.log("jpdd")
      this.ship = [
        { text: 'Umikaze', value: 'Umikaze' },
        { text: 'Wakatake', value: 'Wakatake' },
        { text: 'Isokaze', value: 'Isokaze' },
        { text: 'Mutsuki', value: 'Mutsuki' },
        { text: 'Fubuki', value: 'Fubuki' },
        { text: 'Akatsuki', value: 'Akatsuki' },
        { text: 'Kagero', value: 'Kagero' },
        { text: 'Yugumo', value: 'Yugumo' },
        { text: 'Shimakaze', value: 'Shimakaze' },
        { text: 'Minekaze', value: 'Minekaze' },
        { text: 'Hatsuharu', value: 'Hatsuharu' },
        { text: 'Shiratsuyu', value: 'Shiratsuyu' },
        { text: 'Akizuki', value: 'Akizuki' },
        { text: 'Kitakaze', value: 'Kitakaze' },
        { text: 'Harukumo', value: 'Harukumo' }

      ];
    }
    if (val == 'jpca') {
      console.log("jpca")
      this.ship = [
        { text: 'Hashidate', value: 'Hashidate' },
        { text: 'Chikuma', value: 'Chikuma' },
        { text: 'Tenryu', value: 'Tenryu' },
        { text: 'Kuma', value: 'Kuma' },
        { text: 'Furutaka', value: 'Furutaka' },
        { text: 'Aoba', value: 'Aoba' },
        { text: 'Myoko', value: 'Myoko' },
        { text: 'Mogami', value: 'Mogami' },
        { text: 'Ibuki', value: 'Ibuki' },
        { text: 'Zao', value: 'Zao' }
      ];
    }

    if (val == 'jpbb') {
      console.log(val)
      this.ship = [
        { text: 'Kawachi', value: 'Kawachi' },
        { text: 'Myogi', value: 'Myogi' },
        { text: 'Kongo', value: 'Kongo' },
        { text: 'Fuso', value: 'Fuso' },
        { text: 'Nagato', value: 'Nagato' },
        { text: 'Amagi', value: 'Amagi' },
        { text: 'Izumo', value: 'Izumo' },
        { text: 'Yamato', value: 'Yamato' }
      ];
    }

    if (val == 'jpcv') {
      console.log(val)
      this.ship = [
        { text: 'Hosho', value: 'Hosho' },
        { text: 'Zuiho', value: 'Zuiho' },
        { text: 'Ryujo', value: 'Ryujo' },
        { text: 'Hiryu', value: 'Hiryu' },
        { text: 'Syokaku', value: 'Syokaku' },
        { text: 'Taiho', value: 'Taiho' },
        { text: 'Hakuryu', value: 'Hakuryu' }
      ];
    }

    if (val == 'usdd') {
      console.log(val)
      this.ship = [
        { text: 'Sampson', value: 'Sampson' },
        { text: 'Wickes', value: 'Wickes' },
        { text: 'Clemson', value: 'Clemson' },
        { text: 'Nicholas', value: 'Nicholas' },
        { text: 'Farragut', value: 'Farragut' },
        { text: 'Mahan', value: 'Mahan' },
        { text: 'Benson', value: 'Benson' },
        { text: 'Fletcher', value: 'Fletcher' },
        { text: 'Gearing', value: 'Gearing' }
      ];
    }

    if (val == 'usca') {
      console.log("usca")
      this.ship = [
        { text: 'Erie', value: 'Erie' },
        { text: 'Chester', value: 'Chester' },
        { text: 'St.Louis', value: 'St.Louis' },
        { text: 'Phoenix', value: 'Phoenix' },
        { text: 'Omaha', value: 'Omaha' },
        { text: 'Pensacola', value: 'Pensacola' },
        { text: 'New Orlans', value: 'New Orlans' },
        { text: 'Baltimore', value: 'Baltimore' },
        { text: 'Buffalo', value: 'Buffalo' },
        { text: 'Des Moines', value: 'Des Moines' },
        { text: 'Dallas', value: 'Dallas' },
        { text: 'Helena', value: 'Helena' },
        { text: 'Cleveland', value: 'Cleveland' },
        { text: 'Seattle', value: 'Seattle' },
        { text: 'Worcester', value: 'Worcester' }
      ];
    }

    if (val == 'usbb') {
      console.log(val)
      this.ship = [
        { text: 'South Carolina', value: 'South Carolina' },
        { text: 'Wyoming', value: 'Wyoming' },
        { text: 'New York', value: 'New York' },
        { text: 'New Mexico', value: 'New Mexico' },
        { text: 'Colorado', value: 'Colorado' },
        { text: 'North Carolina', value: 'North Carolina' },
        { text: 'Iowa', value: 'Iowa' },
        { text: 'Montana', value: 'Montana' }
      ];
    }

    if (val == 'uscv') {
      console.log(val)
      this.ship = [
        { text: 'Langley', value: 'Langley' },
        { text: 'Bogue', value: 'Bogue' },
        { text: 'Independence', value: 'Independence' },
        { text: 'Ranger', value: 'Ranger' },
        { text: 'Lexington', value: 'Lexington' },
        { text: 'Essex', value: 'Essex' },
        { text: 'Midway', value: 'Midway' }
      ];
    }

    if (val == 'kmdd') {
      console.log(val)
      this.ship = [
        { text: 'V-25', value: 'V-25' },
        { text: 'G-101', value: 'G-101' },
        { text: 'V-170', value: 'V-170' },
        { text: 'T-22', value: 'T-22' },
        { text: 'Ernst Gaede', value: 'Ernst Gaede' },
        { text: 'Leberecht Maass', value: 'Leberecht Maass' },
        { text: 'Z-23', value: 'Z-23' },
        { text: 'Z-46', value: 'Z-46' },
        { text: 'Z-52', value: 'Z-52' }
      ];
    }

    if (val == 'kmca') {
      console.log(val)
      this.ship = [
        { text: 'Hermelin', value: 'Hermelin' },
        { text: 'Dresden', value: 'Dresden' },
        { text: 'Kolberg', value: 'Kolberg' },
        { text: 'Karlsruhe', value: 'Karlsruhe' },
        { text: 'Königsberg', value: 'Königsberg' },
        { text: 'Nürnberg', value: 'Nürnberg' },
        { text: 'Yorck', value: 'Yorck' },
        { text: 'Admiral Hipper', value: 'Admiral Hipper' },
        { text: 'Roon', value: 'Roon' },
        { text: 'Hindenburg', value: 'Hindenburg' }
      ];
    }

    if (val == 'kmbb') {
      console.log(val)
      this.ship = [
        { text: 'Nassau', value: 'Nassau' },
        { text: 'Kaiser', value: 'Kaiser' },
        { text: 'König', value: 'König' },
        { text: 'Bayern', value: 'Bayern' },
        { text: 'Gneisenau', value: 'Gneisenau' },
        { text: 'Bismarck', value: 'Bismarck' },
        { text: 'Friedrich Der Große', value: 'Friedrich Der Große' },
        { text: 'Großer Kurfürst', value: 'Großer Kurfürst' }
      ];
    }

    if (val == 'kmcv') {
      console.log(val)
      this.ship = [
        { text: 'Graf Zeppelin', value: 'Graf Zeppelin' }
      ];
    }

    if (val == 'rudd') {
      console.log(val)
      this.ship = [
        { text: 'Storozhevoi', value: 'Storozhevoi' },
        { text: 'Derzki', value: 'Derzki' },
        { text: 'Izyaslav', value: 'Izyaslav' },
        { text: 'Podvoisky', value: 'Podvoisky' },
        { text: 'Gnevny', value: 'Gnevny' },
        { text: 'Minsk', value: 'Minsk' },
        { text: 'Kiev', value: 'Kiev' },
        { text: 'Tashkent', value: 'Tashkent' },
        { text: 'Khabarovsk', value: 'Khabarovsk' }
      ];
    }



  }
  holdName(val: any) {
    this.holdShipName = val;
    console.log(this.holdShipName.text)
  }




}
