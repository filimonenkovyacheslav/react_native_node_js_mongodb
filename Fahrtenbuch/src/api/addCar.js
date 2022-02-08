import Config from 'react-native-config';

import {addCarBegin, addCarError, addCarSuccess} from '../actions/car';

export default function addCar(token, body) {
  const url = Config.API_URL + '/api/register_car';

  const parameters = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(addCarBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {
          const {code, message} = response;

          if (code && message) {
            dispatch(addCarError(response));
            return;
          }

          dispatch(addCarSuccess(response));
        })
        .catch(error => dispatch(addCarError(error)));
  };
}
