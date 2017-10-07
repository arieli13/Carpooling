import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';//https://www.npmjs.com/package/react-native-pull-to-refresh

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class ViajesHistoricosPasajero extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);
            var viajesAux = { viajes: [
                {id: 13, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am"}, 
                {id:14, nombre:"TEC-HEREDIA", hora: "19/10/2017 11:30am"}] }
    
            this.state = {viajes: viajesAux.viajes.map((dato, index)=>{
                    return  <TouchableOpacity key = {dato.id} onPress = {()=>{this._verViaje(dato.id)}} style = {{flex:1}}>
                                <CartaPequenniaComponente imagen = {require('../Imagenes/map.png')} mostrarBoton = {false} color  = {COLORES.ROJO} titulo = {dato.nombre} detalle = {dato.hora} ></CartaPequenniaComponente>
                            </TouchableOpacity>;
            })}
        }

      _verViaje(viaje){
        Alert.alert("Viaje", "Ver viaje "+String(viaje));
      }

      _refresh() {
        /*return new Promise((resolve) => {
          setTimeout(()=>{reject()}, 2000)
        });*/
        this.setState({viajes:<Text key = {0} style = {{flex:1, alignSelf: "center", fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold", color: COLORES.AZUL}}>No ha realizado ningún viaje como pasajero</Text>});
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Viajes Históricos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30}}>
                    <View style = {{flex:1}}>
                        <TextInput style = {{ borderColor : COLORES.AZUL}} placeholder = "Buscar" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:5}}>
                        <PTRView onRefresh={this._refresh.bind(this)}>
                            <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                                {this.state.viajes}
                            </ScrollView>
                        </PTRView>
                    </View>
                </View>
            </View>
        );    
    }
}