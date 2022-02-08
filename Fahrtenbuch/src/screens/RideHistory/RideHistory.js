import React, { Component } from 'react'
import { ScrollView, View, Alert } from 'react-native'
import styles from './RideHistoryStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import RideHistoryItems from '../RideHistoryItem/RideHistoryItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchRidesAction from '../../api/fetchRides'
import { fetchRidesClear } from '../../actions/rides'

class RideHistory extends Component {

  constructor (props) {
    super(props)
    this.renderRides = this.renderRides.bind(this)
    this.props.fetchRides(this.props.token)
  }

  renderRides(){
    return this.props.rides.map(ride => {
      return(
        <RideHistoryItems key={ride._id} item={ride}/>
      )
    })
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
        <Header sideMenu title='RIDE' empty />
        {this.renderRides()}
      </ScrollView>
    )
  }
}

function mapStateToProps (state) {
  return {
    token: state.auth.token,
    rides: state.fetchRides.rides,
    loading: state.fetchRides.loading,
    error: state.fetchRides.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchRides: fetchRidesAction,
    clear: fetchRidesClear,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RideHistory)
