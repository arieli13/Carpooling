import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Autenticacion from './App/Pantallas/Autenticacion';
import EscogerUsuario from './App/Pantallas/EscogerUsuario';
import MenuPrincipalPasajero from './App/Pantallas/MenuPrincipalPasajero';
import Favoritos from './App/Pantallas/Favoritos';
import Bloqueados from './App/Pantallas/Bloqueados';
import ViajesPendientes from './App/Pantallas/ViajesPendientes';
import ViajesHistoricosPasajero from './App/Pantallas/ViajesHistoricosPasajero';
import Perfil from './App/Pantallas/Perfil';
import MenuPrincipalConductor from './App/Pantallas/MenuPrincipalConductor';
import Vehiculos from './App/Pantallas/Vehiculos';
import ModificarVehiculo from './App/Pantallas/ModificarVehiculo';
import Buscar from './App/Pantallas/Buscar';
import CrearVehiculo from './App/Pantallas/CrearVehiculo';
import TerminosCondiciones from './App/Pantallas/TerminosCondiciones';
import Viajes from './App/Pantallas/Viajes';
/////////
import CrearViaje from './App/Pantallas/CrearViaje';
export default app = StackNavigator({
    'Home': { screen: Autenticacion },
    'EscogerUsuario': {screen: EscogerUsuario},


    'MenuPrincipalPasajero': {screen: MenuPrincipalPasajero},
    'Favoritos': {screen: Favoritos},
    'Bloqueados': {screen: Bloqueados},
    'ViajesPendientes':{screen:ViajesPendientes},
    'ViajesHistoricosPasajero':{screen: ViajesHistoricosPasajero},
    'Perfil': {screen:Perfil},

    'MenuPrincipalConductor':{screen:MenuPrincipalConductor},
    'Vehiculos':{screen:Vehiculos},
    'ModificarVehiculo':{screen:ModificarVehiculo},
    'Buscar':{screen:Buscar},
    'CrearViaje':{screen: CrearViaje},
    'CrearVehiculo':{screen: CrearVehiculo},

    'TerminosCondiciones':{screen:TerminosCondiciones},
    'Viajes':{screen:Viajes}
  });


AppRegistry.registerComponent('ride', () => app);