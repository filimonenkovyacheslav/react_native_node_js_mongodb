import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Alert } from 'react-native'
import styles from './CarListStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import CarListItem from '../CarListItem/CarListItem'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchCarsAction from '../../api/fetchCars'
import { fetchCarsClear } from '../../actions/cars'
import { NavigationEvents } from 'react-navigation'


class CarList extends Component {

  constructor (props) {
    super(props)
    this.renderCars = this.renderCars.bind(this)
    this.props.fetchCars(this.props.token)
  }

  renderCars(){
    return this.props.cars.map(car => {
      return(
        <CarListItem key={car._id} item={car}/>
      )
    })
  }

  navToAddCar = () => {
    this.props.navigation.navigate('AddCar')
  }


  render () {

    const { loading, error } = this.props

    if (this.state) {
      if (error && !this.state.errorShown) {
        Alert.alert('Error', error.message)
        this.props.clear()
      }
    }

    return (
      <ScrollView style={styles.container}>
        <Header sideMenu title='CAR LIST' empty />
        <View style={{marginTop: 100}}>
          <NavigationEvents
            onDidFocus={() => this.props.fetchCars(this.props.token)}
          />
          <TouchableOpacity
            onPress={this.navToAddCar}
            style={styles.button}
          >
            <FontAwesomeIcon icon={faPlus} style={styles.buttonImage} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          {this.renderCars()}
        </View>
        <View style={{marginTop: 100}} />
      </ScrollView>
    )
  }
}


function mapStateToProps (state) {
  return {
    token: state.auth.token,
    cars: state.fetchCars.cars,
    loading: state.fetchCars.loading,
    error: state.fetchCars.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchCars: fetchCarsAction,
    clear: fetchCarsClear,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList)
