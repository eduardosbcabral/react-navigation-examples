import React, { Component } from 'react';

import { View, Button } from 'react-native';

// import { Container } from './styles';

export default class RedeSocial extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="DETALHAR PUBLICACAO" onPress={() => this.props.navigation.navigate('DetalharPublicacao')} />
      </View>
    );
  }
}
