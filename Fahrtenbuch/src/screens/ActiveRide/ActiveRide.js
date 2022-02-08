import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Keyboard, Image } from 'react-native'
import images from '../../utils/image.utils'
import styles from './ActiveRideStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import { Dropdown } from 'react-native-material-dropdown'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addRideAction from '../../api/addRide'
import { addRideClear } from '../../actions/ride'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { format } from "date-fns"


class ActiveRide extends Component {
  constructor (props) {
    super(props)

    this.state = {
      routeName: '',
      pointOfDeparture: '',
      pointOfArrival: '',
      mileage: '',
      driverName: '',
      carNumber: '',
      startTime: new Date(),
      endTime: new Date(),
      isPrivate: false
    }
    this.handleNewRide = this.handleNewRide.bind(this)
  }

  handleNewRide (event) {
    event.preventDefault()

    // transform state properties to object, suitable for request
    const body = {
      routeName: this.state.routeName,
      pointOfDeparture: this.state.pointOfDeparture,
      pointOfArrival: this.state.pointOfArrival,
      mileage: this.state.mileage,
      driverName: this.state.driverName,
      carNumber: this.state.carNumber,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      isPrivate: this.state.isPrivate
    }

    this.props.addRide(this.props.token, body)
  }

  render () {

    const data = [
      { value: 'Name' },
      { value: 'Marus Duhel' },
      { value: 'Driver-1' }
    ]
    const data2 = [
      { value: 'K 777 CM' },
      { value: '11145 EA' },
      { value: 'CarNumber-1' }
    ]

    const { loading, error } = this.props

    if (error && !this.state.errorShown) {
      Alert.alert('Error', error.message)
      this.props.clear()
    }

    return (
      <View>
        <Header sideMenu title='New ride' empty />
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
            // image={images.point_big}
            title={'title'}
            description={'description'}
          />
        </MapView>
        <View style={styles.container} onPress={() => Keyboard.dismiss() } >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Route name</Text>
            <Image />
          </View>
          <View style={styles.row}>
            <View style={styles.leftBox}>
              <View style={styles.row}>
                <Image source={images.calendar} />
                <Text style={styles.leftText}>Data</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.cheked} style={{ width: 12, height: 12 }} />
                <Text style={styles.leftText}>Private</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.clock} />
                <Text style={styles.leftText}>Time start</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.clock} />
                <Text style={styles.leftText}>End time</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.clockwise} />
                <Text style={styles.leftText}>Mileage</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.wheel} />
                <Text style={styles.leftText}>Driver</Text>
              </View>
              <View style={styles.row}>
                <Image source={images.car_red} style={{ width: 12, height: 9, marginTop: 2 }} />
                <Text style={styles.leftText}>Car number</Text>
              </View>
            </View>
            <View style={styles.righttBox}>
              <Text style={styles.rightText}>25 th May 2019</Text>
              <Text></Text>
              <Text style={styles.rightText}>18:45</Text>
              <Text style={styles.rightText}>00:00</Text>
              <Text style={styles.rightText}>152.00 км</Text>
              <Text style={styles.rightText}>Marus Duhel</Text>
              <Text style={styles.rightText}>k 777 cm</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.row}>
              <Image source={images.point} />
              <Text style={styles.pointText}>Point of departure</Text>
            </View>
            <View style={styles.row}>
              <Image source={images.point} />
              <Text style={styles.pointText}>Point of arrival</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.stopButton}>
            <Text style={styles.stopButtonText}>stop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBig}
          >
            <Image source={images.arrow} style={styles.buttonImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Image source={images.wheel_big} style={styles.buttonImageBig} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Image source={images.point_big} style={styles.buttonImageSmall} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
          >
            <Image source={images.car_red} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    token: state.auth.token,
    ride: state.addRide.ride,
    loading: state.addRide.loading,
    error: state.addRide.error
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addRide: addRideAction,
    clear: addRideClear
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveRide)
