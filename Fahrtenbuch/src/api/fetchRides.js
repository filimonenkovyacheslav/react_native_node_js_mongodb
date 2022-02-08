import Config from 'react-native-config';

import {fetchRidesBegin, fetchRidesError, fetchRidesSuccess} from '../actions/rides';

export default function fetchRides(token) {
  const url = Config.API_URL + '/api/ride_list';
  //const url = Config.API_URL + '/ride_list_1.json';

  const parameters = {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  return dispatch => {
    dispatch(fetchRidesBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {

          const {code, message} = response;

          if (code && message) {
            dispatch(fetchRidesError(response));
            return;
          }

          dispatch(fetchRidesSuccess(response));
        })
        .catch(error => dispatch(fetchRidesError(error)));
  };
}
