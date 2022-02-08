import {
  ADD_DRIVER_BEGIN,
  ADD_DRIVER_ERROR,
  ADD_DRIVER_SUCCESS,
  ADD_DRIVER_CLEAR,
} from '../actions/driver';

const initialState = {
  driver: null,
  loading: false,
  error: null,
};

export function addDriverReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_DRIVER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_DRIVER_SUCCESS:
      return {
        ...state,
        loading: false,
        driver: action.payload.driver,
      };
    case ADD_DRIVER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ADD_DRIVER_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
