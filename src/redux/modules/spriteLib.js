const SPRITE_LIBRARY = 'redux-example/SPRITE_LIBRARY/SPRITE_LIBRARY';
const SPRITE_LIBRARY_SUCCESS = 'redux-example/SPRITE_LIBRARY/SPRITE_LIBRARY_SUCCESS';
const SPRITE_LIBRARY_FAIL = 'redux-example/SPRITE_LIBRARY/SPRITE_LIBRARY_FAIL';

const initialState = {
  loading: false,
  loaded: false,
  status: '',
  spriteLib: {}
};

export default function spriteLib(state = initialState, action = {}) {
  switch (action.type) {
    case SPRITE_LIBRARY:
      return {
        ...state,
        loading: true
      };
    case SPRITE_LIBRARY_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        spriteLib: action.result
      };
    case SPRITE_LIBRARY_FAIL:
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
  return globalState.SPRITE_LIBRARY && globalState.SPRITE_LIBRARY.loaded;
}

export function load() {
  return {
    types: [SPRITE_LIBRARY, SPRITE_LIBRARY_SUCCESS, SPRITE_LIBRARY_FAIL],
    promise: ({ client }) => client.get('/load-SPRITE_LIBRARY')
  };
}
