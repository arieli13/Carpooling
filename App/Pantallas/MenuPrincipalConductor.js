import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import CartaComponente from '../Componentes/CartaComponente';
import HeaderComponente from '../Componentes/HeaderComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

/**
 * 
 */


export default class MenuPrincipalConductor extends Component{
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
                    
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('CrearViaje')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Viajes" descripcion = "Crear, ver, modificar o eliminar viajes"></CartaComponente>
                            </TouchableOpacity>


                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Viajes frecuentes" descripcion = "Crea un viaje predeterminado o uno nuevo a partir de uno previamente creado"></CartaComponente>
                            </TouchableOpacity>
                        </View>
                        <View style = {{flex: 1, flexDirection: "row", justifyContent: "space-around"}}>
                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('Vehiculos')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png" titulo = "Vehículos" descripcion = "Crea, modifica o elimina un vehículo"></CartaComponente>
                            </TouchableOpacity>    


                            <TouchableOpacity style = {{flex:1}} onPress = {()=>  {this._cambiarPantalla('')}}>
                                <CartaComponente imagen = "../Imagenes/landscape_1.png"  titulo = "Viajes históricos" descripcion = "Consulta todos los viajes que has realizado siendo conductor"></CartaComponente>
                            </TouchableOpacity> 
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
