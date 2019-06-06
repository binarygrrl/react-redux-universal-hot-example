const GAME_TRANSLATIONS = 'redux-example/GAME_TRANSLATIONS/GAME_TRANSLATIONS';
const GAME_TRANSLATIONS_SUCCESS = 'redux-example/GAME_TRANSLATIONS/GAME_TRANSLATIONS_SUCCESS';
const GAME_TRANSLATIONS_FAIL = 'redux-example/GAME_TRANSLATIONS/GAME_TRANSLATIONS_FAIL';

//Translations Reducer
const initialState = {
  loading: false,
  loaded: false,
  status: '',
  translations: {
    textMoney: "MONEY",
    textPlay: "PLAY",
    textBet: "BET",
    textCoin: "COIN",
    textMaxBet: "MAX BET",
    textInfo: "INFO",
    textLines: "LINES",
    textSpin: "SPIN",
    textWin: "WIN",
    textHold: "HOLD",
    textHelpWild: "JOLLY SYMBOL CAN REPLACE ANY OTHER SYMBOL TO MAKE UP A COMBO",
    textHelpBonus: "3 OR MORE RIBBON BOW LET YOU PLAY THE BONUS GAME!",
    textCreditsDeveloped: "DEVELOPED BY",
    textCurrency: "$",
    textPreloaderContinue: "START",
    textCongratulations: "Congratulations!",
    textMsgShare1: "You collected <strong>",
    textMsgShare2: " points</strong>!<br><br>Share your score with your friends!",
    textMsgSharing1: "My score is ",
    textMsgSharing2: " points! Can you do better?",
  }
};

export default function gameTranslations(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_TRANSLATIONS:
      return {
        ...state,
        loading: true
      };
    case GAME_TRANSLATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        translations: action.result
      };
    case GAME_TRANSLATIONS_FAIL:
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
  return globalState.GAME_TRANSLATIONS && globalState.GAME_TRANSLATIONS.loaded;
}

export function load() {
  return {
    types: [GAME_TRANSLATIONS, GAME_TRANSLATIONS_SUCCESS, GAME_TRANSLATIONS_FAIL],
    promise: ({ client }) => client.get('/load-GAME_TRANSLATIONS')
  };
}
