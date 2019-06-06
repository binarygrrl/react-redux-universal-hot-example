//Config Reducers

//Settings Reducer
const initialState = {
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
    reelStartY: this.reelOffset.y - (this.symbolSize * 3),
    reelArrivalY: this.reelOffset.y + (this.symbolSize * 3),
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

function gameSettingsReducer(state = initialState, action) {
    return state;
};

//Translations Reducer
const initialState = {
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
function gameTranslationsReducer(state = initialState, action) {
    return state;
};

//Main Settings Reducer
const initialState = {
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
function mainSettingsReducer(state = initialState, action) {
    return state;
};
