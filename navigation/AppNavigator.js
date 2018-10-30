import { createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import ConsentScreen from '../screens/ConsentScreen';
import WeightScreen from '../screens/WeightScreen';
import HeightScreen from '../screens/HeightScreen';

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthScreen,
    SignUp: SignUpScreen,
    Consent: ConsentScreen,
    Weight: WeightScreen,
    Height: HeightScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    secondRoute: 'Main'
  }
);