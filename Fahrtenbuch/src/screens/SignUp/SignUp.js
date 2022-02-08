import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Alert } from 'react-native'
import styles from './SignUpStyles'
//import Header from '../../components/CustomHeader/CustomHeader'
import images from '../../utils/image.utils'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import signUpAction from '../../api/signUp'
import { signUpClear } from '../../actions/user'

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    };

    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleSignUp(event) {
    event.preventDefault();

    const body = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.signUp(body)

    setTimeout(() => {
      const { loading, error, user } = this.props
      if (!loading && user && !error) {
        const message = 'You are successfully registered. To complete registration go to the mail '+user.email+' and follow the link.'
        Alert.alert('Response', message)
        this.props.navigation.navigate('WelcomeScreen')
      }
    }, 1000)

  }

  navToSignIn = () => {
    this.props.navigation.navigate('SignIn')
  }

  render() {
    const { loading, error, user } = this.props;

    if (error && !this.state.errorShown) {
      Alert.alert('Error', error.message);
      this.props.clear();
    }

    return (
      <View style={styles.container}>
        {/*<Header sideMenu title='Sign Up' empty />*/}
        <Spinner
          visible={loading}
          textContent={'Signing in ...'}
        />
        <View style={styles.wraper}>
          <View style={styles.imageContainer}>
            <Image source={images.logo} style={styles.logo} />
          </View>
          <Text style={styles.imageContainerText}>Sign Up</Text>
        </View>
          <View style={styles.SignUpForm}>
            <View style={styles.SignUpFormTitleName}>
              <Text style={styles.SignUpFormTitleText}>Name</Text>
              <FontAwesomeIcon icon={faUserAlt} style={styles.imageInput} size={10} />
            </View>
            <TextInput
              textContentType={'username'}
              value={this.state.name}
              onChangeText={text => this.setState({ name: text })}
              style={styles.textInputStyle}
            />
            <View style={styles.SignUpFormTitleEmail}>
              <Text style={styles.SignUpFormTitleText}>Email</Text>
              <FontAwesomeIcon icon={faEnvelope} style={styles.imageInput} size={10} />
            </View>
            <TextInput
              textContentType={'emailAddress'}
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              style={styles.textInputStyle}
            />
            <View style={styles.SignUpFormTitlePassword}>
              <Text style={styles.SignUpFormTitleText}>Password</Text>
              <FontAwesomeIcon icon={faLock} style={styles.imageInput} size={10} />
            </View>
            <TextInput
              textContentType={'password'}
              secureTextEntry
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              style={styles.textInputStyle}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.fbButton}>
            <Text style={styles.buttonText}>Sign up with Facebook</Text>
          </TouchableOpacity>
        <View style={styles.link}>
          <Text>Already have an account? </Text>
          <TouchableOpacity
            onPress={this.navToSignIn}
          >
            <Text style={{ fontWeight: 'bold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.register.user,
    loading: state.register.loading,
    error: state.register.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUp: signUpAction,
    clear: signUpClear,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
