import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';//https://www.npmjs.com/package/react-native-pull-to-refresh

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Favoritos extends Component{
    static navigationOptions = {
        header: null
      };
    
      constructor(props){
        super(props);
            var usuariosAux = { usuarios: [
                {id: 13, nombre:"Alina Rodríguez", area: "Funcionario"}, 
                {id:14, nombre:"Reggie Barker", area: "Ingeniería en computación"}] }
    
            this.state = {usuarios: usuariosAux.usuarios.map((dato, index)=>{
                return  <TouchableOpacity onPress = {()=>{this._verUsuario(dato.id)}} key = {dato.id} style = {{flex:1}}>
                           <CartaPequenniaComponente key = {dato.id} boton_onPress = {()=>{this._eliminarFavorito(dato.id)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_mr = {5} boton_filled = {require('../Imagenes/heart_filled.png')} boton_unfilled = {require('../Imagenes/heart_unfilled.png')} boton_width = {30} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = {dato.nombre} detalle = {dato.area}></CartaPequenniaComponente>
                        </TouchableOpacity>;
                
            })}
        }

    _eliminarFavorito(usuario){
        Alert.alert("Eliminar", "Eliminar favorito "+String(usuario));
    }

    _verUsuario(usuario){
        Alert.alert("Ver", "Ver usuario "+String(usuario));
    }

    _refresh() {
        /*return new Promise((resolve) => {
          setTimeout(()=>{reject()}, 2000)
        });*/
        this.setState({usuarios:<Text key = {0} style = {{flex:1, alignSelf: "center", fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold", color: COLORES.AZUL}}>No ha agregado como favorito a ningún usuario</Text>});
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Favoritos"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30, marginTop:30, marginBottom:30}}>
                    <PTRView onRefresh={this._refresh.bind(this)} style = {{flex:1}}>
                        <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                            {this.state.usuarios}
                        </ScrollView>
                    </PTRView>
                </View>
            </View>
        );    
    }
}