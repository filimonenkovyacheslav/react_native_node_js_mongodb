export const ADD_CAR_BEGIN = 'ADD_CAR_BEGIN';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_ERROR = 'ADD_CAR_ERROR';
export const ADD_CAR_CLEAR = 'ADD_CAR_CLEAR';

export function addCarBegin() {
  return {
    type: ADD_CAR_BEGIN,
  };
}

export function addCarSuccess(car) {
  return {
    type: ADD_CAR_SUCCESS,
    payload: {
      car: car,
    },
  };
}

export function addCarError(error) {
  return {
    type: ADD_CAR_ERROR,
    payload: {
      error: error,
    },
  };
}

export function addCarClear() {
  return {
    type: ADD_CAR_CLEAR,
  };
}
