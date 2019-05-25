import { createBottomTabNavigator } from 'react-navigation';

import DrawerNavigator from './DrawerNavigator';

import Noticias from '../pages/Noticias';
import RedeSocial from '../pages/RedeSocial';
import Perfil from '../pages/Perfil';

export default createBottomTabNavigator({
  Noticias,
  RedeSocial,
  Perfil
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  }
})