import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 250,
    height: 95,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  containerSelected: {
    flexDirection: 'row',
    width: 250,
    height: 95,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#720000',
    marginVertical: 10,
    marginLeft: 7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  nameText: {
    marginLeft: 7,
    fontSize: 15,
    bottom: 4,
    fontWeight: 'bold',
    maxWidth: 180,
    maxHeight: 20,
    overflow: 'hidden',
  },
  textEmail: {
    fontSize: 15,
    bottom: 4,
    maxWidth: 140,
    maxHeight: 20,
    overflow: 'hidden',
  },
  row: {
    marginLeft: 7,
    flexDirection: 'row'
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 65
  }
})
