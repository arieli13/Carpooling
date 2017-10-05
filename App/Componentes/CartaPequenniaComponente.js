import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

export default class CartaPequenniaComponente extends Component{
    render(){
        var imagenes = {
            'Persona':require('../Imagenes/user.jpg'),
            'Mapa': require('../Imagenes/map.png')
        }
        let button = null;
        if(this.props.mostrarBoton){
            button = <View style = {{flex:1, flexDirection: "row"}}>
                        <View style = {{flex: 5, alignItems: "center", justifyContent: "center"}}>
                            <Text>{this.props.detalle}</Text>
                        </View>
                        <View style = {{flex:1, alignItems: "center", justifyContent: "center"}}>
                            <Button onPress = { () => {}} color = {this.props.color} title = "X" style = {{flex: 1}}></Button>
                        </View>
                    </View>;
        }else{
            button = <View style = {{flex:1, flexDirection: "row"}}>
                        <View style = {{flex: 1, alignItems: "center", justifyContent: "center"}}>
                            <Text>{this.props.detalle}</Text>
                        </View>
                    </View>;
        }
        var imagen = imagenes[this.props.imagen];
        return(
            <View style = {{flex:1, backgroundColor: "white", marginBottom: 10, borderRadius: 10}}>
                <View style = {{flex:1, flexDirection: "row"}}>
                    <View style = {{flex:1, height: 70, borderRadius: 70/2, overflow: "hidden", alignItems: "center", position: "relative", backgroundColor: "white", margin: 10}}>
                        <Image style = {{height: 70, borderRadius: 70/2, flex:1, resizeMode: "contain"}} source={imagen}></Image>
                    </View>
                    <View style = {{flex:3, justifyContent: "space-around", justifyContent: "center", alignContent: "center"}}>
                        <View style = {{flex:1, alignItems: "center",  justifyContent: "center", borderBottomColor: 'black', borderBottomWidth: 1}}>
                            <Text style = {{color: COLORES.AZUL, fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold"}}>{this.props.titulo}</Text>
                        </View>
                        {button}
                    </View>
                </View>
            </View>
        );
    }
}