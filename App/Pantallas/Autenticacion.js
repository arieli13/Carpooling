import React, { Component } from 'react';
import {View} from 'react-native';

import HeaderComponente from '../Componentes/HeaderComponente';
import AutenticacionComponente from '../Componentes/AutenticacionComponente';

export default class Autenticacion extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
                <HeaderComponente nombre = "Iniciar Sesión"></HeaderComponente>
                <AutenticacionComponente></AutenticacionComponente>
            </View>
        );    
    }
}