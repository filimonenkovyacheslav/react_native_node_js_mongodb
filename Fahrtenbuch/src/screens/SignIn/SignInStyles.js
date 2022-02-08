import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    backgroundColor: '#720000',
    alignItems: 'center',
    height: 290
  },
  logo: {
    alignSelf: 'center',
    marginVertical: 23
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
    fontSize: 15
  },
  SignInForm: {
    width: 286,
    height: 162,
    borderWidth: 1,
    borderRadius: 16,
    alignSelf: 'center',
    backgroundColor: '#fff',
    top: -60
  },
  SignInFormEmail: {
    flexDirection: 'row',
    marginTop: 25,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  SignInFormPassword: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 30,
    justifyContent: 'space-between'
  },
  SignInFormEmailTitle: {
    marginHorizontal: 28,
    color: '#BABABA',
    fontSize: 10
  },
  textInputStyle: {
    width: '80%',
    height: 30,
    alignSelf: 'center',
    fontSize: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#BABABA',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  imageInput: {
    color: '#BABABA'
  },
  button: {
    width: 200,
    height: 45,
    backgroundColor: '#720000',
    alignSelf: 'center',
    borderRadius: 9,
    top: -80
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    alignSelf: 'center',
    top: 10
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
