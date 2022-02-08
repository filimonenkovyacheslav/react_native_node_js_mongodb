export const ADD_RIDE_BEGIN = 'ADD_RIDE_BEGIN';
export const ADD_RIDE_SUCCESS = 'ADD_RIDE_SUCCESS';
export const ADD_RIDE_ERROR = 'ADD_RIDE_ERROR';
export const ADD_RIDE_CLEAR = 'ADD_RIDE_CLEAR';

export function addRideBegin() {
  return {
    type: ADD_RIDE_BEGIN,
  };
}

export function addRideSuccess(ride) {
  return {
    type: ADD_RIDE_SUCCESS,
    payload: {
      ride: ride,
    },
  };
}

export function addRideError(error) {
  return {
    type: ADD_RIDE_ERROR,
    payload: {
      error: error,
    },
  };
}

export function addRideClear() {
  return {
    type: ADD_RIDE_CLEAR,
  };
}
