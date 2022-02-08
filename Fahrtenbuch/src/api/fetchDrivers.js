import Config from 'react-native-config';

import {fetchDriversBegin, fetchDriversError, fetchDriversSuccess} from '../actions/drivers';

export default function fetchDrivers(token) {
  const url = Config.API_URL + '/api/driver_list';

  const parameters = {
    method: 'get',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  return dispatch => {
    dispatch(fetchDriversBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {

          const {code, message} = response;

          if (code && message) {
            dispatch(fetchDriversError(response));
            return;
          }

          dispatch(fetchDriversSuccess(response));
        })
        .catch(error => dispatch(fetchDriversError(error)));
  };
}
