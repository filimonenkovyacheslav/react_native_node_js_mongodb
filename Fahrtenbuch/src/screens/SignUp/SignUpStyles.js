import { StyleSheet, Platform } from 'react-native'
// import {width} from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  wraper: {
    backgroundColor: '#720000',
    alignItems: 'center',
    height: 290
  },
  imageContainer: {
    backgroundColor: '#fff',
    width: 102,
    height: 102,
    marginTop: 47,
    borderRadius: 14
  },
  imageContainerText: {
    color: '#fff',
    marginTop: 13,
    marginBottom: 55,
    // textTransform: 'uppercase'
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 23
  },
  SignUpForm: {
    width: 286,
    height: 217,
    borderWidth: 1,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#fff',
    top: -50
  },
  SignUpFormTitleName: {
    flexDirection: 'row',
    marginTop: 25,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  SignUpFormTitleEmail: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  SignUpFormTitlePassword: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  SignUpFormTitleText: {
    marginHorizontal: 28,
    color: '#BABABA',
    fontSize: 10
  },
  imageInput: {
    color: '#BABABA'
  },
  button: {
    width: 200,
    height: 45,
    // bottom: 10,
    backgroundColor: '#720000',
    alignSelf: 'center',
    borderRadius: 9,
    // position: 'absolute',
    // bottom: 20,
    top: -70
    // zIndex: 5
  },
  fbButton: {
    width: 200,
    height: 45,
    marginTop: 10,
    backgroundColor: '#000072',
    alignSelf: 'center',
    borderRadius: 9,
    // position: 'absolute',
    top: -70
    // zIndex: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    paddingLeft: 10,
    // textTransform: 'uppercase',
    alignSelf: 'center',
    top: 10
  },
  textInputStyle: {
    width: '80%',
    height: 30,
    alignSelf: 'center',
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#BABABA',
    // borderWidth: 1, // delete
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50
  }
})
