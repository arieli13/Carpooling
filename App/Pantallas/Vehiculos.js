import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';//https://www.npmjs.com/package/react-native-pull-to-refresh


import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

import BotonComponente from '../Componentes/BotonComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

export default class Vehiculos extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);
            var vehiculosAux = { vehiculos: [
                {id: 13, marca:"Nissan", placa: "FDG-654"}, 
                {id:14, marca:"Toyota", placa: "KJB-655",}] }
    
            this.state = {vehiculos: vehiculosAux.vehiculos.map((dato, index)=>{
                return  <TouchableOpacity key = {dato.id} style = {{flex:1}} onPress = {()=>  {this._modificarVehiculo(dato.id) }}>
                           <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._eliminarVehiculo(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/car_1.png')}  mostrarBoton = {true} color  = {COLORES.ROJO} titulo = {dato.marca} detalle = {dato.placa} ></CartaPequenniaComponente>
                        </TouchableOpacity>;
                
            })}
        }
    
    _eliminarVehiculo(vehiculo){
        Alert.alert("Eliminar", "Eliminar el vehículo "+String(vehiculo));
    }

    _modificarVehiculo(vehiculo){
        Alert.alert("Modificar", "Modificar vehículo "+String(vehiculo));
    }

    _crearVehiculo(){
        Alert.alert("Vehiculo", "Crear Nuevo vehículo");
    }

    _refresh() {
        /*return new Promise((resolve) => {
          setTimeout(()=>{reject()}, 2000)
        });*/
        this.setState({vehiculos:<Text key = {0} style = {{flex:1, alignSelf: "center", fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold", color: COLORES.AZUL}}>No hay vehículos</Text>});
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Vehiculos"></HeaderComponente>
                
                <View style = {{flex:8, marginLeft:30, marginRight:30, marginTop:30, marginBottom: 10}}>
                    <PTRView onRefresh={this._refresh.bind(this)} style = {{flex:1}}>
                        <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                            {this.state.vehiculos}
                        </ScrollView>
                    </PTRView>
                </View>
                <View style = {{flex:1, alignItems: "flex-end", marginBottom: 10, marginRight:10}}>
                <BotonComponente onPress = {()=>{this._crearVehiculo()}} background = {COLORES.GRIS_CLARO} filled = {require('../Imagenes/crear.png')} unfilled = {require('../Imagenes/crear.png')} activo = {true} width = {50} height = {0} > </BotonComponente>
                </View>
                
            </View>
        );    
    }
}