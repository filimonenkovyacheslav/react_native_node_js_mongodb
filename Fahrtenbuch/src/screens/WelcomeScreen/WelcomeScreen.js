import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import styles from './WelcomeScreenStyles'
import images from '../../utils/image.utils'

class WelcomeScreen extends Component {

  navToSignUp = () => {
    this.props.navigation.navigate('SignUp')
  }
  navToSignIn = () => {
    this.props.navigation.navigate('SignIn')
  }

  render () {

    return (
      <View style={styles.container}>
        <View style={styles.logoWarap}>
          <Image source={images.logo} />
          <Text style={styles.textLogo}>Fahrtenbuch</Text>
          <Text style={{ fontSize: 13 }}>Lorem Ipsum has been</Text>
        </View>
        <View style={styles.languageBox}>
          <Text style={styles.languageText}>Choose language</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={images.flag_ge} />
            <Image source={images.flag_it} />
            <Image source={images.flag_ne} />
          </View>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonRed}
            onPress={this.navToSignUp}
          >
            <Text style={styles.buttonRedText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWhite}
            onPress={this.navToSignIn}
          >
            <Text style={styles.buttonWhiteText}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 50}}>v.0.0.7</Text>
        </View>
      </View>
    )
  }
}

export default WelcomeScreen
