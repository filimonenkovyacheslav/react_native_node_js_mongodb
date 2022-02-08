import { StyleSheet } from 'react-native'
// import { width } from '../../utils/width.util'

export default StyleSheet.create({
  menuContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#AE0202',
    paddingLeft: 35,
  },
  logoWrap: {
    flexDirection: 'row',
    // paddingVertical: 10,
    paddingTop: 60
  },
  logoImageWrap: {
    flex: 0.3,
    marginBottom: 20
  },
  logoText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#fff',
    flex: 0.7,
    fontSize: 20,
    bottom: 10
  },
  imageWrap: {
    left: 0,
    paddingRight: 30,
    flex: 0.2,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  // buttonsContainerWrap: {
  //   paddingTop: 0
  // },
  menuButton: {
    width: 207,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // borderColor: '#C4C4C4',
    // borderBottomWidth: 1,
    // padding: 20,
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
    flex: 0.8,
    textTransform: 'uppercase'
  },
  buttonWithBorder: {
    width: 207,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 15,
  },
  logo: {
    alignSelf: 'flex-end',
    marginTop: 20
  }
})
