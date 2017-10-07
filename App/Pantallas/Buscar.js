import React, { Component } from 'react';
import {View, ScrollView, Text, TextInput, Alert, TouchableOpacity, Switch } from 'react-native';
import { StackNavigator } from 'react-navigation';
import PTRView from 'react-native-pull-to-refresh';//https://www.npmjs.com/package/react-native-pull-to-refresh

import HeaderComponente from '../Componentes/HeaderComponente';
import CartaPequenniaComponente from '../Componentes/CartaPequenniaComponente';
import BotonComponente from '../Componentes/BotonComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Buscar extends Component{
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
            this.state.buscar = true;
            this.state.mostrarOpciones = null;
            this.state.mostrarResultados = 'none';
        }

      _verViaje(viaje){
        Alert.alert("Viaje", "Ver viaje "+String(viaje));
        
      }

      _buscar(){
        Alert.alert("Buscar", this.state.text);
    }

      _refresh() {
        this.setState({viajes:<Text key = {0} style = {{flex:1, alignSelf: "center", fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL, fontWeight: "bold", color: COLORES.AZUL}}>No ha realizado ningún viaje como pasajero</Text>});
      }

      _cambiarBusqueda(){
        this.setState((prevState, props) => {
            return { buscar: !prevState.buscar }
          });
      }

      _esconderDatosBusqueda(){
        if(this.state.mostrarOpciones == null){
            this.setState({mostrarOpciones:'none', mostrarResultados:null});
            
        }else{
            this.setState({mostrarOpciones:null, mostrarResultados: 'none'});
        }
      }

    render(){
        return(
            <View  style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Buscar"></HeaderComponente>
                <View style = {{flex: 1, maxHeight:30, marginTop:10}}>
                    <BotonComponente width = {20} height = {10} onPress = {()=>{this._esconderDatosBusqueda()}} filled = {require('../Imagenes/abajo.png')} unfilled = {require('../Imagenes/arriba.png')} activo = {true} ></BotonComponente>
                </View>



                <View style = {{flex:1, marginLeft:30, marginRight:30, display:this.state.mostrarOpciones}}>

                    <View style = {{flex:1, flexDirection:"row"}}>
                            <View style = {{flex:5}}>
                                <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} style = {{ borderColor : COLORES.AZUL}} placeholder = "Usuario" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                            </View>
                            <View style = {{flex:1, maxHeight:40}}>
                                <BotonComponente width = {40} height = {50} onPress = {()=>{this._buscar()}} filled = {require('../Imagenes/buscar.png')} unfilled = {require('../Imagenes/buscar.png')} activo = {true} ></BotonComponente>
                            </View>
                    </View>
                    <View style = {{flex:1, flexDirection:"row"}}>
                        <TextInput style = {{flex:1, borderColor : COLORES.AZUL}} placeholder = "Punto inicio" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                        <TextInput style = {{flex:1,  borderColor : COLORES.AZUL}} placeholder = "Punto destino" selectionColor = {COLORES.AZUL} placeholderTextColor = {COLORES.AZUL} underlineColorAndroid = {COLORES.AZUL} ></TextInput>
                    </View>
                    <View style = {{flex:1, flexDirection: "row"}}>
                        <Text>Usuario</Text>
                        <Switch onValueChange={() => {this._cambiarBusqueda()}} value = {this.state.buscar}></Switch>
                        <Text>Viaje</Text>
                    </View>

                </View>



                <View style = {{flex:1, marginLeft:30, marginRight:30, display:this.state.mostrarResultados}}>

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