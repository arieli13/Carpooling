import React, { Component } from 'react';
import {TouchableOpacity, View, StyleSheet, Image, Alert, Text} from 'react-native';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

export default class EscogerUsuarioComponente extends Component {

    _onPressImage(){
        Alert.alert(":o", "Imagen presionada");
    }

    render() {
      return (
        <View style = {{flex: 1,  flexDirection: 'column', justifyContent: 'space-around', alignItems: "center"}}>

            <View style = {{alignItems: "center"}}>
            <TouchableOpacity  onPress={() => this._onPressImage()} style = {{width: 150, height: 150, borderRadius: 150/2}}>
                <Image  style = {estilos.circle} source={require('../Imagenes/driver.jpg')} />
            </TouchableOpacity >
            <Text style = {estilos.text}>Conductor</Text>
            </View>

            <View style = {{alignItems: "center"}}>
            <TouchableOpacity  onPress={() => this._onPressImage()} style = {{width: 150, height: 150, borderRadius: 150/2}}>
                <Image style = {estilos.circle} source={require('../Imagenes/passenger.png')} />
            </TouchableOpacity >
            <Text style = {estilos.text}>Pasajero</Text>
            </View>
        </View>
      );
    }
  }

const estilos = StyleSheet.create({
    circle: {
        width: 150,
        height: 150,
        borderRadius: 150/2
    },

    text:{
        color:COLORES.NARANJA,
        fontFamily: TIPOGRAFIAS.TEXTO_NORMAL,
        fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL
    }

});