import { StyleSheet, Platform } from 'react-native'
import { width, height } from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    width: width[100],
    height: height[100],
    backgroundColor: 'rgba(114, 0, 0, 0.1)'
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#720000',
    position: 'absolute',
    // top: 100,
    marginBottom: 10,
    right: 7,
    zIndex: 999,
    ...Platform.select({
      ios: {
        // zIndex: 5,
        bottom: 20
      },
      android: {
        // zIndex: 999,
        bottom: 30
      }
    })
  },
  buttonImage: {
    alignSelf: 'center',
    marginVertical: '25%'
  }
})
