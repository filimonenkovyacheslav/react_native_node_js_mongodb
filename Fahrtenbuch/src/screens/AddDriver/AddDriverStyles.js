import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  // container: {
  //   // flex: 1,
  // },
  driverContainer: {
    backgroundColor: '#720000',
    width: '100%',
    height: 177,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
    alignSelf: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    height: 105,
    width: 104,
    borderRadius: 105,
    backgroundColor: '#ffffff',
    marginTop: 21
  },
  image: {
    alignSelf: 'center',
    marginTop: 17
  },
  imageInputConatiner: {
    backgroundColor: '#ffffff',
    width: 24,
    height: 24,
    borderRadius: 24,
    zIndex: 1,
    alignSelf: 'center',
    position: 'absolute',
    top: 90
  },
  imageInput: {
    marginTop: 7,
    alignSelf: 'center'
  },
  driverConatainerText: {
    color: '#fff',
    fontSize: 15,
    marginTop: 10
  },
  textInputStyle: {
    height: 31,
    width: 286,
    alignSelf: 'center',
    marginVertical: 6,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(114, 0, 0, 0.1)',
    color: '#720000',
    fontSize: 13,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    ...Platform.select({
      android: {
        paddingTop: 5
      }
    })
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#720000',
    alignSelf: 'center',
    borderRadius: 9,
    top: 100
  },
  disabled: {
    width: 200,
    height: 45,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    borderRadius: 9,
    top: 100
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10,
    textTransform: 'capitalize',
    alignSelf: 'center',
    top: 10
  }
})
