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
      title: 'すべて選択してください', buttons: ['閉じる']
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
        { text: '戦艦', value: 'jpbb' }
        // ,{ text: '航空母艦', value: 'jpcv' }
      ];
    }
    if (val == 'us') {
      console.log("us")
      this.type = [
        { text: '駆逐艦', value: 'usdd' },
        { text: '巡洋艦', value: 'usca' },
        { text: '戦艦', value: 'usbb' }
        // , { text: '航空母艦', value: 'uscv' }
      ];
    }
    if (val == 'km') {
      console.log("km")
      this.type = [
        { text: '駆逐艦', value: 'kmdd' },
        { text: '巡洋艦', value: 'kmca' },
        { text: '戦艦', value: 'kmbb' }
        // ,{ text: '航空母艦', value: 'kmcv' }
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
        { text: '戦艦', value: 'ukbb' }
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
        { text: '戦艦', value: 'etbb' }
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
        { text: 'Harugumo', value: 'Harukumo' }

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
        { text: 'Zao', value: 'Zao' },
        { text: 'Katori', value: 'Katori' },
        { text: 'Yubari', value: 'Yubari' },
        { text: 'Atago', value: 'Atago' }
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
        { text: 'Yamato', value: 'Yamato' },
        { text: 'Mikasa', value: 'Mikasa' },
        { text: 'Ishizuchi', value: 'Ishizuchi' },
        { text: 'Ashitaka', value: 'Ashitaka' },
        { text: 'Kii', value: 'Kii' },
        { text: 'Musashi', value: 'Musashi' }
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
        { text: 'Gearing', value: 'Gearing' },
        { text: 'Smith', value: 'Smith' },
        { text: 'Monaghan', value: 'Monaghan' },
        { text: 'Sims', value: 'Sims' },
        { text: 'Kidd', value: 'Kidd' },
        { text: 'Black', value: 'Black' }
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
        { text: 'Worcester', value: 'Worcester' },
        { text: 'Albany', value: 'Albany' },
        { text: 'Marblehead', value: 'Marblehead' },
        { text: 'Atlanta', value: 'Atlanta' },
        { text: 'Indianapolis', value: 'Indianapolis' },
        { text: 'Frint', value: 'Frint' },
        { text: 'Salem', value: 'Salem' }
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
        { text: 'Montana', value: 'Montana' },
        { text: 'Arkansas beta', value: 'Arkansas beta' },
        { text: 'Texas', value: 'Texas' },
        { text: 'Arizona', value: 'Arizona' },
        { text: 'Alabama', value: 'Alabama' },
        { text: 'Massachusetts', value: 'Massachusetts' },
        { text: 'Missouri', value: 'Missouri' }
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
        { text: 'Z-52', value: 'Z-52' },
        { text: 'T-61', value: 'T-61' },
        { text: 'Z-39', value: 'Z-39' }
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
        { text: 'Hindenburg', value: 'Hindenburg' },
        { text: 'Emden', value: 'Emden' },
        { text: 'Admiral Graf Spee', value: 'Admiral Graf Spee' },
        { text: 'Prinz Eugen', value: 'Prinz Eugen' }
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
        { text: 'Großer Kurfürst', value: 'Großer Kurfürst' },
        { text: 'König Albert', value: 'König Albert' },
        { text: 'Scharnhorst', value: 'Scharnhorst' },
        { text: 'Tirpitz', value: 'Tirpitz' }
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
        { text: 'Khabarovsk', value: 'Khabarovsk' },
        { text: 'Ognevoi', value: 'Ognevoi' },
        { text: 'Udaloi', value: 'Udaloi' },
        { text: 'Grozovoi', value: 'Grozovoi' },
        { text: 'Gremyashchy', value: 'Gremyashchy' },
        { text: 'Okhotnik', value: 'Okhotnik' },
        { text: 'Leningrad', value: 'Leningrad' }
      ];
    }

    if (val == 'ruca') {
      console.log(val)
      this.ship = [
        { text: 'Orlan', value: 'Orlan' },
        { text: 'Novik', value: 'Novik' },
        { text: 'Bogatyr', value: 'Bogatyr' },
        { text: 'Svietlana', value: 'Svietlana' },
        { text: 'Kirov', value: 'Kirov' },
        { text: 'Budyonny', value: 'Budyonny' },
        { text: 'Shchors', value: 'Shchors' },
        { text: 'Chapayev', value: 'Chapayev' },
        { text: 'Dmitri Donskoi', value: 'Dmitri Donskoi' },
        { text: 'Moskva', value: 'Moskva' },
        { text: 'Diana', value: 'Diana' },
        { text: 'Oleg', value: 'Oleg' },
        { text: 'Varyag', value: 'Varyag' },
        { text: 'Aurora', value: 'Aurora' },
        { text: 'Murmansk', value: 'Murmansk' },
        { text: 'Krasny Krym', value: 'Krasny Krym' },
        { text: 'Molotov', value: 'Molotov' },
        { text: 'Admiral Makarov', value: 'Admiral Makarov' },
        { text: 'Mikhail Kutuzov', value: 'Mikhail Kutuzov' },
        { text: 'Stalingrad', value: 'Stalingrad' }
      ];
    }

    if (val == 'rubb') {
      console.log(val)
      this.ship = [
        { text: 'Imperator Nikolai I', value: 'Imperator Nikolai I' },
        { text: 'Oktyabrskaya Revolutsiya', value: 'Oktyabrskaya Revolutsiya' }
      ];
    }

    if (val == 'ukdd') {
      console.log(val)
      this.ship = [
        { text: 'Medea', value: 'Medea' },
        { text: 'Valkyrie', value: 'Valkyrie' },
        { text: 'Wakeful', value: 'Wakeful' },
        { text: 'Acasta', value: 'Acasta' },
        { text: 'Icarus', value: 'Icarus' },
        { text: 'Jervis', value: 'Jervis' },
        { text: 'Lightning', value: 'Lightning' },
        { text: 'Jutland', value: 'Jutland' },
        { text: 'Daring', value: 'Daring' },
        { text: 'Campbeltown', value: 'Campbeltown' },
        { text: 'Gallant', value: 'Gallant' },
        { text: 'Cossack', value: 'Cossack' }
      ];
    }

    if (val == 'ukca') {
      console.log(val)
      this.ship = [
        { text: 'Black Swan', value: 'Black Swan' },
        { text: 'Weymouth', value: 'Weymouth' },
        { text: 'Caledon', value: 'Caledon' },
        { text: 'Danae', value: 'Danae' },
        { text: 'Emerald', value: 'Emerald' },
        { text: 'Leander', value: 'Leander' },
        { text: 'Fiji', value: 'Fiji' },
        { text: 'Edinburgh', value: 'Edinburgh' },
        { text: 'Neptune', value: 'Neptune' },
        { text: 'Minotaur', value: 'Minotaur' },
        { text: 'Belfast', value: 'Belfast' }
      ];
    }

    if (val == 'ukbb') {
      console.log(val)
      this.ship = [
        { text: 'Bellerophon', value: 'Bellerophon' },
        { text: 'Orion', value: 'Orion' },
        { text: 'Iron Duke', value: 'Iron Duke' },
        { text: 'Queen Elizabeth', value: 'Queen Elizabeth' },
        { text: 'King George V', value: 'King George V' },
        { text: 'Monarch', value: 'Monarch' },
        { text: 'Lion', value: 'Lion' },
        { text: 'Conqueror', value: 'Conqueror' },
        { text: 'Dreadnought', value: 'Dreadnought' },
        { text: 'Warspite', value: 'Warspite' },
        { text: 'Hood', value: 'Hood' },
        { text: 'Duke of York', value: 'Duke of York' },
        { text: 'Nelson', value: 'Nelson' },
        { text: 'Vanguard', value: 'Vanguard' }
      ];
    }

    if (val == 'frdd') {
      console.log(val)
      this.ship = [
        { text: 'Aigle', value: 'Aigle' },
        { text: 'Le Terrible', value: 'Le Terrible' }
      ];
    }

    if (val == 'frca') {
      console.log(val)
      this.ship = [
        { text: 'Bougainville', value: 'Bougainville' },
        { text: 'Jurien de la Gravière', value: 'Jurien de la Gravière' },
        { text: 'Friant', value: 'Friant' },
        { text: 'Duguay-Trouin', value: 'Duguay-Trouin' },
        { text: 'Émile Bertin', value: 'Émile Bertin' },
        { text: 'La Galissonnière', value: 'La Galissonnière' },
        { text: 'Algérie', value: 'Algérie' },
        { text: 'Charles Martel', value: 'Charles Martel' },
        { text: 'Saint-Louis', value: 'Saint-Louis' },
        { text: 'Henri IV', value: 'Henri IV' },
        { text: 'De Grasse', value: 'De Grasse' }
      ];
    }

    if (val == 'frbb') {
      console.log(val)
      this.ship = [
        { text: 'Turenne', value: 'Turenne' },
        { text: 'Courbet', value: 'Courbet' },
        { text: 'Bretagne', value: 'Bretagne' },
        { text: 'Normandie', value: 'Normandie' },
        { text: 'Lyon', value: 'Lyon' },
        { text: 'Richelieu', value: 'Richelieu' },
        { text: 'Alsace', value: 'Alsace' },
        { text: 'République', value: 'République' },
        { text: 'Dunkerque', value: 'Dunkerque' },
        { text: 'Gascogne', value: 'Gascogne' },
        { text: 'Jean Bart', value: 'Jean Bart' },
        { text: 'Bourgogne', value: 'Bourgogne' }
      ];
    }

    if (val == 'padd') {
      console.log(val)
      this.ship = [
        { text: 'Long Jiang', value: 'Long Jiang' },
        { text: 'Phra Ruang', value: 'Phra Ruang' },
        { text: 'Shen Yang', value: 'Shen Yang' },
        { text: 'Jian Wei', value: 'Jian Wei' },
        { text: 'Fu Shun', value: 'Fu Shun' },
        { text: 'Gadjah Madah', value: 'Gadjah Madah' },
        { text: 'Hsien Yang', value: 'Hsien Yang' },
        { text: 'Chung Mu', value: 'Chung Mu' },
        { text: 'Yueyang', value: 'Yueyang' },
        { text: 'Anshan', value: 'Anshan' },
        { text: 'Lo Yang', value: 'Lo Yang' }
      ];
    }

    if (val == 'paca') {
      console.log(val)
      this.ship = [
        { text: 'Cheng An', value: 'Cheng An' },
        { text: 'Huang He', value: 'Huang He' },
        { text: 'Irian', value: 'Irian' }
      ];
    }

    if (val == 'podd') {
      console.log(val)
      this.ship = [
        { text: 'Błyskawica', value: 'Błyskawica' }
      ];
    }

    if (val == 'etdd') {
      console.log(val)
      this.ship = [
        { text: 'Vampire', value: 'Vampire' },
        { text: 'Haida', value: 'Haida' }
      ];
    }

    if (val == 'etca') {
      console.log(val)
      this.ship = [
        {
          text: 'Duca d\'Aosta', value: 'Duca d\'Aosta'
        },
        { text: 'Duca degli Abruzzi', value: 'Duca degli Abruzzi' },
        { text: 'Nueve de Julio', value: 'Nueve de Julio' },
        { text: 'Perth', value: 'Perth' }
      ];
    }

    if (val == 'etbb') {
      console.log(val)
      this.ship = [
        { text: 'Giulio Cesare', value: 'Giulio Cesare' },
        { text: 'Roma', value: 'Roma' }
      ];
    }



  }
  holdName(val: any) {
    this.holdShipName = val;
    console.log(this.holdShipName.text)
  }




}
