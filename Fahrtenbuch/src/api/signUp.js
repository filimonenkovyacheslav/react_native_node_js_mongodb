import Config from 'react-native-config';
import { signUpBegin, signUpError, signUpSuccess } from '../actions/user';

export default function signUp(body) {
  const url = Config.API_URL + '/api/register';

  const parameters = {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return dispatch => {
    dispatch(signUpBegin());

    fetch(url, parameters)
        .then(res => res.json())
        .then(response => {
          const {success, code, message} = response;

          if (success === false) {
            dispatch(signUpError(response));
            return;
          }

          if (code && message) {
            dispatch(signUpError(response));
            return;
          }

          dispatch(signUpSuccess(response));
        })
        .catch(error => dispatch(signUpError(error)));
  };
}
