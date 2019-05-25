import React, {Component} from 'react';

import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';

import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';

import StackNavigator from '../navigation/StackNavigator';

const DrawerWithLogoutButton = (props) => (
  <ScrollView contentContainerStyle={{flex: 1,  flexDirection: 'column', justifyContent: 'space-between' }}>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
      <View style={styles.item}>
        <Text style={styles.label}>Logout</Text>
      </View>
    </TouchableOpacity>
  </ScrollView>
);

export default createDrawerNavigator({
  Application: {
    screen: StackNavigator
  },
}, {
  contentComponent: DrawerWithLogoutButton
})

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    margin: 16,
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, .87)',
  },
  iconContainer: {
    marginHorizontal: 16,
    width: 24,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  }
});