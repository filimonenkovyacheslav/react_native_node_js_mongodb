import { StyleSheet, Platform } from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1
  },
  newCar: {
    flexDirection: 'row',
    backgroundColor: '#720000',
    width: 325,
    paddingLeft: '30%',
    paddingVertical: 10,
    alignSelf: 'center',
    borderBottomStartRadius: 300,
    borderBottomEndRadius: 300
  },
  newCarText: {
    color: '#fff',
    paddingLeft: 10,
    textTransform: 'uppercase'
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#720000',
    alignSelf: 'center',
    borderRadius: 9,
    marginTop: 50
  },
  disabled: {
    width: 200,
    height: 45,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 9,
    marginTop: 50
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10,
    textTransform: 'uppercase',
    alignSelf: 'center',
    top: 10
  },
  inputContainerStyle: {
    height: 31,
    width: 286,
    alignSelf: 'center',
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    color: '#720000',
    fontSize: 13,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    ...Platform.select({
      android: {
        paddingTop: 5
      },
      ios: {
        paddingTop: 2
      }
    })
  },
  viewContainerStyle: {
    height: 31,
    width: 286,
    alignSelf: 'center',
    marginVertical: 6,
    borderRadius: 8,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    color: '#720000',
    fontSize: 13,
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  imageInput: {
    color: '#720000',
    marginTop: 5,
    marginRight: 20
  },
  dropDownStyle: {
    alignSelf: 'center',
    width: 286,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
})
