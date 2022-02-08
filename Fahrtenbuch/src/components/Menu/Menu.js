import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView, withNavigation } from 'react-navigation'
import styles from './MenuStyles'
import images from '../../utils/image.utils'
import { navTo } from '../../utils'
import AsyncStorage from '@react-native-community/async-storage'


let userName = ''
let getValue = async () => {
    try {
      let value = await AsyncStorage.getItem('userName')
      if (value) {
        userName = value
      }
    } catch(e) {
    }
}


const Menu = props => {
  getValue()
  return (
    <SafeAreaView style={styles.menuContainer}>
      {/* для просомтра страниц в меню - нужную разкоментировать */}

      <View style={[styles.logoWrap, styles.buttonWithBorder]}>
        <View style={styles.logoImageWrap}>
          <Image source={images.avatar} style={{ width: 45, height: 45 }} />
        </View>
        <Text style={styles.logoText}>{userName}</Text>
      </View>
      <View>
        {/* <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('CarDetails', props) }}
        >
          <Text style={styles.menuText}>Car Details</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('AddDriver', props) }}
        >
          <Text style={styles.menuText}>Add Driver</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('AddCar', props) }}
        >
          <Text style={styles.menuText}>Add Car</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('SignIn', props) }}
        >
          <Text style={styles.menuText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('SignUp', props) }}
        >
          <Text style={styles.menuText}>Sign Up</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={styles.menuTextButton}
          onPress={() => { navTo('Home', props) }}
        >
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          style={[styles.menuTextButton, styles.buttonsContainer]}
          onPress={() => { navTo('ActiveRide', props) }}
        >
          <Text style={styles.menuText}>Active Ride</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => { navTo('NewRide', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.tag} />
          </View>
          <Text style={styles.menuText}>New Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => { navTo('RideHistory', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.tag_white} />
          </View>
          <Text style={styles.menuText}>Ride History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, styles.buttonWithBorder]}
          onPress={() => { navTo('DriverProfile', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.settings} />
          </View>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => { navTo('DriversList', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.wheel_white} />
          </View>
          <Text style={styles.menuText}>Drivers List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.menuButton, styles.buttonWithBorder]}
          onPress={() => { navTo('CarList', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.car_white} />
          </View>
          <Text style={styles.menuText}>Car List</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => { navTo('WelcomeScreen', props) }}
        >
          <View style={styles.imageWrap}>
            <Image source={images.logout} />
          </View>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
        <Image source={images.logo_blink} style={styles.logo} />
      </View>
    </SafeAreaView>
  )

}

export default withNavigation(Menu)
