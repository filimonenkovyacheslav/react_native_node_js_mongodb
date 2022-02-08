import React, { Component } from 'react'
import { View, TouchableOpacity, Text, TextInput, Keyboard, Image, Alert, StyleSheet } from 'react-native'
import images from '../../utils/image.utils'
import styles from './NewRideStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addRideAction from '../../api/addRide'
import { addRideClear } from '../../actions/ride'
import fetchCarsAction from '../../api/fetchCars'
import fetchDriversAction from '../../api/fetchDrivers'
import { format } from "date-fns"
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import RNPickerSelect from 'react-native-picker-select'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import fetchRidesAction from '../../api/fetchRides'


class NewRide extends Component {
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
    this.renderCars = this.renderCars.bind(this)
    this.props.fetchCars(this.props.token)
    this.renderDrivers = this.renderDrivers.bind(this)
    this.props.fetchDrivers(this.props.token)
  }


  handleNewRide (event) {
    event.preventDefault()
    if (this.state.routeName && this.state.pointOfDeparture && this.state.pointOfArrival && this.state.mileage && this.state.driverName
       && this.state.carNumber) {
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

       this.setState({ routeName: '' })
       this.setState({ pointOfDeparture: '' })
       this.setState({ pointOfArrival: '' })
       this.setState({ mileage: '' })
       this.setState({ driverName: '' })
       this.setState({ carNumber: '' })

       this.props.addRide(this.props.token, body)

       setTimeout(() => {
         const { loading, error, ride } = this.props
         if (!loading && ride && !error) {
           Alert.alert('Success', 'Your route successfully added !')
           fetchRidesAction(this.props.token)
           this.props.navigation.navigate('RideHistory')
         }
       }, 1000)
    }
  }


  renderCars(){
    return this.props.cars.map((car, i) => {
      return(
        {
          value: car.number,
          label: car.number
        }
      )
    })
  }


  renderDrivers(){
    return this.props.drivers.map((driver, i) => {
      return(
        {
          value: driver.name+' '+driver.surname,
          label: driver.name+' '+driver.surname
        }
      )
    })
  }


  render () {

    let data = this.renderDrivers()
    data.push({
      value: '',
      label: 'Driver'
    })

    let data2 = this.renderCars()
    data2.push({
      value: '',
      label: 'Car number'
    })

    // const message = JSON.stringify(this.renderCars())
    // Alert.alert('Error', message)

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
            // image={images.point}
            title={'title'}
            description={'description'}
          />
        </MapView>
        <View style={styles.container} onPress={() => Keyboard.dismiss() } >
          <View>
            <View style={styles.header}>
              <View style={styles.leftBox}>
                <Text style={styles.title}>Date</Text>
                <Text style={styles.text}>{format(new Date(), 'dd MMM yyyy')}</Text>
              </View>
              <View style={styles.righttBox}>
                <Text style={styles.title}>Time Start</Text>
                <Text style={styles.text}>{format(new Date(), 'H:mm')}</Text>
              </View>
            </View>
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => { this.setState({ isPrivate: !this.state.isPrivate }) }}
                style={styles.checkbox}
              >
                {this.state.isPrivate === true
                  ? <Image source={images.cheked} />
                  : <Image source={images.uncheked} />
                }
                <Text style={styles.text}>Private</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TextInput
            placeholder={'Route name'}
            textContentType={'none'}
            style={styles.textInputStyle}
            value={this.state.routeName}
            onChangeText={text => this.setState({ routeName: text })}
          />
          <TextInput
            placeholder={'Point of departure'}
            textContentType={'addressCity'}
            style={styles.textInputStyle}
            value={this.state.pointOfDeparture}
            onChangeText={text => this.setState({ pointOfDeparture: text })}
          />
          <TextInput
            placeholder={'Point of arrival'}
            textContentType={'addressCity'}
            style={styles.textInputStyle}
            value={this.state.pointOfArrival}
            onChangeText={text => this.setState({ pointOfArrival: text })}
          />
          <TextInput
            placeholder={'Mileage'}
            textContentType={'none'}
            keyboardType={'number-pad'}
            style={styles.textInputStyle}
            onChangeText={text => this.setState({ mileage: text })}
          />
          <View>
            <View style={styles.viewContainerStyle}>
              {/* and hiding the InputAccessoryView on iOS */}
              <RNPickerSelect
                placeholder={{}}
                items={data}
                style={pickerSelectStyles}
                onValueChange={value => {
                  this.setState({
                    driverName: value
                  })
                }}
                InputAccessoryView={() => null}
                value={this.state.driverName}
                Icon={() => {
                  return <FontAwesomeIcon icon={faCaretDown} style={styles.imageInput} size={20} />
                }}
              />
            </View>
            <View style={styles.viewContainerStyle}>
              {/* and hiding the InputAccessoryView on iOS */}
              <RNPickerSelect
                placeholder={{}}
                items={data2}
                style={pickerSelectStyles}
                onValueChange={value => {
                  this.setState({
                    carNumber: value
                  })
                }}
                InputAccessoryView={() => null}
                value={this.state.carNumber}
                Icon={() => {
                  return <FontAwesomeIcon icon={faCaretDown} style={styles.imageInput} size={20} />
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonWhite}>
            <Text style={styles.buttonText}>reject</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!this.state.routeName || !this.state.pointOfDeparture || !this.state.pointOfArrival || !this.state.mileage || !this.state.driverName
               || !this.state.carNumber ? styles.disabled : styles.buttonRed}
            disabled={!this.state.routeName || !this.state.pointOfDeparture || !this.state.pointOfArrival || !this.state.mileage || !this.state.driverName
               || !this.state.carNumber}
            >
            <Text style={styles.buttonTextWhite} onPress={this.handleNewRide}>accept</Text>
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
    cars: state.fetchCars.cars,
    drivers: state.fetchDrivers.drivers,
    error: state.addRide.error
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addRide: addRideAction,
    fetchCars: fetchCarsAction,
    fetchDrivers: fetchDriversAction,
    clear: addRideClear
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewRide)

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 255,
    height: 31,
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#720000'
  },
  inputAndroid: {
    width: 255,
    height: 31,
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#720000'
  }
})
