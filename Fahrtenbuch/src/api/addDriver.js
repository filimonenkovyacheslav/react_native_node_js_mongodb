import Config from 'react-native-config';

import {addDriverBegin, addDriverError, addDriverSuccess} from '../actions/driver';

export default function addDriver(token, body) {
  const url = Config.API_URL + '/api/register_driver';

  const parameters = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(addDriverBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {
          const {success, code, message} = response;

          if (success === false) {
            dispatch(addDriverError(response));
            return;
          }

          if (code && message) {
            dispatch(addDriverError(response));
            return;
          }

          dispatch(addDriverSuccess(response));
        })
        .catch(error => dispatch(addDriverError(error)));
  }
}
