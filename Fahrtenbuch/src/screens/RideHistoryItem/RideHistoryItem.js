import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './RideHistoryItemStyles'
import images from '../../utils/image.utils'
import { format } from "date-fns"


class RideHistoryItem extends Component {
  render () {

    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 15, marginBottom: 15, marginTop: 10 }}>{this.props.item.routeName}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.calendar} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Data</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.clock} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Time</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.clockwise} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Mileage</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.wheel} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Driver</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.car_red} style={{ width: 13, height: 10, marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, fontWeight: '600' }}>Car Number</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.point} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10 }}>Point of departure</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Image source={images.point} style={{ marginRight: 7, marginBottom: 5 }} />
              <Text style={{ fontSize: 10, marginBottom: 15 }}>Point of arrival</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text}>{format(new Date(this.props.item.startTime), 'dd MMM yyyy')}</Text>
            <Text style={styles.text}>{format(new Date(this.props.item.startTime), 'H:mm')} - {format(new Date(this.props.item.endTime), 'H:mm')}</Text>
            <Text style={styles.text}>{this.props.item.mileage}.00 кm</Text>
            <Text style={styles.text}>{this.props.item.driverName}</Text>
            <Text style={{textTransform: 'uppercase', marginVertical: 1.7,fontSize: 10,marginLeft: 10}}>{this.props.item.carNumber}</Text>
            <Text style={{fontSize: 10,marginLeft: 10}}>{this.props.item.pointOfDeparture}</Text>
            <Text style={{marginTop: 5,fontSize: 10,marginLeft: 10}}>{this.props.item.pointOfArrival}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default RideHistoryItem
