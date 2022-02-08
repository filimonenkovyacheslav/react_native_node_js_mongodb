import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 250,
    height: 95,
    borderRadius: 16,
    backgroundColor: '#fff',
    marginVertical: 10,
    justifyContent: 'flex-start',
    paddingHorizontal: 10
  },
  containerSelected: {
    flexDirection: 'column',
    width: 250,
    height: 95,
    borderRadius: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#720000',
    marginVertical: 10,
    marginLeft: 7,
    justifyContent: 'flex-start',
    paddingHorizontal: 10
  },
  row: {
    flexDirection: 'row',
    left: 15,
    marginTop: 7
  },
  carNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#720000',
    textTransform: 'uppercase',
    marginLeft: 13
  },
  carCharacteristic: {
    fontSize: 13,
    color: '#BABABA',
    marginRight: 18
  },
  carAnswear: {
    fontSize: 13,
    color: '#720000'
  }
})
