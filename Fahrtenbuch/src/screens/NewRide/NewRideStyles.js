import { StyleSheet, Platform } from 'react-native'
import { width, height } from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    width: 286,
    height: 303,
    backgroundColor: '#fff',
    borderRadius: 10,
    // marginTop: 100,
    position: 'absolute',
    bottom: 230,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingLeft: 15,
    marginHorizontal: '15%'
  },
  map: {
    width: width[100],
    height: height[100],
  },
  header: {
    flexDirection: 'row',
    width: 286
  },
  leftBox: {
    flexDirection: 'row',
    marginLeft: 10,
    // justifyContent: 'center',
    alignItems: 'flex-start'
  },
  righttBox: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    margin: 5
  },
  checkbox: {
    flexDirection: 'row',
    marginLeft: 15
  },
  textInputStyle: {
    height: 31,
    width: 255,
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    color: '#720000',
    fontSize: 13,
    paddingHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        paddingTop: 5
      },
      ios: {
        paddingTop: 2
      }
    })
  },
  RNPickerIos: {
    width: 255,
    height: 31,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    fontSize: 13,
    // paddingVertical: 12,
    paddingHorizontal: 10,
    // borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 8,
    color: '#720000',
  },
  imageInput: {
    color: '#720000',
    marginVertical: '20%'
  },
  viewContainerStyle:{
    width: 255,
    height: 31,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
    marginTop: 5,
    overflow: 'hidden',
    color: '#720000'
  },
  RNPickerAndroid: {
    width: 255,
    height: 31,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    fontSize: 13,
    paddingHorizontal: 10,
    // paddingVertical: 8,
    // borderWidth: 0.5,
    // borderColor: 'purple',
    borderRadius: 8,
    color: '#720000',
    // paddingRight: 30 // to ensure the text is never behind the icon
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 250,
    marginHorizontal: '15%'
  },
  buttonRed: {
    width: 133,
    margin: 10,
    height: 45,
    backgroundColor: '#720000',
    alignSelf: 'center',
    borderRadius: 9,
    top: 100
  },
  disabled: {
    width: 133,
    margin: 10,
    height: 45,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 9,
    top: 100
  },
  buttonWhite: {
    width: 133,
    margin: 10,
    height: 45,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 9,
    top: 100,
    borderColor: '#720000',
    borderWidth: 1
  },
  buttonTextWhite: {
    fontSize: 15,
    paddingLeft: 10,
    textTransform: 'capitalize',
    alignSelf: 'center',
    top: 10,
    color: '#fff'
  },
  buttonText: {
    fontSize: 15,
    paddingLeft: 10,
    textTransform: 'capitalize',
    alignSelf: 'center',
    top: 10
  }
})
