import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Autenticacion extends Component{
    static navigationOptions = {
        header: null
      };

      _cancelarViaje(viaje){
        Alert.alert("Cancelar", "Cancerlar viaje");
      }
      _cancelarViajePendiente(viaje){
          Alert.alert("Cancelar", "Cancelar solicitud");
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Viajes Pasajero"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30, marginTop: 30, marginBottom:30}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                    <CartaPequenniaComponente boton_onPress = {()=>{this._cancelarViajePendiente(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/pendiente.gif')} boton_unfilled = {require('../Imagenes/pendiente.gif')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true      } color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._cancelarViajePendiente(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/pendiente.gif')} boton_unfilled = {require('../Imagenes/pendiente.gif')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true      } color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" ></CartaPequenniaComponente>
                        
                        <CartaPequenniaComponente boton_onPress = {()=>{this._cancelarViaje(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true} color  = {COLORES.ROJO} titulo = "San José - TEC" detalle = "19/10/2017 - 11:30am" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._cancelarViaje(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true      } color  = {COLORES.VERDE} titulo = "TEC - Heredia" detalle = "19/10/2017 - 11:30am" ></CartaPequenniaComponente>
                        

                    </ScrollView>
                </View>
            </View>
        );    
    }
}