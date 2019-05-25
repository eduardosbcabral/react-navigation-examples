import React, { Component } from 'react';

import { View, Button } from 'react-native';

// import { Container } from './styles';

export default class Login extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="APPLICATION" onPress={() => this.props.navigation.navigate('Application')} />
      </View>
    );
  }
}
