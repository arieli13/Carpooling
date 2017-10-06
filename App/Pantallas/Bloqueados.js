import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

/**
 * <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                            label='Buscar'
                            onChangeText={ (text) => this.setState({usuario:text})}
                        />
 */

export default class Bloqueados extends Component{
    static navigationOptions = {
        header: null
      };

    _Desbloquear(usuario){
        Alert.alert("Presionado", "Desbloquear");
    }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Bloqueados"></HeaderComponente>
                <View style = {{flex:1, marginLeft:30, marginRight:30, marginTop:30, marginBottom:30}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Ariel Rodriguez" detalle = "Ingenieria en Computacion"></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Pablo Navarro" detalle = "Ingenieria en Computacion" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Eros Hernandez" detalle = "Ingenieria en Computacion" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Esteban Arias" detalle = "Funcionario" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Raquel Mejias" detalle = "Ingenieria Ambiental" ></CartaPequenniaComponente>
                        <CartaPequenniaComponente boton_onPress = {()=>{this._Desbloquear(12)}} boton_activo = {true} boton_mt = {3} boton_mb = {3} boton_filled = {require('../Imagenes/unlock.png')} boton_unfilled = {require('../Imagenes/unlock.png')} boton_width = {40} boton_height = {10} imagen = {require('../Imagenes/user.jpg')} onPress = {()=> {this._onPress(1)}} mostrarBoton = {true} color  = {COLORES.NEGRO} titulo = "Alina Rodriguez" detalle = "Funcionario" ></CartaPequenniaComponente>


                    </ScrollView>
                </View>
            </View>
        );    
    }
}