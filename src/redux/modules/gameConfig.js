const GAME_CONFIG = 'redux-example/GAME_CONFIG/GAME_CONFIG';
const GAME_CONFIG_SUCCESS = 'redux-example/GAME_CONFIG/GAME_CONFIG_SUCCESS';
const GAME_CONFIG_FAIL = 'redux-example/GAME_CONFIG/GAME_CONFIG_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  status: '',
  config: {

  }
};

export default function gameConfig(state = initialState, action = {}) {
  switch (action.type) {
    case GAME_CONFIG:
      return {
        ...state,
        loading: true
      };
    case GAME_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        config: action.result
      };
    case GAME_CONFIG_FAIL:
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
  return globalState.GAME_CONFIG && globalState.GAME_CONFIG.loaded;
}

export function load() {
  return {
    types: [GAME_CONFIG, GAME_CONFIG_SUCCESS, GAME_CONFIG_FAIL],
    promise: ({ client }) => client.get('/load-GAME_CONFIG')
  };
}
