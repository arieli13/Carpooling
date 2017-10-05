import React, { Component } from 'react';
import {View, ScrollView, Image, Text, Button} from 'react-native';

import HeaderComponente from '../Componentes/HeaderComponente';
import PerfilComponente from '../Componentes/PerfilComponente';

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
                <PerfilComponente nombre = "Eduardo Leandro" area = "Ingenieria Materiales" telefono = "8924-58-11" correo = "leandroe25@gmail.com"></PerfilComponente>
                <View style = {{alignItems: "flex-end", marginBottom: 5, marginRight:30}}>
                    <Button color = {COLORES.VERDE} title = "Llamar" onPress = {()=>{}}></Button>
                </View>
            </View>
        );    
    }
}