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

    _EliminarFavorito(usuario){
        Alert.alert("Eliminar favorito");
    }



    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Favoritos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30, marginTop:30, marginBottom:30}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                        <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this.props.navigation.navigate('Perfil') }}>
                            <CartaPequenniaComponente boton_onPress = {()=>{this._EliminarFavorito(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {3} boton_filled = {require('../Imagenes/heart_filled.png')} boton_unfilled = {require('../Imagenes/heart_filled.png')} boton_width = {30} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Ariel Rodriguez" detalle = "Ingenieria en Computacion" ></CartaPequenniaComponente>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </View>
        );    
    }
}