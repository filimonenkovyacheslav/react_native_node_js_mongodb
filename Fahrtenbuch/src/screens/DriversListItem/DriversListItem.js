import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './DriversListItemStyle'
import images from '../../utils/image.utils'
import { navTo } from '../../utils'

class DriversListItem extends Component {
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
          <Image source={images.avatar} style={styles.avatar} />
          <View>
            <Text style={styles.nameText}>{this.props.item.name+' '+this.props.item.surname}</Text>
            <View style={styles.row}>
              <Image source={images.mail} style={{ marginRight: 12 }} />
              <Text style={styles.textEmail}>{this.props.item.email}</Text>
            </View>
            <View style={styles.row}>
              <Image source={images.phone} style={{ marginRight: 12 }} />
              <Text style={styles.textEmail}>{this.props.item.phone}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
}

export default DriversListItem
