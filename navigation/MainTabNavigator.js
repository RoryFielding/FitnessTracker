import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import RecordScreen from '../screens/RecordScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-person${focused ? '' : '-outline'}`
          : 'md-person'
      }
    />
  ),
};

const AchievementsStack = createStackNavigator({
  Achievements: AchievementsScreen,
});

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-trophy'}
    />
  ),
};

const RecordStack = createStackNavigator({
  Record: RecordScreen,
})

RecordStack.navigationOptions = {
  tabBarLabel: 'Record',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-add-circle${focused ? '' : '-outline'}` : 'md-add-circle'}
    />
  ),
};

const AnalyticsStack = createStackNavigator({
  Analytics: AnalyticsScreen,
})

AnalyticsStack.navigationOptions = {
  tabBarLabel: 'Analytics',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-stats${focused ? '' : '-outline'}` : 'md-stats'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AchievementsStack,
  RecordStack,
  AnalyticsStack,
  SettingsStack,
});
