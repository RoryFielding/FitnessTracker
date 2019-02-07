import { createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../screens/AuthScreen';
import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import ConsentScreen from '../screens/ConsentScreen';
import WeightScreen from '../screens/WeightScreen';
import HeightScreen from '../screens/HeightScreen';
import GoalScreen from '../screens/GoalScreen';
import ActivityCompleteScreen from '../screens/ActivityCompleteScreen';
import AimScreen from '../screens/AimScreen';
import PhysicalIntensityScreen from '../screens/PhysicalIntensityScreen';

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthScreen,
    SignUp: SignUpScreen,
    Consent: ConsentScreen,
    Weight: WeightScreen,
    Height: HeightScreen,
    Aim: AimScreen,
    Physical: PhysicalIntensityScreen,
    Goal: GoalScreen,
    ActivityComplete: ActivityCompleteScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    ConsentRoute: 'Consent',
    WeightRoute: 'Weight',
    HeightRoute: 'Height',
    AimRoute: 'Aim',
    PhysicalRoute: 'Physical',
    GoalRoute: 'Goal', 
    ActivityRoute: 'ActivityComplete',
    secondRoute: 'Main'
  }
);