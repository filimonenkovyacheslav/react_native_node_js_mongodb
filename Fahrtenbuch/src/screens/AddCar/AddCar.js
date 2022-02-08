import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, TextInput, Alert, StyleSheet } from 'react-native'
import styles from './AddCarStyle'
import Header from '../../components/CustomHeader/CustomHeader'
import images from '../../utils/image.utils'
import { Dropdown } from 'react-native-material-dropdown'
import Spinner from 'react-native-loading-spinner-overlay'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addCarAction from '../../api/addCar'
import { addCarClear } from '../../actions/car'
import RNPickerSelect from 'react-native-picker-select'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import fetchCarsAction from '../../api/fetchCars'

class AddCar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      brand: '',
      number: '',
      model: '',
      color: '',
      bodyType: '',
      mileage: '',
      issueYear: '',
      isPersonal: false,
      taxMode: false
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.checkboxChange = this.checkboxChange.bind(this)
  }


  handleSubmit (event) {
    event.preventDefault()
    if (this.state.number && this.state.model && this.state.brand && this.state.mileage && this.state.bodyType
       && this.state.color && this.state.issueYear) {
       // transform state properties to object, suitable for request
       const body = {
         number: this.state.number,
         model: this.state.model,
         brand: this.state.brand,
         color: this.state.color,
         body_type: this.state.bodyType,
         mileage: Number(this.state.mileage),
         issue_year: Number(this.state.issueYear),
         isPersonal: this.state.isPersonal,
       }

       this.setState({ number: '' })
       this.setState({ model: '' })
       this.setState({ brand: '' })
       this.setState({ mileage: '' })
       this.setState({ color: '' })
       this.setState({ bodyType: '' })
       this.setState({ issueYear: '' })
       this.setState({ isPersonal: '' })

       this.props.addCar(this.props.token, body)

       setTimeout(() => {
         const { loading, error, car } = this.props
         if (!loading && car && !error) {
           Alert.alert('Success', 'Your car successfully added !')
           this.props.navigation.navigate('CarList')
         }
       }, 1000)
    }
  }


  checkboxChange(val){
    if (val === 'taxMode') {
      this.setState({ taxMode: true })
      this.setState({ isPersonal: false })
    }
    else if (val === 'isPersonal') {
      this.setState({ isPersonal: true })
      this.setState({ taxMode: false })
    }
  }


  render () {
    const data = [
      {
        value: '',
        label: 'Body type'
      },
      {
        value: 'Sedan',
        label: 'Sedan'
      },
      { value: 'Dvukhdvernyy sedan',
        label: 'Dvukhdvernyy sedan'
      },
      { value: 'Khetchbek (Liftbek)',
        label: 'Khetchbek (Liftbek)'
      },
      { value: 'Kupe',
        label: 'Kupe'
      },
      { value: 'Limuzin',
        label: 'Limuzin'
      },
      { value: 'Miniven',
        label: 'Miniven'
      },
      { value: 'Khardtop',
        label: 'Khardtop'
      },
      { value: 'Taun-kar',
        label: 'Taun-kar'
      },
      { value: 'Kombi',
        label: 'Kombi'
      }
    ]

    const data2 = [
      { value: '',
        label: 'Color'
      },
      { value: 'Red',
        label: 'Red'
      },
      { value: 'Blue',
        label: 'Blue'
      },
      { value: 'Green',
        label: 'Green'
      },
      { value: 'Silver',
        label: 'Silver'
      },
      { value: 'Gold',
        label: 'Gold'
      },
      { value: 'Black',
        label: 'Black'
      },
      { value: 'White',
        label: 'White'
      },
      { value: 'Burgundy',
        label: 'Burgundy'
      }
    ]

    const { loading, error } = this.props

    if (error && !this.state.errorShown) {
      Alert.alert('Error', error.message)
      this.props.clear()
    }

    console.log(this.state, 'suka2')

    return (
      <View style={styles.container}>
        <Header backButton title="Back" />
        <Spinner
          visible={loading}
          textContent={'Adding ...'}
        />
        <View style={styles.newCar}>
          <Image source={images.car} />
          <Text style={styles.newCarText}>new car</Text>
        </View>
        <View style={{ marginTop: 15 }} >
          <TextInput
            placeholder="Car brand"
            style={styles.inputContainerStyle}
            value={this.state.brand}
            onChangeText={text => this.setState({ brand: text })}
          />
          <TextInput
            placeholder="Car model"
            style={styles.inputContainerStyle}
            value={this.state.model}
            onChangeText={text => this.setState({ model: text })}
          />
          <TextInput
            placeholder="Car number"
            style={styles.inputContainerStyle}
            value={this.state.number}
            onChangeText={text => this.setState({ number: text })}
          />
          {/*<Dropdown
            placeholder="Body type"
            data={data}
            containerStyle={styles.dropDownStyle}
            fontSize={10}
            value={this.state.bodyType}
            onChangeText={text => this.setState({ bodyType: text })}
            overlayStyle={{ borderWidth: 1 }}
          />*/}
          <View style={styles.viewContainerStyle}>
            {/* and hiding the InputAccessoryView on iOS */}
            <RNPickerSelect
              placeholder={{}}
              items={data}
              style={pickerSelectStyles}
              onValueChange={value => {
                this.setState({
                  bodyType: value
                })
              }}
              InputAccessoryView={() => null}
              value={this.state.bodyType}
              Icon={() => {
                return <FontAwesomeIcon icon={faCaretDown} style={styles.imageInput} size={20} />
              }}
            />
          </View>
          <TextInput
            placeholder="Year of"
            keyboardType="number-pad"
            style={styles.inputContainerStyle}
            value={this.state.issueYear}
            onChangeText={text => this.setState({ issueYear: text })}
          />
          {/*<Dropdown
            placeholder="Color"
            data={data2}
            containerStyle={styles.dropDownStyle}
            fontSize={10}
            value={this.state.color}
            onChangeText={text => this.setState({ color: text })}
          />*/}
          <View style={styles.viewContainerStyle}>
            {/* and hiding the InputAccessoryView on iOS */}
            <RNPickerSelect
              placeholder={{}}
              items={data2}
              style={pickerSelectStyles}
              onValueChange={value => {
                this.setState({
                  color: value
                })
              }}
              InputAccessoryView={() => null}
              value={this.state.color}
              Icon={() => {
                return <FontAwesomeIcon icon={faCaretDown} style={styles.imageInput} size={20} />
              }}
            />
          </View>
          <TextInput
            placeholder="Mileage"
            keyboardType="number-pad"
            style={styles.inputContainerStyle}
            value={this.state.mileage}
            onChangeText={text => this.setState({ mileage: text })}
          />
          <View style={{ width: '50%', marginHorizontal: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => this.checkboxChange('isPersonal')}
              style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
              {this.state.isPersonal === true
                ? <Image source={images.cheked} />
                : <Image source={images.uncheked} />
              }
              <Text style={{ margin: 5 }}>Personal car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.checkboxChange('taxMode')}
              style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            >
              {this.state.taxMode === true
                ? <Image source={images.cheked} />
                : <Image source={images.uncheked} />
              }
              <Text style={{ margin: 5 }}>Tax mode</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={!this.state.number || !this.state.model || !this.state.brand || !this.state.mileage || !this.state.bodyType
             || !this.state.color || !this.state.issueYear ? styles.disabled : styles.button}
          disabled={!this.state.number || !this.state.model || !this.state.brand || !this.state.mileage || !this.state.bodyType
             || !this.state.color || !this.state.issueYear}
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps (state) {
  return {
    token: state.auth.token,
    car: state.addCar.car,
    loading: state.addCar.loading,
    error: state.addCar.error,
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addCar: addCarAction,
    clear: addCarClear,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCar)

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: 286,
    alignSelf: 'center',
    height: 31,
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#720000'
  },
  inputAndroid: {
    width: 286,
    alignSelf: 'center',
    height: 31,
    backgroundColor: 'transparent',
    fontSize: 13,
    color: '#720000'
  }
})
