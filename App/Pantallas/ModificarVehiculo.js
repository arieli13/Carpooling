import React, { Component } from 'react';
import {View, ScrollView, Image, Text, Button, Alert} from 'react-native';

import HeaderComponente from '../Componentes/HeaderComponente';
import VehiculoComponente from '../Componentes/VehiculoComponente';

import BotonComponente from '../Componentes/BotonComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class ModificarVehiculo extends Component{
    static navigationOptions = {
        header: null
      };
    render(){
        return(
            <View View style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Vehículo"></HeaderComponente>
                <View style = {{flex:8}}>
                <VehiculoComponente imagen = {require('../Imagenes/car_1.png')} style = {{flex:10}}  marca = "Nissan" placa = "KJB-654" color = "Rojo"></VehiculoComponente>
                </View>

                <View style = {{flex:1, flexDirection: "row"}}>
                    <View style = {{flex:1, alignItems: "flex-end", marginBottom: 10, marginRight:10}}>
                        <BotonComponente filled = {require('../Imagenes/actualizar.png')} unfilled = {require('../Imagenes/actualizar.png')} activo = {true} width = {50} height = {0} > </BotonComponente>
                    </View>
                </View>
            </View>
        );    
    } 
}