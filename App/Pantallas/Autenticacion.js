import React, { Component } from 'react';
import {View} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import AutenticacionComponente from '../Componentes/AutenticacionComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Autenticacion extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <View style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Iniciar Sesión"></HeaderComponente>
                <AutenticacionComponente navigation= {this.props.navigation}></AutenticacionComponente>
            </View>
        );    
    }
}