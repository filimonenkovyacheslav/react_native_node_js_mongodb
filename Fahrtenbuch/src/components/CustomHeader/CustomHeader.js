import React, {Component} from 'react'
import {TouchableOpacity, View, Text} from 'react-native'
import styles from './CustomHeaderStyles'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faBars, faChevronLeft} from '@fortawesome/free-solid-svg-icons'
import {withNavigation, SafeAreaView} from 'react-navigation'
//import LinearGradient from 'react-native-linear-gradient'

class Header extends Component {
  renderSingleHeader = () => {

    return (
      <View style={styles.linearGradient}>
        <SafeAreaView>
          {/* Show sideMenu button */}
          {this.props.sideMenu && (
            <TouchableOpacity
              style={styles.menuHeaderButton}
              onPress={() => this.props.navigation.openDrawer()}>
              {
                <FontAwesomeIcon
                  style={styles.sideMenuIconWhite}
                  size={21}
                  icon={faBars}
                />
              }
            </TouchableOpacity>
          )}
          {/* Show back button */}
          {this.props.backButton && (
            <TouchableOpacity
              style={styles.menuHeaderButton}
              onPress={() => this.props.navigation.goBack()}>
              <FontAwesomeIcon size={21} icon={faChevronLeft} color="#fff" />
            </TouchableOpacity>
          )}
          {/* Show title */}
          {this.props.title && (
            <View style={styles.toolbarTitleWrap}>
              <Text style={styles.titleText}>{this.props.title}</Text>
            </View>
          )}
        </SafeAreaView>
      </View>
    )
  }

  render() {
    return this.renderSingleHeader()
  }
}

export default withNavigation(Header)
