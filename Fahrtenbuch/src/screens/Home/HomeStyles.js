import { StyleSheet } from 'react-native'
import { width, height } from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    width: width[100],
    height: height[100],
  },
  map: {
    width: width[100],
    height: height[100],
  },
  buttonContainer: {
    position: 'absolute',
    right: 30,
    bottom: 50,
    height: 180,
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonBig: {
    width: 64,
    height: 64,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  buttonImage: {
    alignSelf: 'center',
  },
  buttonImageBig: {
    alignSelf: 'center',
    width: 20,
    height: 20,
  }
})
