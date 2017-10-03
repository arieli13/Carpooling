import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Autenticacion from './App/Pantallas/Autenticacion';
import EscogerUsuario from './App/Pantallas/EscogerUsuario';
import MenuPrincipalPasajero from './App/Pantallas/MenuPrincipalPasajero';
/////////

export default X = StackNavigator({
    'Home': { screen: MenuPrincipalPasajero },
    'EscogerUsuario': {screen: EscogerUsuario}
  });


AppRegistry.registerComponent('ride', () => X);