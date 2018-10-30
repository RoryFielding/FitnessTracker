import { createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthScreen,
    SignUp: SignUpScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    secondRoute: 'Main'
  }
);