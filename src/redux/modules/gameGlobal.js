const GAME_GLOBAL = 'redux-example/GAME_GLOBAL/GAME_GLOBAL';
const GAME_GLOBAL_SUCCESS = 'redux-example/GAME_GLOBAL/GAME_GLOBAL_SUCCESS';
const GAME_GLOBAL_FAIL = 'redux-example/GAME_GLOBAL/GAME_GLOBAL_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  status: '',
  global: {
    //Global Pointers
    DrawLayer: null,
    Stage: null,
    Main: null,
    SpriteLibrary: null,
    SoundTrack: null,
    //Global Settings
    isMobile: false,
    isAudioActive: true,
    isFullscreen: false,
    timeCount: 0,
    timeElaps: 0,
    timePrev: 0,
    fpsCount: 0,
    fpsCurrent: 0,
    //Keycodes
    keycodes: {
      space: 32,
      up: 38,
      down: 40,
      left: 37,
      right: 39,
      w: 87,
      a: 65,
      b: 66,
      c: 67,
      d: 68,
      e: 69,
      f: 70
    },
    data: {}
  }
};

export default function gameGlobal(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_GLOBAL:
      return {
        ...state,
        loading: true
      };
    case GAME_GLOBAL_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GAME_GLOBAL_FAIL:
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
  return globalState.GAME_GLOBAL && globalState.GAME_GLOBAL.loaded;
}

export function load() {
  return {
    types: [GAME_GLOBAL, GAME_GLOBAL_SUCCESS, GAME_GLOBAL_FAIL],
    promise: ({ client }) => client.get('/load-GAME_GLOBAL')
  };
}
