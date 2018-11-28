import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  pet: string = "puppies";

  holdCountry: any;
  holdType: any;
  shipName: any;
  shipsData: any;
  ship: any;

  skillLevel: string = 'level1';
  ugSlot: string = 'slotA';

  skill = {
    jukurenhousyu: false,
    kihonsya: false,
    bakusenn: false,
    joukyu: false,
    ifhe: false,
    raisokukoujou: false,
    gyoraisenmonka: false,
    shiteitaiku: false,
    koutan: false,
    inpei: false,

    syageki0: false,
    syuhou2: false,
    hukuhou2: false,
    syageki1: false,
    syagekikansei1: false,
    taiku2: false,
    souda2: false,
    inpei1: false,
    souda3: false,
    syuhou3: false,
    hukuhou3: false,
    gyorai3: false,
    syagekikansei2: false,
    taiku3: false,

    AAFlag: false,
    SWFlag: false,
    indiaFlag: false,
    hurricaneFlag: false,
    speedFlag: false,


    meisai: false
  }

  appType = 'Paid';
  weather = 'sunny';

  items: any = {
    'level1': [
      {
        name: 'Favorites',
        icon: 'ios-star-outline'
      },
      {
        name: 'History',
        icon: 'ios-clock-outline'
      }
    ],
    'level2': [
      {
        name: 'Terms of Service',
        icon: 'create'
      },
      {
        name: 'User Guide',
        icon: 'book'
      }
    ],
    'level3': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
    ,
    'level4': [
      {
        name: 'Ionic Framework',
        icon: 'ionic'
      },
      {
        name: 'Learn Angular',
        icon: 'logo-angular'
      }
    ]
  };


  getSafariItems(type: any) {
    return this.items[type];
  }
}