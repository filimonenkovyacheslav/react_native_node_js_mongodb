import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import DriverProfile from '../screens/DriverProfile/DriverProfile'
import AddCar from '../screens/AddCar/AddCar'
import Menu from '../components/Menu/Menu'
import SignIn from '../screens/SignIn/SignIn'
import SignUp from '../screens/SignUp/SignUp'
import DriversList from '../screens/DriversList/DriversList'
import CarList from '../screens/CarList/CarList'
import RideHistory from '../screens/RideHistory/RideHistory'
import CarDetails from '../screens/CarDetails/CarDetails'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'
import NewRide from '../screens/NewRide/NewRide'
import Home from '../screens/Home/Home'
import AddDriver from '../screens/AddDriver/AddDriver'
import ActiveRide from '../screens/ActiveRide/ActiveRide'


const MainNavigator = createStackNavigator(
  {
    DriverProfile: {
      screen: DriverProfile
    },
    AddCar: {
      screen: AddCar
    },
    RideHistory: {
      screen: RideHistory
    },
    CarDetails: {
      screen: CarDetails
    },
    DriversList: {
      screen: DriversList
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
    },
    ActiveRide: {
      screen: ActiveRide
    }
  },
  {
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    }
  }
)


const ClosedNavigator = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen
    },
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
    },
  },
  {
    headerMode: 'none',
    header: null,
    navigationOptions: {
      header: null
    },
    initialRouteName: 'WelcomeScreen'
  }
)


const drawerConfig = {
  contentComponent: Menu
}


const Drawer = createDrawerNavigator(
  {
    ClosedScreen:{
      screen: ClosedNavigator,
      navigationOptions: { drawerLockMode: 'locked-closed' }
    },
    DriverProfile: {
      screen: MainNavigator
    }
  },
  drawerConfig
)


export default createAppContainer(Drawer)
