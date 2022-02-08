export const SIGN_IN_BEGIN = 'SIGN_IN_BEGIN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR';
export const SIGN_IN_CLEAR = 'SIGN_IN_CLEAR';

export function signInBegin() {
  return {
    type: SIGN_IN_BEGIN,
  };
}

export function signInSuccess(data) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: {
      token: data.token,
      userName: data.userName
    },
  };
}

export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: {
      error,
    },
  };
}

export function signInClear() {
  return {
    type: SIGN_IN_CLEAR,
  };
}

export const SIGN_UP_BEGIN = 'SIGN_UP_BEGIN';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP_CLEAR = 'SIGN_UP_CLEAR';

export function signUpBegin() {
  return {
    type: SIGN_UP_BEGIN,
  };
}

export function signUpSuccess(user) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: {
      user,
    },
  };
}

export function signUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    payload: {
      error,
    },
  };
}

export function signUpClear() {
  return {
    type: SIGN_UP_CLEAR,
  };
}
