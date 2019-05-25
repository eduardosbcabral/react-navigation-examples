import React, { Component } from 'react';

import { View, Button } from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="CADASTRO" onPress={() => this.props.navigation.navigate('Cadastro')} />
        <Button title="LOGIN" onPress={() => this.props.navigation.navigate('Login')} />
      </View>
    );
  }
}
