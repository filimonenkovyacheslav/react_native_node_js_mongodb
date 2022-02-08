import React, { Component } from 'react'
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native'
import styles from './CarDetailsStyles'
import images from '../../utils/image.utils'
import Header from '../../components/CustomHeader/CustomHeader'
import RideHistoryItem from '../../screens/RideHistoryItem/RideHistoryItem'

class CarDetails extends Component {
  state = {
    isPersonal: false
  }
  render () {
    return (
      <ScrollView>
        <Header backButton title='Back' empty/>
        <View style={styles.carDetailsHeader}>
          <Image source={images.car} />
          <Text style={styles.carDetailsHeaderText}>k 777 cm</Text>
        </View>
        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
          <View style={{ marginRight: 43 }}>
            <Text style={styles.leftText}>Car brand</Text>
            <Text style={styles.leftText}>Car model</Text>
            <Text style={styles.leftText}>Body type</Text>
            <Text style={styles.leftText}>Year of issue</Text>
            <Text style={styles.leftText}>Color</Text>
            <Text style={styles.leftText}>Mileage</Text>
            <TouchableOpacity
              onPress={() => { this.setState({ isPersonal: !this.state.isPersonal }) }}
              style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
              {this.state.isPersonal === true
                ? <Image source={images.cheked} style={{ right: 5 }} />
                : <Image source={images.uncheked} style={{ right: 5 }}  />
              }
              <Text style={{ marginBottom: 20, fontSize: 13, color: '#BABABA' }}>personal car</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <Text style={styles.rightText}>Ford</Text>
            <Text style={styles.rightText}>Your model</Text>
            <Text style={styles.rightText}>Dvukhdvernyy sedan</Text>
            <Text style={styles.rightText}>2004</Text>
            <Text style={styles.rightText}>Red</Text>
            <Text style={styles.rightText}>00.00</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#720000', height: 36, width: '100%' }}>
          <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center', top: 7 }}>Ride</Text>
        </View>
        <RideHistoryItem />
        <RideHistoryItem />
        <RideHistoryItem />
      </ScrollView>
    )
  }
}

export default CarDetails
