import {
  ADD_CAR_BEGIN,
  ADD_CAR_CLEAR,
  ADD_CAR_ERROR,
  ADD_CAR_SUCCESS,
} from '../actions/car';

const initialState = {
  car: null,
  loading: false,
  error: null,
};

export function addCarReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR_BEGIN:
      // Mark state as loading.
      // Reset any errors, starting new request.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_CAR_SUCCESS:
      // New car added, sets loading to false.
      // Replace car in state with one from server.
      return {
        ...state,
        loading: false,
        car: action.payload.car,
      };
    case ADD_CAR_ERROR:
      // Request failed, sets loading to false, saves error to state.
      // Resets car too.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        car: null,
      };
    case ADD_CAR_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
