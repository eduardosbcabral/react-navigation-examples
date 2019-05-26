import React, {Component} from 'react';

import { createStackNavigator } from 'react-navigation';

import RedeSocial from '../pages/RedeSocial';
import DetalharPublicacao from '../pages/DetalharPublicacao';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default createStackNavigator({
  RedeSocial: {
    screen: RedeSocial,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Rede Social',
        headerLeft:(
          <Icon 
          style={{ paddingLeft: 10 }} 
          name="menu" 
          size={30}
          onPress={() => navigation.openDrawer()} />
        )
      }
    }
  },

  DetalharPublicacao: {
    screen: DetalharPublicacao
  }
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})