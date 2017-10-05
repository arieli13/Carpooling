import React, { Component } from 'react';
import {View, ScrollView, Image, Text} from 'react-native';


ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

export default class Perfil extends Component{
    static navigationOptions = {
        header: null
      };
    render(){
        return(
            <View View style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <View style = {{flex:1}}>                            
                    <ScrollView showsVerticalScrollIndicator={false} style = {{flex:1}}>

                        <View style = {{flex:1, justifyContent: "center", overflow: "hidden", alignItems: "center", position: "relative", margin: 10}}>
                            <Image  style = {{height: 150, width:150, borderRadius: 150/2, resizeMode: "stretch"}} source={require('../Imagenes/user.jpg')} />
                        </View>

                        <View style = {{flex: 8, backgroundColor: COLORES.BLANCO, borderRadius: 10, marginHorizontal:30, marginVertical:30}}>
                            <View style = {{flex:1, flexDirection: "row", alignContent: "center", justifyContent: "center",  borderBottomColor: COLORES.GRIS_CLARO, borderBottomWidth:1, paddingBottom: 20, marginTop:20}}>
                                <Text style = {{flex:1, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold"}}>Nombre</Text>
                                <Text style = {{flex:3, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL}}>{this.props.nombre}</Text>
                            </View>

                            <View style = {{flex:1, flexDirection: "row", borderBottomColor: COLORES.GRIS_CLARO, borderBottomWidth:1, paddingBottom: 20, marginTop:20}}>
                                <Text style = {{flex:1, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold"}}>Area</Text>
                                <Text style = {{flex:3, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL}}>{this.props.area}</Text>
                            </View>
                            <View style = {{flex:1, flexDirection: "row", borderBottomColor: COLORES.GRIS_CLARO, borderBottomWidth:1, paddingBottom: 20, marginTop:20}}>
                                <Text style = {{flex:1, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold"}}>Teléfono</Text>
                                <Text style = {{flex:3, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL}}>{this.props.telefono}</Text>
                            </View>

                            <View style = {{flex:1, flexDirection: "row", borderBottomColor: COLORES.GRIS_CLARO, borderBottomWidth:1, paddingBottom: 20, marginTop:20}}>
                                <Text style = {{flex:1, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold"}}>Correo</Text>
                                <Text style = {{flex:3, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL}}>{this.props.correo}</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                
            </View>
        );    
    }
}