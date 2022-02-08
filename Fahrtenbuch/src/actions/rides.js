export const FETCH_RIDES_BEGIN = 'FETCH_RIDES_BEGIN';
export const FETCH_RIDES_SUCCESS = 'FETCH_RIDES_SUCCESS';
export const FETCH_RIDES_ERROR = 'FETCH_RIDES_ERROR';
export const FETCH_RIDES_CLEAR = 'FETCH_RIDES_CLEAR';

export function fetchRidesBegin() {
  return {
    type: FETCH_RIDES_BEGIN,
  };
}

export function fetchRidesSuccess(rides) {
  return {
    type: FETCH_RIDES_SUCCESS,
    rides
  };
}

export function fetchRidesError(error) {
  return {
    type: FETCH_RIDES_ERROR,
    payload: {
      error: error,
    },
  };
}

export function fetchRidesClear() {
  return {
    type: FETCH_RIDES_CLEAR,
  };
}
