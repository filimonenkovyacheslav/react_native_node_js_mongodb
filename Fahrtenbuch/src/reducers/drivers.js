import {
  FETCH_DRIVERS_BEGIN,
  FETCH_DRIVERS_CLEAR,
  FETCH_DRIVERS_ERROR,
  FETCH_DRIVERS_SUCCESS,
} from '../actions/drivers';

const initialState = {
  drivers: [],
  loading: false,
  error: null,
};

export function fetchDriversReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DRIVERS_BEGIN:
      // Mark state as loading.
      // Reset any errors, starting new request.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DRIVERS_SUCCESS:
      // Drivers fetched, sets loading to false.
      // Replace drivers in state.
      return {
        ...state,
        loading: false,
        drivers: action.drivers,
      };
    case FETCH_DRIVERS_ERROR:
      // Request failed, sets loading to false, saves error to state.
      // Resets driver too.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        drivers: [],
      };
    case FETCH_DRIVERS_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
