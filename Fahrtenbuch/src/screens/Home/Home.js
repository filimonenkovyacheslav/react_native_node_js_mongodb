import React, { Component } from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import styles from './HomeStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import images from '../../utils/image.utils'
// import MapView from 'react-native-maps'

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Header sideMenu title='Home' empty />
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            // image={images.point}
            title={"title"}
            description={"description"}
          />
          {/* {this.state.markers.map(marker => (
            <Marker
              coordinate={marker.latlng}
              title={marker.title}
              description={marker.description}
            />
          ))} */}
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBig}
            onPress={() => this.props.navigation.navigate('NewRide')}
          >
            <Image source={images.arrow} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddDriver')}
          >
            <Image source={images.wheel_big} style={styles.buttonImageBig} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('AddCar')}
          >
            <Image source={images.car_red} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}

export default Home
