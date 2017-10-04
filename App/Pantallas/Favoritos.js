import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import FavoritoComponente from '../Componentes/FavoritoComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Autenticacion extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Favoritos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {{ borderColor : COLORES.AZUL}} placeholder = "Buscar" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:5}}>
                    <ScrollView style = {{flex:1}}>

                        <FavoritoComponente nombre = "Ariel Rodriguez" area = "Ingenieria en Computacion"></FavoritoComponente>
                
                        <FavoritoComponente nombre = "Pablo Navarro" area = "Ingenieria en Computacion"></FavoritoComponente>
                        <FavoritoComponente nombre = "Eros Hernandez" area = "Ingenieria en Computacion"></FavoritoComponente>
                        <FavoritoComponente nombre = "Esteban Arias" area = "Funcionario"></FavoritoComponente>
                        <FavoritoComponente nombre = "Raquel Mejias" area = "Ingenieria Ambiental"></FavoritoComponente>
                        <FavoritoComponente nombre = "Alina Rodriguez" area = "Funcionario"></FavoritoComponente>


                    </ScrollView>
                    </View>
                </View>
            </View>
        );    
    }
}