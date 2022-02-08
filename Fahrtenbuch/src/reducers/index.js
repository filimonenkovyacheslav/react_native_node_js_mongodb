import {combineReducers} from 'redux';

import {addCarReducer} from './car';
import {addDriverReducer} from './driver';
import {signInReducer, signUpReducer} from './user';
import {addRideReducer} from './ride';
import {fetchRidesReducer} from './rides';
import {fetchCarsReducer} from './cars';
import {fetchDriversReducer} from './drivers';


export default combineReducers({
  auth: signInReducer,
  register: signUpReducer,
  addCar: addCarReducer,
  addDriver: addDriverReducer,
  addRide: addRideReducer,
  fetchRides: fetchRidesReducer,
  fetchCars: fetchCarsReducer,
  fetchDrivers: fetchDriversReducer
});
