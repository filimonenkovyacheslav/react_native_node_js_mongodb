import {
  FETCH_CARS_BEGIN,
  FETCH_CARS_CLEAR,
  FETCH_CARS_ERROR,
  FETCH_CARS_SUCCESS,
} from '../actions/cars';

const initialState = {
  cars: [],
  loading: false,
  error: null,
};

export function fetchCarsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS_BEGIN:
      // Mark state as loading.
      // Reset any errors, starting new request.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CARS_SUCCESS:
      // Cars fetched, sets loading to false.
      // Replace cars in state.
      return {
        ...state,
        loading: false,
        cars: action.cars,
      };
    case FETCH_CARS_ERROR:
      // Request failed, sets loading to false, saves error to state.
      // Resets car too.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        cars: [],
      };
    case FETCH_CARS_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
