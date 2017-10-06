import React, { Component } from 'react';
import {View, ScrollView, Image, Text, Button, Alert} from 'react-native';

import HeaderComponente from '../Componentes/HeaderComponente';
import PerfilComponente from '../Componentes/PerfilComponente';

import BotonComponente from '../Componentes/BotonComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Perfil extends Component{
    static navigationOptions = {
        header: null
      };
    render(){
        return(
            <View View style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Perfil"></HeaderComponente>
                <View style = {{flex:8}}>
                <PerfilComponente style = {{flex:10}}  nombre = "Eduardo Leandro" area = "Ingenieria Materiales" telefono = "8924-58-11" correo = "leandroe25@gmail.com"></PerfilComponente>
                </View>

                <View style = {{flex:1, flexDirection: "row"}}>
                    <View style = {{flex:1, alignItems: "flex-start", marginBottom:10, marginLeft:10}}>
                        <BotonComponente filled = {require('../Imagenes/heart_filled.png')} unfilled = {require('../Imagenes/heart_unfilled.png')} activo = {false} width = {40} height = {0} > </BotonComponente>
                    </View>
                    <View style = {{flex:1, alignItems: "center", marginBottom:10}}>
                        <BotonComponente filled = {require('../Imagenes/lock.png')} unfilled = {require('../Imagenes/lock.png')} activo = {true} width = {40} height = {0} > </BotonComponente>
                    </View>
                    <View style = {{flex:1, alignItems: "flex-end", marginBottom: 10, marginRight:10}}>
                        <BotonComponente filled = {require('../Imagenes/call.png')} unfilled = {require('../Imagenes/call.png')} activo = {true} width = {50} height = {0} > </BotonComponente>
                    </View>
                </View>
            </View>
        );    
    } 
}