import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Keyboard, Platform, PermissionsAndroid } from 'react-native'
import styles from './DriverProfileStyles'
import Header from '../../components/CustomHeader/CustomHeader'
import images from '../../utils/image.utils'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import ActionSheet from 'react-native-action-sheet'
import ImagePicker from 'react-native-image-crop-picker'

class DriverProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photo: null,
      created: null,
      loading: true,
    }
  }
  showActionSheet = () => {
    let BUTTONSiOS = [
      'From Camera',
      'From Gallery',
      'Cancel'
    ]

    let BUTTONSandroid = [
      'From Camera',
      'From Gallery'
    ]

    let DESTRUCTIVE_INDEX = 3
    let CANCEL_INDEX = 2

    ActionSheet.showActionSheetWithOptions({
      options: (Platform.OS === 'ios') ? BUTTONSiOS : BUTTONSandroid,
      cancelButtonIndex: CANCEL_INDEX,
      destructiveButtonIndex: DESTRUCTIVE_INDEX,
      tintColor: '#720000',
      title: 'Please choose avatar picture'
    },
      (buttonIndex) => {
        if (buttonIndex < 2) {
          if (['From Camera', 'From Gallery'][buttonIndex] === 'From Camera') {
            console.log('Camera is choosen');
            this.fromCamera()
          } else if (['From Camera', 'From Gallery'][buttonIndex] === 'From Gallery') {
            console.log('Gallery is choosen');
            this.fromGallery()
          }
        }
      })
  }

  fromCamera = async () => {
    if (Platform.OS === 'ios') {
      await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image)
        const source = image.path
        console.log(source, 'source')
        this.setState({ photo: source, created: true })
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image)
            const source = image.path
            console.log(source, 'source')
            this.setState({ photo: source, created: true })
          });
        } else {
          console.log('Camera permission denied')
        }
      } catch (error) {
        console.log(error, 'ImagePicker Camera error');

      }
    }
  }

  fromGallery = async () => {
    if (Platform.OS === 'ios') {
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image)
        const source = image.path
        console.log(source, 'source')
        this.setState({ photo: source, created: true })
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image)
            const source = image.path
            console.log(source, 'source')
            this.setState({ photo: source, created: true })
          });
        } else {
          console.log('Storage permission denied')
        }
      } catch (error) {
        console.log(error, 'ImagePicker Gallery error');

      }
    }
  }

  render () {
    console.log(this.state, 'state')
    const { photo, created } = this.state
    const ImageConcat = created ? photo : { uri: photo && photo.uri }
    return (
      <View style={styles.container}>
        <Header sideMenu title='Edit profile' empty />
        <View style={styles.driverContainer}>
          <View style={styles.imageContainer}>
            { photo
              ? <Image source={uri = photo} style={styles.image} />
              : <Image source = {images.avatar} style={styles.image} />
            }
            <TouchableOpacity style={styles.imageInputConatiner} onPress={this.showActionSheet} >
              <FontAwesomeIcon icon={faCamera} style={styles.imageInput} size={10} />
            </TouchableOpacity>
          </View>
          <Text style={styles.driverConatainerText}>Private details</Text>
        </View>
        <View style={{ marginTop: 15 }} onPress={() => Keyboard.dismiss() } >
          <TextInput placeholder={'First name'} textContentType={'name'} style={styles.textInputStyle} />
          <TextInput placeholder={'Second name'} textContentType={'familyName'} style={styles.textInputStyle} />
          <TextInput placeholder={'Phone'} textContentType={'telephoneNumber'} keyboardType={'number-pad'} style={styles.textInputStyle} />
          <TextInput placeholder={'E-mail'} textContentType={'emailAddress'} keyboardType={'email-address'} style={styles.textInputStyle} />
        </View>
        <Text style={styles.title}>Change password</Text>
        <View>
          <TextInput placeholder={'Enter new password'} secureTextEntry textContentType={'password'} style={styles.textInputStyle} />
          <TextInput placeholder={'Enter old password'} secureTextEntry textContentType={'password'} style={styles.textInputStyle} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>save</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default DriverProfile
