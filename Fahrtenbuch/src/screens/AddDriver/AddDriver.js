import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, TextInput, Keyboard, Platform, PermissionsAndroid, Alert} from 'react-native';
import styles from './AddDriverStyles';
import Header from '../../components/CustomHeader/CustomHeader';
import images from '../../utils/image.utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCamera} from '@fortawesome/free-solid-svg-icons';
import ActionSheet from 'react-native-action-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import addDriverAction from '../../api/addDriver';
import {addDriverClear} from '../../actions/driver';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchDriversAction from '../../api/fetchDrivers'

class AddDriver extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      photo: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.name && this.state.surname && this.state.email && this.state.phone) {
      const body = {
        name: this.state.name,
        surname: this.state.surname,
        email: this.state.email,
        phone: this.state.phone,
      };

      this.setState({ name: '' })
      this.setState({ surname: '' })
      this.setState({ email: '' })
      this.setState({ phone: '' })

      this.props.addDriver(this.props.token, body);

      setTimeout(() => {
        const { loading, error, driver } = this.props
        if (!loading && driver && !error) {
          Alert.alert('Success', 'Your driver successfully added !')
          this.props.navigation.navigate('DriversList')
        }
      }, 1000)
    }
  }

  showActionSheet = () => {
    let BUTTONSiOS = ['From Camera', 'From Gallery', 'Cancel'];

    let BUTTONSandroid = ['From Camera', 'From Gallery'];

    let DESTRUCTIVE_INDEX = 3;
    let CANCEL_INDEX = 2;

    ActionSheet.showActionSheetWithOptions(
      {
        options: Platform.OS === 'ios' ? BUTTONSiOS : BUTTONSandroid,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
        tintColor: '#720000',
        title: 'Please choose avatar picture',
      },
      buttonIndex => {
        if (buttonIndex < 2) {
          if (['From Camera', 'From Gallery'][buttonIndex] === 'From Camera') {
            console.log('Camera is choosen');
            this.fromCamera();
          } else if (
            ['From Camera', 'From Gallery'][buttonIndex] === 'From Gallery'
          ) {
            console.log('Gallery is choosen');
            this.fromGallery();
          }
        }
      },
    );
  };

  fromCamera = async () => {
    if (Platform.OS === 'ios') {
      await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image)
            const source = image.path
            this.setState({ photo: source})
            console.log(source)
          });
        } else {
          console.log('Camera permission denied');
        }
      } catch (error) {
        console.log(error, 'ImagePicker Camera error');
      }
    }
  };

  fromGallery = async () => {
    if (Platform.OS === 'ios') {
      await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          await ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image)
            const source = image.path
            this.setState({ photo: source })
            console.log(source, 'source')
          });
        } else {
          console.log('Storage permission denied');
        }
      } catch (error) {
        console.log(error, 'ImagePicker Gallery error');
      }
    }
  };

  render() {
    const {loading, error} = this.props;

    if (error && !this.state.errorShown) {
      Alert.alert('Error', error.message);
      this.props.clear();
    }

    return (
      <View>
        <Header sideMenu title="New driver" empty />
        <Spinner visible={loading} textContent={'Adding ...'} />
        <View style={styles.driverContainer}>
          <View style={styles.imageContainer}>
            <Image source={images.avatar} style={styles.image} />
            <TouchableOpacity
              style={styles.imageInputConatiner}
              onPress={this.showActionSheet}>
              <FontAwesomeIcon
                icon={faCamera}
                style={styles.imageInput}
                size={10}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.driverConatainerText}>New driver</Text>
        </View>
        <View style={{marginTop: 15}}>
          <TextInput
            placeholder={'Name'}
            textContentType={'name'}
            style={styles.textInputStyle}
            value={this.state.name}
            onChangeText={text => this.setState({name: text})}
          />
          <TextInput
            placeholder={'Surname'}
            textContentType={'familyName'}
            style={styles.textInputStyle}
            value={this.state.surname}
            onChangeText={text => this.setState({ surname: text })}
          />
          <TextInput
            placeholder={'E-mail'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            style={styles.textInputStyle}
            value={this.state.email}
            onChangeText={text => this.setState({email: text})}
          />
          <TextInput
            placeholder={'Telephone number'}
            textContentType={'telephoneNumber'}
            keyboardType={'number-pad'}
            style={styles.textInputStyle}
            value={this.state.phone}
            onChangeText={text => this.setState({ phone: text })}
          />
        </View>
        <TouchableOpacity
        style={!this.state.name || !this.state.surname || !this.state.email || !this.state.phone ? styles.disabled : styles.button}
        disabled={!this.state.name || !this.state.surname || !this.state.email || !this.state.phone}
        onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.token,
    driver: state.addDriver.driver,
    loading: state.addDriver.loading,
    error: state.addDriver.error,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addDriver: addDriverAction,
      clear: addDriverClear,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDriver);
