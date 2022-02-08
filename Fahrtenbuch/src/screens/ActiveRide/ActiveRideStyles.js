import { StyleSheet } from 'react-native'
import { width, height } from '../../utils/width.util'

export default StyleSheet.create({
  container: {
    width: 222,
    height: 299,
    backgroundColor: '#fff',
    // marginTop: 100,
    position: 'absolute',
    bottom: 150,
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft: 5,
    marginHorizontal: '15%'
  },
  map: {
    width: width[100],
    height: height[100],
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10
  },
  titleText: {
    fontSize: 15
  },
  row: {
    flexDirection: 'row',
    marginLeft: 10,
    marginVertical: 3
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10
  },
  leftBox: {
    flex: 0.4,
  },
  righttBox: {
    flex: 0.6,
    alignItems: 'flex-end',
    marginRight: 10
  },
  leftText: {
    fontSize: 10,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rightText: {
    fontSize: 10
  },
  pointText: {
    fontSize: 15,
    marginLeft: 5,
  },
  stopButton: {
    width: 200,
    height: 43,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#720000',
    marginTop: 10
  },
  stopButtonText: {
    fontSize: 15,
    color: '#fff',
    textTransform: 'capitalize'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 150,
    right: 20,
    alignItems: 'center',
  },
  button: {
    width: 45,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 5
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
  buttonImageSmall: {
    alignSelf: 'center',
  },
  buttonImageBig: {
    alignSelf: 'center',
    width: 20,
    height: 20,
  }
})
