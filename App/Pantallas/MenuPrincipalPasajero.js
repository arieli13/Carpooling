import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import CartaComponente from '../Componentes/CartaComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class MenuPrincipalPasajero extends Component{
    static navigationOptions = {
        header: null,
        
      };
    render(){
        return(
            <View style = {{flex:1, backgroundColor:COLORES.BACKGROUND}}>
                <View style = {{flex:2}}>
                    <Image style = {{flex:1, resizeMode: "stretch"}} source={require('../Imagenes/jumbotron.png')}></Image>
                </View>

                <View style = {{flex:3}}>
                    <View style = {{flex:1, alignContent: "space-around"}}>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Buscar" descripcion = "Buscar viajes, personas, etc"></CartaComponente>
                            
                            <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Historial" descripcion = "Información acerca de viajes realizados como pasajero"></CartaComponente>
                        
                        </View>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Favoritos" descripcion = "Usuarios agregados como favoritos"></CartaComponente>
                          
                            <CartaComponente imagen = "../Imagenes/landscape_1.png"  titulo = "Bloqueados" descripcion = "Usuarios bloqueados"></CartaComponente>
                        
                        </View>
                    </View>
                </View>
            </View> 
            


        );    
    }
}

const estilos = StyleSheet.create({
    imagen: {
        flex:1,
        resizeMode: "stretch"
        
    },
    contenedorPrincipal:{
        flex:1, 
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: COLORES.GRIS_CLARO
    },


    text:{
        color:COLORES.NARANJA,
        fontFamily: TIPOGRAFIAS.TEXTO_NORMAL,
        fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL
    }

});
