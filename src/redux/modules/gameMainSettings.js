const GAME_MAIN_SETTINGS = 'redux-example/GAME_MAIN_SETTINGS/GAME_MAIN_SETTINGS';
const GAME_MAIN_SETTINGS_SUCCESS = 'redux-example/GAME_MAIN_SETTINGS/GAME_MAIN_SETTINGS_SUCCESS';
const GAME_MAIN_SETTINGS_FAIL = 'redux-example/GAME_MAIN_SETTINGS/GAME_MAIN_SETTINGS_FAIL';

//Main Settings Reducer
const initialState = {
  loading: false,
  loaded: false,
  status: '',
  main: {
    winOccurrence: 30, //WIN PERCENTAGE.SET A VALUE FROM 0 TO 100.
    slotCash: 100, //THIS IS THE CURRENT SLOT CASH AMOUNT. THE GAME CHECKS IF THERE IS AVAILABLE CASH FOR WINNINGS.
    bonusOccurrence: 15, //SET BONUS OCCURRENCE PERCENTAGE IF PLAYER GET A WIN. SET A VALUE FROM 0 TO 100. (IF 100%, PLAYER GET A BONUS EVERYTIME THERE IS A WIN).
    minReelLoop: 1, //NUMBER OF REEL LOOPS BEFORE SLOT STOPS
    reelDelay: 0, //NUMBER OF FRAMES TO DELAY THE REELS THAT START AFTER THE FIRST ONE
    timeShowWin: 2000, //DURATION IN MILLISECONDS OF THE WINNING COMBO SHOWING
    timeShowAllWins: 2000, //DURATION IN MILLISECONDS OF ALL WINNING COMBO
    money: 100, //STARTING CREDIT FOR THE USER
    minBet: 0.05, //MINIMUM COIN FOR BET
    maxBet: 0.5, //MAXIMUM COIN FOR BET
    maxHold: 3, //MAXIMUM NUMBER OF POSSIBLE HOLD ON REELS
    percWinBonusPrizes: {
        prize1: 50, //OCCURENCE PERCENTAGE FOR BONUS PRIZE 1 IN BONUS
        prize2: 35, //OCCURENCE PERCENTAGE FOR BONUS PRIZE 2 IN BONUS
        prize3: 15 //OCCURENCE PERCENTAGE FOR BONUS PRIZE 3 IN BONUS
    },
    /***********PAYTABLE********************/
    //EACH SYMBOL PAYTABLE HAS 5 VALUES THAT INDICATES THE MULTIPLIER FOR X1,X2,X3,X4 OR X5 COMBOS
    paytableSymbols: {
        sym1: [0, 0, 150, 250, 500], //PAYTABLE FOR SYMBOL 1
        sym2: [0, 0, 100, 150, 200], //PAYTABLE FOR SYMBOL 2
        sym3: [0, 0, 50, 100, 150], //PAYTABLE FOR SYMBOL 3
        sym4: [0, 10, 25, 50, 100], //PAYTABLE FOR SYMBOL 4
        sym5: [0, 10, 25, 50, 100], //PAYTABLE FOR SYMBOL 5
        sym6: [0, 5, 15, 25, 50], //PAYTABLE FOR SYMBOL 6
        sym7: [0, 2, 10, 20, 35], //PAYTABLE FOR SYMBOL 7
        sym8: [0, 1, 5, 10, 15], //PAYTABLE FOR SYMBOL 8
    },
    /*************************************/
    fullscreen: true, //SET THIS TO FALSE IF YOU DON'T WANT TO SHOW FULLSCREEN BUTTON
    checkOrientation: true, //SET TO FALSE IF YOU DON'T WANT TO SHOW ORIENTATION ALERT ON MOBILE DEVICES
    showCredits: true, //ENABLE/DISABLE CREDITS BUTTON IN THE MAIN SCREEN
    numSpinAdsShowing: 10 //NUMBER OF SPIN TO COMPLETE, BEFORE TRIGGERING AD SHOWING.
  }
}

export default function gameMainSettings(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_MAIN_SETTINGS:
      return {
        ...state,
        loading: true
      };
    case GAME_MAIN_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        main: action.result
      };
    case GAME_MAIN_SETTINGS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.GAME_MAIN_SETTINGS && globalState.GAME_MAIN_SETTINGS.loaded;
}

export function load() {
  return {
    types: [GAME_MAIN_SETTINGS, GAME_MAIN_SETTINGS_SUCCESS, GAME_MAIN_SETTINGS_FAIL],
    promise: ({ client }) => client.get('/load-GAME_MAIN_SETTINGS')
  };
}
