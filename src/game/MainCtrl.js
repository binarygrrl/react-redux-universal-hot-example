import React, { Component } from "react";
import { connect } from "react-redux";
import { Stage, Ticker, Touch } from '@createjs/easeljs';

// Global Pointers
// DrawLayer: this.props.DrawLayer,
// stage: this.props.stage,
// Main: this.props.Main,
// SpriteLibrary: this.props.SpriteLibrary,
// SoundTrack: this.props.SoundTrack,
// //Global Settings
// isMobile: this.props.isMobile,
// isAudioActive: this.props.isAudioActive,
// isFullscreen: this.props.isFullscreen,
// timeCount: this.props.timeCount,
// timeElaps: this.props.timeElaps,
// timePrev: this.props.timePrev,
// fpsCount: this.props.fpsCount,
// fpsCurrent: this.props.fpsCurrent,

var isMobile = false;
var isAudioActive = true;
var isFullscreen = false;
var timeCount = 0;
var timeElaps = 0;
var timePrev = 0;
var fpsCount = 0;
var fpsCurrent = 0;
var DrawLayer = null;
var stage = null;
var Main = null;
var SpriteLibrary = null;
var SoundTrack = null;

class MainCtrl extends Component {
  static state = {
    shouldUpdate: false,
    currentResource: 0,
    resourceToLoad: 0,
    appState: STATE_LOADING,
    Data: null,
    Preloader: null,
    Animations: null,
    Menu: null,
    Help: null,
    Game: null,
    Bonus: null
  };

  initContainer() {
    var canvas = document.getElementById("canvas");
    stage = new Stage(canvas);
    Touch.enable(stage);

    isMobile = jQuery.browser.mobile;
    if (isMobile === false) {
      stage.enableMouseOver(20);
    }

    timePrev = new Date().getTime();

    Ticker.setFPS(30);
    Ticker.addEventListener("tick", this._update);

    if (navigator.userAgent.match(/Windows Phone/i)) {
      disableSoundMobile = true;
    }
    SpriteLibrary = new CSpriteLibrary();
    //ADD PRELOADER
    Preloader = new CPreloader();
  }

  preloaderReady() {
    this._loadImages();

    if (disableSoundMobile === false || isMobile === false) {
      this._initSounds();
    }

    _bUpdate = true;
  }

  soundLoaded() {
    _iCurResource++;
    var iPerc = Math.floor((_iCurResource / resourceToLoad) * 100);

    Preloader.refreshLoader(iPerc);
  }

