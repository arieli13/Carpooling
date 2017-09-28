import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Autenticacion from './App/Pantallas/Autenticacion';
import EscogerUsuario from './App/Pantallas/EscogerUsuario';
/////////

export default X = StackNavigator({
    'Home': { screen: Autenticacion },
    'M': {screen: EscogerUsuario}
  });


AppRegistry.registerComponent('ride', () => X);