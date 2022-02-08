export const FETCH_DRIVERS_BEGIN = 'FETCH_DRIVERS_BEGIN';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';
export const FETCH_DRIVERS_CLEAR = 'FETCH_DRIVERS_CLEAR';

export function fetchDriversBegin() {
  return {
    type: FETCH_DRIVERS_BEGIN,
  };
}

export function fetchDriversSuccess(drivers) {
  return {
    type: FETCH_DRIVERS_SUCCESS,
    drivers
  };
}

export function fetchDriversError(error) {
  return {
    type: FETCH_DRIVERS_ERROR,
    payload: {
      error: error,
    },
  };
}

export function fetchDriversClear() {
  return {
    type: FETCH_DRIVERS_CLEAR,
  };
}
