export const ADD_DRIVER_BEGIN = 'ADD_DRIVER_BEGIN';
export const ADD_DRIVER_SUCCESS = 'ADD_DRIVER_SUCCESS';
export const ADD_DRIVER_ERROR = 'ADD_DRIVER_ERROR';
export const ADD_DRIVER_CLEAR = 'ADD_DRIVER_CLEAR';

export function addDriverBegin() {
  return {
    type: ADD_DRIVER_BEGIN,
  };
}

export function addDriverSuccess(driver) {
  return {
    type: ADD_DRIVER_SUCCESS,
    payload: {
      driver,
    }
  };
}

export function addDriverError(error) {
  return {
    type: ADD_DRIVER_ERROR,
    payload: {
      error,
    },
  };
}

export function addDriverClear() {
  return {
    type: ADD_DRIVER_CLEAR,
  };
}
