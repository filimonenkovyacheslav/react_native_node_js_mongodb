import { createAppContainer, createDrawerNavigator } from 'react-navigation'

import DriverProfile from '../screens/DriverProfile/DriverProfile'
import AddCar from '../screens/AddCar/AddCar'
import Menu from '../components/Menu/Menu'
import SignIn from '../screens/SignIn/SignIn'
import SignUp from '../screens/SignUp/SignUp'
import DriversList from '../screens/DriversList/DriversList'
import RideHistory from '../screens/RideHistory/RideHistory'
import CarDetails from '../screens/CarDetails/CarDetails'
import CarList from '../screens/CarList/CarList'
import NewRide from '../screens/NewRide/NewRide'
import Home from '../screens/Home/Home'
import AddDriver from '../screens/AddDriver/AddDriver'
import ActiveRide from '../screens/ActiveRide/ActiveRide'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'

const drawerConfig = {
  contentComponent: Menu
}

const drawerNavigator = createDrawerNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen
    },
    SignUp: {
      screen: SignUp
    },
    SignIn: {
      screen: SignIn
    },
    DriverProfile: {
      screen: DriverProfile
    },
    RideHistory: {
      screen: RideHistory
    },
    AddCar: {
      screen: AddCar
    },
    DriversList: {
      screen: DriversList
    },
    CarDetails: {
      screen: CarDetails
    },
    CarList: {
      screen: CarList
    },
    NewRide: {
      screen: NewRide
    },
    Home: {
      screen: Home
    },
    AddDriver: {
      screen: AddDriver
    }
    ActiveRide: {
      screen: ActiveRide
    }
  },
  drawerConfig
)

export default createAppContainer(drawerNavigator)
