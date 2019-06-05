const GAMEAPP = 'redux-example/gameapp/GAMEAPP';
const GAMEAPP_SUCCESS = 'redux-example/gameapp/GAMEAPP_SUCCESS';
const GAMEAPP_FAIL = 'redux-example/gameapp/GAMEAPP_FAIL';

const initialState = {
  loaded: false
};

export default function gameapp(state = initialState, action = {}) {
  switch (action.type) {
    case GAMEAPP:
      return {
        ...state,
        loading: true
      };
    case GAMEAPP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result
      };
    case GAMEAPP_FAIL:
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
  return globalState.gameapp && globalState.gameapp.loaded;
}

export function load() {
  return {
    types: [GAMEAPP, GAMEAPP_SUCCESS, GAMEAPP_FAIL],
    promise: ({ client }) => client.get('/load-gameapp')
  };
}
