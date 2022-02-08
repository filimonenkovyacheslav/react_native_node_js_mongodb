import {
  FETCH_RIDES_BEGIN,
  FETCH_RIDES_CLEAR,
  FETCH_RIDES_ERROR,
  FETCH_RIDES_SUCCESS,
} from '../actions/rides';

const initialState = {
  rides: [],
  loading: false,
  error: null,
};

export function fetchRidesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_RIDES_BEGIN:
      // Mark state as loading.
      // Reset any errors, starting new request.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RIDES_SUCCESS:
      // Rides fetched, sets loading to false.
      // Replace rides in state.
      return {
        ...state,
        loading: false,
        rides: action.rides,
      };
    case FETCH_RIDES_ERROR:
      // Request failed, sets loading to false, saves error to state.
      // Resets ride too.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        rides: [],
      };
    case FETCH_RIDES_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
