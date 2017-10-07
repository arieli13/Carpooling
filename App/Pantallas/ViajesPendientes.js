import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';//https://www.npmjs.com/package/react-native-pull-to-refresh

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

export default class ViajesPendientes extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);
            var viajesAux = { viajes: [
                {id: 13, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am", pendiente:false}, 
                {id:14, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am", pendiente:true}] }
    
            this.state = {viajes: viajesAux.viajes.map((dato, index)=>{
                if(dato.pendiente){
                    return  <TouchableOpacity key = {dato.id} onPress = {()=>{this._verViaje(dato.id)}} style = {{flex:1}}>
                                <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._cancelarViajePendiente(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/pendiente.gif')} boton_unfilled = {require('../Imagenes/pendiente.gif')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true} color  = {COLORES.VERDE} titulo = {dato.nombre} detalle = {dato.hora} ></CartaPequenniaComponente>
                            </TouchableOpacity>;
                        }else{
                    return  <TouchableOpacity key = {dato.id} onPress = {()=>{this._verViaje(dato.id)}} style = {{flex:1}}>
                                <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._cancelarViaje(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true} color  = {COLORES.VERDE} titulo = {dato.nombre} detalle = {dato.hora} ></CartaPequenniaComponente>
                            </TouchableOpacity>;
                }
                
            })}
        }

      _cancelarViaje(viaje){
        Alert.alert("Cancelar", "Cancerlar viaje "+String(viaje));
      }
      _cancelarViajePendiente(viaje){
          Alert.alert("Cancelar", "Cancelar solicitud "+String(viaje));
      }

      _verViaje(viaje){
          Alert.alert("Ver", "Información del viaje "+String(viaje));
      }

      _refresh() {
        /*return new Promise((resolve) => {
          setTimeout(()=>{reject()}, 2000)
        });*/
        var viajesAux = { viajes: [
            {id: 13, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am", pendiente:false}, 
            {id:14, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am", pendiente:true},
            {id:15, nombre:"TEC-ALAJUELA", hora: "19/10/2017 11:30am", pendiente:false}] }

        this.setState({viajes: viajesAux.viajes.map((dato, index)=>{
            if(dato.pendiente){
                    return  <TouchableOpacity key = {dato.id} onPress = {()=>{this._verViaje(dato.id)}} style = {{flex:1}}>
                                <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._cancelarViajePendiente(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/pendiente.gif')} boton_unfilled = {require('../Imagenes/pendiente.gif')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true} color  = {COLORES.VERDE} titulo = {dato.nombre} detalle = {dato.hora} ></CartaPequenniaComponente>
                            </TouchableOpacity>;
                        }else{
                    return  <TouchableOpacity key = {dato.id} onPress = {()=>{this._verViaje(dato.id)}} style = {{flex:1}}>
                                <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._cancelarViaje(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/cancel-button.png')} boton_unfilled = {require('../Imagenes/cancel-button.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/map.png')} mostrarBoton = {true} color  = {COLORES.VERDE} titulo = {dato.nombre} detalle = {dato.hora} ></CartaPequenniaComponente>
                            </TouchableOpacity>;
                }
            
        })});
        this.setState({viajes:<Text style = {{flex:1, alignSelf: "center", fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold", color: COLORES.AZUL}}>No hay viajes</Text>});
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Viajes Pasajero"></HeaderComponente>
                <PTRView onRefresh={this._refresh.bind(this)}  style = {{flex:1, marginLeft:30, marginRight:30, marginTop: 30, marginBottom:30}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                        {this.state.viajes}
                    </ScrollView>
                </PTRView>
            </View>
        );    
    }
}