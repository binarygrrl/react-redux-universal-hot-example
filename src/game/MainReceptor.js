//These Should Become watchers
$(oMain).on("start_session", function(evt) {
  if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeStartSession();
  }
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("end_session", function(evt) {
  if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeEndSession();
  }
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("bet_placed", function(evt, oBetInfo) {
  var iBet = oBetInfo.bet;
  var iTotBet = oBetInfo.tot_bet;
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("save_score", function(evt, iMoney) {
  if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeSaveScore({
          score: iMoney
      });
  }
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("bonus_start", function(evt) {
  //...ADD YOUR CODE HERE EVENTUALLY
  console.log('main bonus start');
});

$(oMain).on("bonus_end", function(evt, iMoney) {
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("show_interlevel_ad", function(evt) {
  if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeShowInterlevelAD();
  }
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("share_event", function(evt, oData) {
  trace(oData)
  if (getParamValue('ctl-arcade') === "true") {
      parent.__ctlArcadeShareEvent(oData);
  }
  //...ADD YOUR CODE HERE EVENTUALLY
});

$(oMain).on("key_pressed", function(evt, oData) {
  console.log('oMain key_pressed fired');
  //this.keyPressed();
});