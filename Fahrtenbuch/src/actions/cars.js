export const FETCH_CARS_BEGIN = 'FETCH_CARS_BEGIN';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';
export const FETCH_CARS_CLEAR = 'FETCH_CARS_CLEAR';

export function fetchCarsBegin() {
  return {
    type: FETCH_CARS_BEGIN,
  };
}

export function fetchCarsSuccess(cars) {
  return {
    type: FETCH_CARS_SUCCESS,
    cars
  };
}

export function fetchCarsError(error) {
  return {
    type: FETCH_CARS_ERROR,
    payload: {
      error: error,
    },
  };
}

export function fetchCarsClear() {
  return {
    type: FETCH_CARS_CLEAR,
  };
}
