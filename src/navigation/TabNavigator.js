import { createBottomTabNavigator } from 'react-navigation';

import RedeSocialStackNavigator from './RedeSocialStackNavigator';

import Noticias from '../pages/Noticias';
import RedeSocial from '../pages/RedeSocial';
import Perfil from '../pages/Perfil';

export default createBottomTabNavigator({
  Noticias,
  RedeSocialStackNavigator,
  Perfil
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    }
  }
})