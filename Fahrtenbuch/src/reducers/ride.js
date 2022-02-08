import {
  ADD_RIDE_BEGIN,
  ADD_RIDE_CLEAR,
  ADD_RIDE_ERROR,
  ADD_RIDE_SUCCESS,
} from '../actions/ride';

const initialState = {
  ride: null,
  loading: false,
  error: null,
};

export function addRideReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RIDE_BEGIN:
      // Mark state as loading.
      // Reset any errors, starting new request.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_RIDE_SUCCESS:
      // New ride added, sets loading to false.
      // Replace ride in state with one from server.
      return {
        ...state,
        loading: false,
        ride: action.payload.ride,
      };
    case ADD_RIDE_ERROR:
      // Request failed, sets loading to false, saves error to state.
      // Resets ride too.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        ride: null,
      };
    case ADD_RIDE_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
