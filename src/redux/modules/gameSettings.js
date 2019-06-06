const GAME_SETTINGS = 'redux-example/GAME_SETTINGS/GAME_SETTINGS';
const GAME_SETTINGS_SUCCESS = 'redux-example/GAME_SETTINGS/GAME_SETTINGS_SUCCESS';
const GAME_SETTINGS_FAIL = 'redux-example/GAME_SETTINGS/GAME_SETTINGS_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  status: '',
  settings: {
    canvas: {
        width: 1500,
        height: 640
    },
    edgeboard: {
        x: 300,
        y: 0
    },
    gameFont: "walibi0615bold",
    fpsTime: 1000 / 24,
    disableMobileSound: false,
    states: {
        main: {
            loading: 0,
            menu: 1,
            help: 2,
            game: 3
        },
        game: {
            idle: 0,
            spinning: 1,
            showAllWin: 2,
            showWin: 3
        },
        reel: {
            start: 0,
            moving: 1,
            stop: 2
        },
        events: {
            onMouseDown: 0,
            onMouseUp: 1,
            onMouseOver: 2,
            onMouseOut: 3,
            onDragStart: 4,
            onDragEnd: 5
        }
    },
    reelOffset: {
        x: 300,
        y: 123
    },
    numReels: 5,
    numRows: 3,
    numSymbols: 10,
    numPaylines: 5,
    symbols: { //Special Symbol IDs
        wild: 10,
        freeSpins: 14,
        bonus: 9
    },
    symbolSize: 140,
    spaceBetweenSymbols: 10,
    maxFramesReelEase: 16,
    /*These are set by the main config! - default values added here*/
    minReelLoops: 0,
    reelDelay: 0,
    reelStartY: (123-(140*3)), //this.reelOffset.y - (this.symbolSize * 3),
    reelArrivalY: (123+(140*3)), //this.reelOffset.y + (this.symbolSize * 3),
    timeShowWin: 0,
    timeShowAllWins: 0,
    minBet: 0,
    maxBet: 0,
    totalMoney: 0,
    maxNumHold: 0,
    numPrizes: 3,
    numSymbolsForBonus: 3,
    percWinBonusPrizes: {
        prize1: 0,
        prize2: 0,
        prize3: 0
    },
    soundtrackVolume: 0.5,
    winOccurence: 0,
    slotCash: 0,
    minWin: 0,
    bonusOccurrence: 0,
    paytableValues: [],
    bonusPrizes: [
        [5, 50, 100], //LIST OF MULTIPLIER IF 3 BONUS ITEM
        [10, 100, 200], //LIST OF MULTIPLIER IF 4 BONUS ITEM
        [50, 200, 500] //LIST OF MULTIPLIER IF 5 BONUS ITEM
    ],
    enable: {
        fullScreenBtn: true,
        checkOrientation: true,
        creditsBtn: true
    }
  }
};

export default function gameSettings(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_SETTINGS:
      return {
        ...state,
        loading: true
      };
    case GAME_SETTINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        settings: action.result
      };
    case GAME_SETTINGS_FAIL:
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
  return globalState.GAME_SETTINGS && globalState.GAME_SETTINGS.loaded;
}

export function load() {
  return {
    types: [GAME_SETTINGS, GAME_SETTINGS_SUCCESS, GAME_SETTINGS_FAIL],
    promise: ({ client }) => client.get('/load-GAME_SETTINGS')
  };
}
