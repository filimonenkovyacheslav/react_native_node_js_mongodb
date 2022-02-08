import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './CarListItemStyles'
import images from '../../utils/image.utils'

class CarListItem extends Component {
  state = {
    cheked: false
  }

  render () {
    return (
      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity
          onPress={() => { this.setState({ cheked: !this.state.cheked }) }}
          style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 20, marginLeft: 37 }}
        >
          {this.state.cheked === true
            ? <Image source={images.cheked} style={{ marginLeft: 10, marginBottom: 2 }} />
            : <Image source={images.uncheked_white} />
          }
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => { this.setState({ cheked: !this.state.cheked }) }}
          style={this.state.cheked ? styles.containerSelected : styles.container}>

          <View style={styles.row}>
            <Image source={images.car_red} />
            <Text style={styles.carNumber}>{this.props.item.number}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.carCharacteristic}>Car model</Text>
            <Text style={styles.carAnswear}>{this.props.item.brand+' '+this.props.item.model}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.carCharacteristic}>Body type</Text>
            <Text style={styles.carAnswear}>{this.props.item.body_type}</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

export default CarListItem
