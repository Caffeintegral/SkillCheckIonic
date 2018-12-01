import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { ShipData } from '../../providers/shipdata';

/**
 * Generated class for the SkillPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skill',
  templateUrl: 'skill.html',
})
export class SkillPage {
  holdCountry: any;
  holdType: any;
  shipName: any;
  shipsData: any;
  ship: any;
  skillLevel: string = 'level1';
  ugSlot: string = 'slotA';
  skillPoint: number = 0;

  skill = {
    empty1: false,
    empty2: false,
    empty3: false,
    empty4: false,
    empty5: false,
    empty6: false,
    empty7: false,
    empty8: false,
    empty9: false,
    empty10: false,
    empty11: false,
    empty12: false,
    empty13: false,
    empty14: false,
    empty15: false,
    empty16: false,
    empty17: false,
    empty18: false,
    empty19: false,
    empty20: false,
    empty21: false,
    empty22: false,

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public shipdata: ShipData, public alertCtrl: AlertController) {
    this.holdCountry = navParams.get("country")
    this.holdType = navParams.get("typeH")
    this.shipName = navParams.get("shipName")
  }
  default() {

    this.navCtrl.push(DetailPage, {
      shipdetail: this.ship
    });
  }

  toNextPage() {
    if (this.skill.jukurenhousyu) { //熟練砲手
      this.jukurenhousyuSkill()
    }

    if (this.skill.kihonsya) { //基本射撃訓練
      this.kihonsyaSkill()
    }

    if (this.skill.bakusenn) { //爆専
      this.bakusenSkill()
    }

    if (this.skill.joukyu) { //上級射撃訓練
      this.joukyuSkill()
    }

    if (this.skill.ifhe) { //IFHE
      this.IFHESkill()
    }

    if (this.skill.raisokukoujou) { //雷速向上
      this.raisokukoujouSkill()
    }

    if (this.skill.gyoraisenmonka) { //魚雷専門家
      this.gyoraisenmonkaSkill()
    }

    if (this.skill.shiteitaiku) { //指定対空
      this.shiteitaikuSkill()
    }

    if (this.skill.koutan) { //抗堪
      this.koutanSkill()
    }

    if (this.skill.inpei) { //隠蔽
      this.inpeiSkill()
    }





    if (this.skill.syageki0) {
      this.syageki0Skill()
    }

    if (this.skill.syuhou2) {
      this.syuhou2Skill()
    }

    if (this.skill.hukuhou2) {
      this.hukuhou2Skill()
    }

    if (this.skill.syageki1) {
      this.syageki1Skill()
    }

    if (this.skill.syagekikansei1) {
      this.syagekikansei1Skill()
    }

    if (this.skill.taiku2) {
      this.taiku2Skill()
    }

    if (this.skill.souda2) {
      this.souda2Skill()
    }

    if (this.skill.inpei1) {
      this.inpei1Skill()
    }

    if (this.skill.souda3) {
      this.souda3Skill()
    }

    if (this.skill.syuhou3) {
      this.syuhou3Skill()
    }

    if (this.skill.hukuhou3) {
      this.hukuhou3Skill()
    }

    if (this.skill.gyorai3) {
      this.gyorai3Skill()
    }

    if (this.skill.syagekikansei2) {
      this.syagekikansei2Skill()
    }

    if (this.skill.taiku3) {
      this.taiku3Skill()
    }



    if (this.skill.AAFlag) {
      this.AAFlagSkill()
    }

    if (this.skill.SWFlag) {
      this.SWFlagSkill()
    }

    if (this.skill.indiaFlag) {
      this.indiaFlagSkill()
    }

    if (this.skill.hurricaneFlag) {
      this.hurricaneFlagSkill()
    }

    if (this.skill.speedFlag) {
      this.speedFlagSkill()
    }

    if (this.skill.meisai) { //迷彩
      this.meisaiSkill()
    }

    this.navCtrl.push(DetailPage, {
      shipdetail: this.ship
    });
  }

  ionViewWillEnter() {
    console.log(this.shipName.text);

    this.shipdata.getJsonData().subscribe(
      result => {
        this.shipsData = result.data;
        console.log("Success : " + this.shipsData);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        console.log('getData completed');
      }
    );
  }

  ionViewDidEnter() {
    for (var i = 0; i < this.shipsData.length; i++) {
      if (this.shipsData[i].name == this.shipName.text) {
        console.log(this.shipsData[i].name);
        console.log(this.shipsData[i].type)
        console.log(this.shipsData[i].tier)
        this.ship = this.shipsData[i]
      }
    }
  }

  onclick() {
    for (var i = 0; i < this.shipsData.length; i++) {
      if (this.shipsData[i].name == this.shipName) {
        console.log(this.shipsData[i].name);
        console.log(this.shipsData[i].type)
        console.log(this.shipsData[i].tier)
        this.ship = this.shipsData[i]
      }
    }

  }

  jukurenhousyuSkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    var senkaisokudo = 180 / parseFloat(this.ship.mainCycleTime)
    if (syuhoukoukei >= 139) {
      senkaisokudo += 0.7
    }
    if (syuhoukoukei < 139) {
      senkaisokudo += 2.5
    }
    var temp = 180 / senkaisokudo
    this.ship.mainCycleTime = Math.round(temp * 10) / 10
  }

  kihonsyaSkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    var mlt = this.ship.mainLoadingTime
    var slt = this.ship.subLoadingTime
    var AAD = this.ship.AADamage
    if (syuhoukoukei < 139) {
      mlt = mlt * 0.9
    }
    slt = slt * 0.9
    AAD = AAD * 1.20

    this.ship.mainLoadingTime = Math.round(mlt * 10) / 10
    this.ship.subLoadingTime = Math.round(slt * 10) / 10
    this.ship.AADamage = Math.round(AAD * 10) / 10

  }

  bakusenSkill() {
    this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) + 2
    this.ship.subGunFireRate = parseInt(this.ship.subGunFireRate) + 2
  }

  joukyuSkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    var mr = this.ship.mainRange
    var sr = this.ship.subRange
    var AAR = this.ship.AARange
    if (syuhoukoukei < 139) {
      mr = mr * 1.20
    }
    sr = sr * 1.20
    AAR = AAR * 1.20

    this.ship.mainRange = Math.round(mr * 10) / 10
    this.ship.subRange = Math.round(sr * 10) / 10
    this.ship.AARange = Math.round(AAR * 10) / 10
  }

  IFHESkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    if (syuhoukoukei >= 139) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) - 3
    }
    if (syuhoukoukei < 139) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) - 1
    }

    this.ship.subGunFireRate = parseInt(this.ship.subGunFireRate) + 2
  }

  raisokukoujouSkill() {
    this.ship.torpRange = parseFloat(this.ship.torpRange) * 0.8
    this.ship.torpSpeed = parseFloat(this.ship.torpSpeed) + 5
  }

  gyoraisenmonkaSkill() {
    this.ship.torpLoadingTime = parseFloat(this.ship.torpLoadingTime) * 0.9
  }

  shiteitaikuSkill() {
    this.ship.AADamage = parseFloat(this.ship.AADamage) * 2

  }



  koutanSkill() {
    var addHP = this.ship.tier * 350
    this.ship.HP = parseInt(this.ship.HP) + addHP

  }

  inpeiSkill() {
    var SH = this.ship.seaHiding
    var AH = this.ship.airHiding
    if (this.ship.type == "駆逐艦") {
      SH = parseFloat(this.ship.seaHiding) * 0.9
      AH = parseFloat(this.ship.airHiding) * 0.9
    }
    if (this.ship.type == "巡洋艦") {
      SH = parseFloat(this.ship.seaHiding) * 0.88
      AH = parseFloat(this.ship.airHiding) * 0.88
    }
    if (this.ship.type == "戦艦") {
      SH = parseFloat(this.ship.seaHiding) * 0.86
      AH = parseFloat(this.ship.airHiding) * 0.86
    }
    if (this.ship.type == "航空母艦") {
      SH = parseFloat(this.ship.seaHiding) * 0.84
      AH = parseFloat(this.ship.airHiding) * 0.84
    }
    this.ship.seaHiding = Math.round(SH * 10) / 10
    this.ship.airHiding = Math.round(AH * 10) / 10

  }

  syageki0Skill() {
    var sr = this.ship.subRange
    sr = sr * 1.20
    this.ship.subRange = Math.round(sr * 10) / 10
  }

  syuhou2Skill() {
    var senkaisokudo = 180 / parseFloat(this.ship.mainCycleTime)
    senkaisokudo = senkaisokudo * 1.15
    var temp = 180 / senkaisokudo
    this.ship.mainCycleTime = Math.round(temp * 10) / 10

    var syuhousouten = parseFloat(this.ship.mainLoadingTime)
    syuhousouten = syuhousouten * 1.05
    this.ship.mainLoadingTime = Math.round(syuhousouten * 10) / 10
  }

  hukuhou2Skill() {
    var sr = this.ship.subRange
    sr = sr * 1.20
    this.ship.subRange = Math.round(sr * 10) / 10
  }

  syageki1Skill() {
    var sr = this.ship.subRange
    sr = sr * 1.05
    this.ship.subRange = Math.round(sr * 10) / 10
  }

  syagekikansei1Skill() {
    var mr = this.ship.mainRange
    mr = mr * 1.16
    this.ship.mainRange = Math.round(mr * 10) / 10

    var sr = this.ship.subRange
    sr = sr * 1.05
    this.ship.subRange = Math.round(sr * 10) / 10
  }

  taiku2Skill() {
    var AAR = this.ship.AARange
    AAR = AAR * 1.20
    this.ship.AARange = Math.round(AAR * 10) / 10
  }

  souda2Skill() {
    var souda = parseFloat(this.ship.turnTime)
    souda = souda * 0.8
    this.ship.turnTime = Math.round(souda * 10) / 10
  }

  inpei1Skill() {
    var SH = this.ship.seaHiding
    var AH = this.ship.airHiding
    SH = parseFloat(this.ship.seaHiding) * 0.9
    AH = parseFloat(this.ship.airHiding) * 0.9
    this.ship.seaHiding = Math.round(SH * 10) / 10
    this.ship.airHiding = Math.round(AH * 10) / 10

  }

  souda3Skill() {
    var souda = parseFloat(this.ship.turnTime)
    souda = souda * 0.6
    this.ship.turnTime = Math.round(souda * 10) / 10
  }

  syuhou3Skill() {
    var senkaisokudo = 180 / parseFloat(this.ship.mainCycleTime)
    senkaisokudo = senkaisokudo * 0.87
    var temp = 180 / senkaisokudo
    this.ship.mainCycleTime = Math.round(temp * 10) / 10

    var syuhousouten = parseFloat(this.ship.mainLoadingTime)
    syuhousouten = syuhousouten * 0.88
    this.ship.mainLoadingTime = Math.round(syuhousouten * 10) / 10
  }

  hukuhou3Skill() {
    var hukuhousouten = parseFloat(this.ship.subLoadingTime)
    hukuhousouten = hukuhousouten * 0.80
    this.ship.subLoadingTime = Math.round(hukuhousouten * 10) / 10
  }

  gyorai3Skill() {
    this.ship.torpLoadingTime = parseFloat(this.ship.torpLoadingTime) * 0.85

  }

  syagekikansei2Skill() {
    var mr = this.ship.mainRange
    mr = mr * 1.16
    this.ship.mainRange = Math.round(mr * 10) / 10
  }

  taiku3Skill() {
    this.ship.AADamage = parseFloat(this.ship.AADamage) * 1.25

  }

  AAFlagSkill() {
    this.ship.AADamage = parseFloat(this.ship.AADamage) * 1.10
  }

  SWFlagSkill() {
    var sr = this.ship.subRange
    sr = sr * 1.05
    this.ship.subRange = Math.round(sr * 10) / 10

    var slt = this.ship.subLoadingTime
    slt = slt * 0.95
    this.ship.subLoadingTime = Math.round(slt * 10) / 10
  }

  indiaFlagSkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    if (syuhoukoukei >= 160) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) + 0.5
    }
    if (syuhoukoukei < 160) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) + 1
    }

    this.ship.subGunFireRate = parseInt(this.ship.subGunFireRate) + 1
  }

  hurricaneFlagSkill() {
    var syuhoukoukei = parseFloat(this.ship.mainCaliber)
    if (syuhoukoukei >= 160) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) + 0.5
    }
    if (syuhoukoukei < 160) {
      this.ship.mainGunFireRate = parseInt(this.ship.mainGunFireRate) + 1
    }

    this.ship.subGunFireRate = parseInt(this.ship.subGunFireRate) + 1
  }

  speedFlagSkill() {
    var SP = parseFloat(this.ship.speed) * 1.05
    this.ship.speed = Math.round(SP * 10) / 10

  }


  meisaiSkill() {
    var SH = this.ship.seaHiding
    var AH = this.ship.airHiding
    SH = parseFloat(this.ship.seaHiding) * 0.97
    AH = parseFloat(this.ship.airHiding) * 0.97
    this.ship.seaHiding = Math.round(SH * 10) / 10
    this.ship.airHiding = Math.round(AH * 10) / 10
  }


  skillPointCalc1(flag) {
    if (flag == false) {
      this.skillPoint += 1;
      if (this.skillPoint > 19) {
        this.dispAlert();
      }
    } else {
      this.skillPoint -= 1;
    }
  }

  skillPointCalc2(flag) {
    if (flag == false) {
      this.skillPoint += 2;
      if (this.skillPoint > 19) {
        this.dispAlert();
      }
    } else {
      this.skillPoint -= 2;
    }
  }

  skillPointCalc3(flag) {
    if (flag == false) {
      this.skillPoint += 3;
      if (this.skillPoint > 19) {
        this.dispAlert();
      }
    } else {
      this.skillPoint -= 3;
    }
  }

  skillPointCalc4(flag) {
    if (flag == false) {
      this.skillPoint += 4;
      if (this.skillPoint > 19) {
        this.dispAlert();
      }
    } else {
      this.skillPoint -= 4;
    }
  }

  dispAlert() {
    const alert = this.alertCtrl.create({
      title: 'スキルポイントの上限は19です', buttons: ['閉じる']
    });
    alert.present();
  }





}