  _initSounds() {
    var aSoundsInfo = new Array();
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "win",
      loop: true,
      volume: 1,
      ingamename: "win"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "press_but",
      loop: false,
      volume: 1,
      ingamename: "press_but"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "reel_stop",
      loop: false,
      volume: 1,
      ingamename: "reel_stop"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "reels",
      loop: false,
      volume: 1,
      ingamename: "reels"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "bonus_item_choosen",
      loop: false,
      volume: 1,
      ingamename: "bonus_item_choosen"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "start_reel",
      loop: false,
      volume: 1,
      ingamename: "start_reel"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "reveal_prize",
      loop: false,
      volume: 1,
      ingamename: "reveal_prize"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "press_hold",
      loop: false,
      volume: 1,
      ingamename: "press_hold"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "soundtrack_bonus",
      loop: true,
      volume: 1,
      ingamename: "soundtrack_bonus"
    });
    aSoundsInfo.push({
      path: "./sounds/",
      filename: "soundtrack",
      loop: true,
      volume: 1,
      ingamename: "soundtrack"
    });

    resourceToLoad += aSoundsInfo.length;

    s_aSounds = new Array();
    for (var i = 0; i < aSoundsInfo.length; i++) {
      s_aSounds[aSoundsInfo[i].ingamename] = new Howl({
        src: [aSoundsInfo[i].path + aSoundsInfo[i].filename + ".mp3"],
        autoplay: false,
        preload: true,
        loop: aSoundsInfo[i].loop,
        volume: aSoundsInfo[i].volume,
        onload: Main.soundLoaded
      });
    }
  }

  _loadImages() {
    SpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);

    SpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
    SpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.png");
    SpriteLibrary.addSprite("bg_game", "./sprites/bg_game.jpg");
    SpriteLibrary.addSprite("paytable", "./sprites/paytable.png");
    SpriteLibrary.addSprite("but_play_bg", "./sprites/but_play_bg.png");
    SpriteLibrary.addSprite("mask_slot", "./sprites/mask_slot.png");
    SpriteLibrary.addSprite("spin_but", "./sprites/but_spin_bg.png");
    SpriteLibrary.addSprite("coin_but", "./sprites/but_coin_bg.png");
    SpriteLibrary.addSprite("info_but", "./sprites/but_info_bg.png");
    SpriteLibrary.addSprite("bet_but", "./sprites/bet_but.png");
    SpriteLibrary.addSprite("win_frame_anim", "./sprites/win_frame_anim.png");
    SpriteLibrary.addSprite("but_lines_bg", "./sprites/but_lines_bg.png");
    SpriteLibrary.addSprite("but_maxbet_bg", "./sprites/but_maxbet_bg.png");
    SpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
    SpriteLibrary.addSprite("hit_area_col", "./sprites/hit_area_col.png");
    SpriteLibrary.addSprite("hold_col", "./sprites/hold_col.png");
    SpriteLibrary.addSprite("bonus_bg", "./sprites/bonus_bg.jpg");
    SpriteLibrary.addSprite("star_bonus", "./sprites/star_bonus.png");
    SpriteLibrary.addSprite("bonus_item", "./sprites/bonus_item.png");
    SpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
    SpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
    SpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
    SpriteLibrary.addSprite("logo_pl", "./sprites/logo_pl.png");

    SpriteLibrary.addSprite("polar_bonus", "./sprites/polar_bonus.png");
    SpriteLibrary.addSprite(
      "polar_bg",
      "./sprites/screens/polarAngler_maskSlot.png"
    );
    SpriteLibrary.addSprite(
      "polar_mask",
      "./sprites/screens/polarAngler_bottomMask.png"
    );
    SpriteLibrary.addSprite(
      "polar_topMask",
      "./sprites/screens/polarAngler_topMask.png"
    );

    for (var i = 1; i < NUM_SYMBOLS + 1; i++) {
      SpriteLibrary.addSprite("symbol_" + i, "./sprites/symbol_" + i + ".png");
      SpriteLibrary.addSprite(
        "symbol_" + i + "_anim",
        "./sprites/symbol_" + i + "_anim.png"
      );
    }

    for (var j = 1; j < NUM_PAYLINES + 1; j++) {
      SpriteLibrary.addSprite(
        "payline_" + j,
        "./sprites/payline_" + j + ".png"
      );
    }

    //ADD BONUS ITEM
    for (var j = 0; j < 25; j++) {
      SpriteLibrary.addSprite(
        "bonus_item_" + j,
        "./sprites/bonus_item/bonus_item_" + j + ".png"
      );
    }

    //ADD MAIN ANIMATION IMAGES
    for (var j = 0; j < 20; j++) {
      SpriteLibrary.addSprite(
        "mainAnim_" + j,
        "./sprites/animations/mainScreen-" + j + ".png"
      );
    }

    //ADD ICE ANIMATION IMAGES
    for (var j = 0; j < 9; j++) {
      SpriteLibrary.addSprite(
        "iceAnim_" + j,
        "./sprites/animations/ice-" + j + ".png"
      );
    }

    //ADD BONUS IMAGES
    for (var j = 0; j < 10; j++) {
      SpriteLibrary.addSprite(
        "bonusScreen_" + j,
        "./sprites/animations/bonusScreen-" + j + ".png"
      );
    }

    console.log(SpriteLibrary);

    resourceToLoad += SpriteLibrary.getNumSprites();

    SpriteLibrary.loadSprites();
  }

  _onImagesLoaded() {
    _iCurResource++;

    var iPerc = Math.floor((_iCurResource / resourceToLoad) * 100);

    Preloader.refreshLoader(iPerc);
  }

  _onAllImagesLoaded() {}

  onAllPreloaderImagesLoaded() {
    this._loadImages();
  }

  _onRemovePreloader() {
    Preloader.unload();

    SoundTrack = playSound("soundtrack", 1, true);

    this.gotoMenu();
  }

  gotoMenu() {
    Menu = new CMenu();
    appState = STATE_MENU;
  }

  gotoGame() {
    Game = new CGame(Data);
    console.log("Go to Game");

    //Initialize animations
    Animations = new CAnimations(stage);

    appState = STATE_GAME;
  }

  gotoHelp() {
    Help = new CHelp();
    appState = STATE_HELP;
  }

  stopUpdate() {
    _bUpdate = false;
    Ticker.paused = true;
    $("#block_game").css("display", "block");

    if (disableSoundMobile === false || isMobile === false) {
      Howler.mute(true);
    }
  }

  startUpdate() {
    timePrev = new Date().getTime();
    _bUpdate = true;
    Ticker.paused = false;
    $("#block_game").css("display", "none");

    if (disableSoundMobile === false || isMobile === false) {
      if (isAudioActive) {
        Howler.mute(false);
      }
    }
  }

  _update(event) {
    if (_bUpdate === false) {
      return;
    }
    var iCurTime = new Date().getTime();
    timeElaps = iCurTime - timePrev;
    timeCount += timeElaps;
    fpsCount++;
    timePrev = iCurTime;

    if (timeCount >= 1000) {
      fpsCurrent = fpsCount;
      timeCount -= 1000;
      fpsCount = 0;
    }

    if (appState === STATE_GAME) {
      Game.update();
    }

    stage.update(event);
  }

  render() {
    const { data } = this.props;
    const { Main, Data } = this.state;

    Main = this;
    Data = data;

    PAYTABLE_VALUES = new Array();
    for (var i = 0; i < 8; i++) {
      PAYTABLE_VALUES[i] = data["paytable_symbol_" + (i + 1)];
    }

    ENABLE_FULLSCREEN = Data.fullscreen;
    ENABLE_CHECK_ORIENTATION = Data.check_orientation;
    SHOW_CREDITS = Data.show_credits;

    this.initContainer();

    return null;
  }
}

export default MainCtrl;
