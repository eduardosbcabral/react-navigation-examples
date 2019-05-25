import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import TabNavigator from './TabNavigator';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default createStackNavigator({
  TabNavigator
}, {
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft:(
        <Icon 
        style={{ paddingLeft: 10 }} 
        name="menu" 
        size={30}
        onPress={() => navigation.openDrawer()} />
      )
    }
  }
})