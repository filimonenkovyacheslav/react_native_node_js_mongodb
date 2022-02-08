import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Alert } from 'react-native'
import styles from './SignInStyles'
import images from '../../utils/image.utils'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import signInAction from '../../api/signIn'
import { signInClear } from '../../actions/user'
import {decode as atob} from 'base-64'
import AsyncStorage from '@react-native-community/async-storage'


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
    this.handleSignIn = this.handleSignIn.bind(this);
  }


  handleSignIn(event) {
    event.preventDefault()

    const body = {
      email: this.state.email,
      password: this.state.password,
    }

    this.props.signIn(body)

    setTimeout(() => {
      if(this.props.token){
         this.setValue(this.props.userName)
         this.props.navigation.navigate('Home')
      }
    }, 1000)

  }


  setValue = async (value) => {
      try {
        await AsyncStorage.setItem('userName', value)
      } catch(e) {
        // save error
      }
      //console.log('Done.setValue')
  }


  // decodeToken(token){
  //   const idToken = token;
  //   const parsedToken = idToken.split('.');
  //
  //   if (parsedToken.length != 3) {
  //       return;
  //   }
  //
  //   const rawPayload = parsedToken[1];
  //   const decodedPayload = atob(rawPayload);
  //   const claims = JSON.parse(decodedPayload);
  //   return claims;
  // }


  navToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }


  render () {

    const { loading, error } = this.props;

    if (error && !this.state.errorShown) {
      Alert.alert('Error', error.message);
      this.props.clear();
    }

    return (
      <View style={styles.container}>
        {/*<Header sideMenu title='Sign In' empty />*/}
        <Spinner
          visible={loading}
          textContent={'Signing in ...'}
        />
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            <Image source={images.logo} style={styles.logo} />
          </View>
          <Text style={styles.imageContainerText}>Sign In</Text>
        </View>
          <View style={styles.SignInForm}>
            <View style={styles.SignInFormEmail}>
              <Text style={styles.SignInFormEmailTitle}>Email</Text>
              <FontAwesomeIcon icon={faUserAlt} style={styles.imageInput} size={10} />
            </View>
              <TextInput
                textContentType={'username'}
                value={this.state.email}
                onChangeText={(text) => this.setState({ email: text })}
                style={styles.textInputStyle}
                autoCorrect={false}
              />
            <View style={styles.SignInFormPassword}>
              <Text style={styles.SignInFormEmailTitle}>Password</Text>
              <FontAwesomeIcon icon={faLock} style={styles.imageInput} size={10} />
            </View>
            <TextInput
                textContentType={'password'}
                secureTextEntry
                value={this.state.password}
                onChangeText={(text) => this.setState({ password: text })}
                style={styles.textInputStyle}
                autoCorrect={false}
              />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        <View style={styles.link}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity
            onPress={this.navToSignUp}
          >
            <Text style={{ fontWeight: 'bold' }}>Create Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    userName: state.auth.userName,
    loading: state.auth.loading,
    error: state.auth.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signIn: signInAction,
    clear: signInClear,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
