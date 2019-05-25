import { createSwitchNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Login from '../pages/Login';

export default createSwitchNavigator({
  Home: {
    screen: Home
  },

  Cadastro: {
    screen: Cadastro
  },

  Login: {
    screen: Login
  },

  Application: {
    screen: DrawerNavigator 
  }
})