import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import CartaComponente from '../Componentes/CartaComponente';
import HeaderComponente from '../Componentes/HeaderComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

/**
 * 
 */


export default class MenuPrincipalPasajero extends Component{
    static navigationOptions = {
        header: null,
    };

    _cambiarPantalla(pantalla){
        const { navigate } = this.props.navigation;
        navigate(pantalla);
    }

    render(){
        return(
            <View style = {{flex:1, backgroundColor:COLORES.BACKGROUND}}>
                <View style = {{flex:2}}>
                    <Image style = {{flex:1, resizeMode: "stretch"}} source={require('../Imagenes/jumbotron.png')}></Image>
                </View>

                <View style = {{flex:3}}>
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1, alignContent: "space-around"}}>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity style = {{flex:1}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Buscar" descripcion = "Buscar viajes, personas, etc"></CartaComponente>
                            </TouchableOpacity>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('ViajesPendientes')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Viajes pendientes" descripcion = "Viajes en los que eres pasajero"></CartaComponente>
                            </TouchableOpacity>
                        </View>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('Favoritos')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Favoritos" descripcion = "Usuarios agregados como favoritos"></CartaComponente>
                            </TouchableOpacity>    
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('Bloqueados')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png"  titulo = "Bloqueados" descripcion = "Usuarios bloqueados"></CartaComponente>
                            </TouchableOpacity> 
                        </View>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('ViajesHistoricosPasajero')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Historial" descripcion = "Información acerca de viajes realizados como pasajero"></CartaComponente>
                            </TouchableOpacity>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>{}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Logros" descripcion = "Puedes ver todos los logros que has desbloqueado!"></CartaComponente>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
