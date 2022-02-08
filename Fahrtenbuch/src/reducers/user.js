import {
  SIGN_IN_BEGIN,
  SIGN_IN_CLEAR,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_UP_BEGIN,
  SIGN_UP_CLEAR,
  SIGN_UP_ERROR,
  SIGN_UP_SUCCESS,
} from '../actions/user';

const authInitialState = {
  token: null,
  loading: false,
  error: null,
  userName: null,
};

export function signInReducer(state = authInitialState, action) {
  switch (action.type) {
    case SIGN_IN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
        userName: action.payload.userName,
      };

    case SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case SIGN_IN_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
}


const registerInitialState = {
  user: null,
  loading: false,
  error: null,
};

export function signUpReducer(state = registerInitialState, action) {
  switch (action.type) {
    case SIGN_UP_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.user,
        error: null,
      };

    case SIGN_UP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: null,
      };

    case SIGN_UP_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
