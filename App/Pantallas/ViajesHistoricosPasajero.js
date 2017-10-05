import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Autenticacion extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Viajes Históricos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {{ borderColor : COLORES.AZUL}} placeholder = "Buscar" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>

                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {false} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" imagen = "Mapa"></CartaPequenniaComponente>

                    </ScrollView>
                    </View>
                </View>
            </View>
        );    
    }
}