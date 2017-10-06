import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Favoritos extends Component{
    static navigationOptions = {
        header: null
      };

    _onPress(usuario){
        Alert.alert("Eliminar favorito");
    }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Favoritos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {{ borderColor : COLORES.AZUL}} placeholder = "Buscar" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:5}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                        <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this.props.navigation.navigate('Perfil') }}>
                            <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Ariel Rodriguez" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        </TouchableOpacity>
                        <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Pablo Navarro" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Eros Hernandez" detalle = "Ingenieria en Computacion" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Esteban Arias" detalle = "Funcionario" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Raquel Mejias" detalle = "Ingenieria Ambiental" imagen = "Persona"></CartaPequenniaComponente>
                        <CartaPequenniaComponente onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Alina Rodriguez" detalle = "Funcionario" imagen = "Persona"></CartaPequenniaComponente>


                    </ScrollView>
                    </View>
                </View>
            </View>
        );    
    }
}