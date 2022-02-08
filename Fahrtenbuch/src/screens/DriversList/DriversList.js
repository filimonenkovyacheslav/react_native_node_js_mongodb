import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Alert } from 'react-native'
import styles from './DriversListStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import DriversListItem from '../DriversListItem/DriversListItem'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchDriversAction from '../../api/fetchDrivers'
import { fetchDriversClear } from '../../actions/drivers'
import { NavigationEvents } from 'react-navigation'


class DriversList extends Component {

  constructor (props) {
    super(props)
    this.renderDrivers = this.renderDrivers.bind(this)
    this.props.fetchDrivers(this.props.token)
  }

  renderDrivers(){
    return this.props.drivers.map(driver => {
      return(
        <DriversListItem key={driver._id} item={driver}/>
      )
    })
  }

  navToAddDriver = () => {
    this.props.navigation.navigate('AddDriver')
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
        <Header sideMenu title='DRIVER' empty />
        <View style={{marginTop: 100}}>
          <NavigationEvents
            onDidFocus={() => this.props.fetchDrivers(this.props.token)}
          />
          <TouchableOpacity
            onPress={this.navToAddDriver}
            style={styles.button}
          >
            <FontAwesomeIcon icon={faPlus} style={styles.buttonImage} color={'#fff'} size={20} />
          </TouchableOpacity>
        </View>
        <View>
          {this.renderDrivers()}
        </View>
        <View style={{marginTop: 100}} />
      </ScrollView>
    )
  }
}


function mapStateToProps (state) {
  return {
    token: state.auth.token,
    drivers: state.fetchDrivers.drivers,
    loading: state.fetchDrivers.loading,
    error: state.fetchDrivers.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchDrivers: fetchDriversAction,
    clear: fetchDriversClear,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList)
