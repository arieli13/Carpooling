import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

/*
 <TouchableOpacity style = {{flexDirection: "column", backgroundColor: COLORES.GRIS_CLARO}}>
                            
                            <View style = {{flex:1, flexDirection: "row"}}>

                                <View style = {{flex: 1, alignItems: 'center'}}>
                                    <Image style = {estilos.imagen}  source={require('../Imagenes/driver.jpg')} />
                                </View>
                                <View style={{ flex:1, borderBottomColor: 'black', borderBottomWidth: 1, justifyContent: "center" }}>
                                    <Text>Título</Text>
                                </View>

                            </View>

                            <View style = {{flex:3, flexDirection: "row", alignItems: "center"}}>
                                <Text>Esto es un texto cualquierajksdfnisdnfkjdsnfkjsdnfkjdsnkfnsdkfnksdnfksdjnfjksn</Text>    
                            </View>
                        </TouchableOpacity>
*/
export default class CartaComponente extends Component{
    render(){
        return( 
            <TouchableOpacity style = {{flex: 1, backgroundColor: COLORES.GRIS_CLARO, alignContent: "space-around", marginBottom: 10, marginLeft:10, marginRight: 10, marginTop: 10}}>
                <View style = {{flex:1,  alignItems: "center", justifyContent: "space-around", borderBottomColor: 'black', borderBottomWidth: 1 ,  marginBottom: 10, marginLeft:10, marginRight: 10, marginTop: 10}}>
                    <Text style={{flex: 1,fontSize:24, fontWeight: "bold"}}>{this.props.titulo}</Text>
                </View>
                
                <View style = {{flex:3, alignItems: "center", justifyContent: "space-around"}}>
                    <Text style={{flex: 1, fontSize:16,  marginBottom: 10, marginLeft:10, marginRight: 10, marginTop: 10}}>{this.props.descripcion}</Text>
                </View>
            </TouchableOpacity>
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
        alignContent: "center",
        backgroundColor: COLORES.GRIS_CLARO
    },


    text:{
        color:COLORES.NARANJA,
        fontFamily: TIPOGRAFIAS.TEXTO_NORMAL,
        fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL
    }

});

/*

*/