import Config from 'react-native-config';

import {fetchCarsBegin, fetchCarsError, fetchCarsSuccess} from '../actions/cars';

export default function fetchCars(token) {
  const url = Config.API_URL + '/api/car_list';

  const parameters = {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  return dispatch => {
    dispatch(fetchCarsBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {

          const {code, message} = response;

          if (code && message) {
            dispatch(fetchCarsError(response));
            return;
          }

          dispatch(fetchCarsSuccess(response));
        })
        .catch(error => dispatch(fetchCarsError(error)));
  };
}
