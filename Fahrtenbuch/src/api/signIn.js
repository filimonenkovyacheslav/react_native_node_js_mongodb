import Config from 'react-native-config';
import {signInBegin, signInError, signInSuccess} from '../actions/user';

export default function signIn(body) {
  const url = Config.API_URL + '/api/login';

  const parameters = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(signInBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {
          const {success, code, message} = response;

          if (success === false) {
            dispatch(signInError(response));
            return;
          }

          if (code && message) {
            dispatch(signInError(response));
            return;
          }

          dispatch(signInSuccess(response));
        })
        .catch(error => dispatch(signInError(error)));
  };
}
