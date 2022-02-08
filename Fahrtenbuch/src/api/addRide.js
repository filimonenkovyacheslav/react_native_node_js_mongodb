import Config from 'react-native-config';

import {addRideBegin, addRideError, addRideSuccess} from '../actions/ride';

export default function addRide(token, body) {
  const url = Config.API_URL + '/api/new_ride';

  const parameters = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(addRideBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {
          const {code, message} = response;

          if (code && message) {
            dispatch(addRideError(response));
            return;
          }

          dispatch(addRideSuccess(response));
        })
        .catch(error => dispatch(addRideError(error)));
  };
}
