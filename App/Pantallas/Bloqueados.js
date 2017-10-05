import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

/**
 * <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                            label='Buscar'
                            onChangeText={ (text) => this.setState({usuario:text})}
                        />
 */

export default class Autenticacion extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Bloqueados"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {{ borderColor : COLORES.AZUL}} placeholder = "Buscar" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>


                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Ariel Rodriguez" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Pablo Navarro" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Eros Hernandez" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Esteban Arias" detalle = "Funcionario" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Raquel Mejias" detalle = "Ingenieria Ambiental" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Alina Rodriguez" detalle = "Funcionario" imagen = "Persona"></CartaPequenniaComponente>


                    </ScrollView>
                    </View>
                </View>
            </View>
        );    
    }
}