import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

import BotonComponente from '../Componentes/BotonComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Vehiculos extends Component{
    static navigationOptions = {
        header: null
      };

    _onPressBoton(usuario){
        Alert.alert(String(usuario));
    }

    _crearVehiculo(){
        Alert.alert("Vehiculo", "Crear Nuevo vehículo");
    }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Vehiculos"></HeaderComponente>
                <View style = {{flex:8, marginLeft:30, marginRight:30, marginTop:30, marginBottom: 10}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                        <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this.props.navigation.navigate('') }}>
                           
                            <CartaPequenniaComponente boton_onPress = {()=>{this._onPressBoton(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/car_1.png')}  mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Nissan" detalle = "BNG-564" ></CartaPequenniaComponente>
                           
                        </TouchableOpacity>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._onPressBoton(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/car_1.png')}  mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Nissan" detalle = "BNG-564" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._onPressBoton(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/car_1.png')}  mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Nissan" detalle = "BNG-564" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._onPressBoton(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/car_1.png')}  mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "Nissan" detalle = "BNG-564" ></CartaPequenniaComponente>
                    </ScrollView>
                </View>
                <View style = {{flex:1, alignItems: "flex-end", marginBottom: 10, marginRight:10}}>
                <BotonComponente onPress = {()=>{this._crearVehiculo()}} background = {COLORES.GRIS_CLARO} filled = {require('../Imagenes/crear.png')} unfilled = {require('../Imagenes/crear.png')} activo = {true} width = {50} height = {0} > </BotonComponente>
                </View>
            </View>
        );    
    }
}