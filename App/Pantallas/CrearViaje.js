import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text, TextInput, TouchableHighlight, Picker, Modal,ScrollView} from 'react-native';

import MapaComponente from '../Componentes/MapaComponente';
import HeaderComponente from '../Componentes/HeaderComponente';

import DatePicker from 'react-native-datepicker'


ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;
/////////

export default class CrearViaje extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);

        this.state = {
            reuniones :[{latitud: 10.129449914257651, longitud: -84.12949372082949, descripcion : "lasknd"},
                {latitud: 10.217632914832444, longitud: -84.2198670655489, descripcion : "lasknd"}],
            puntoDestino: {latitud: 10.018449614257637, longitud: -84.12949372082949, descripcion : "lasknd"},
            puntoInicio: {latitud: 10.106632914832444, longitud: -84.2198670655489, descripcion : "lasknd"},

            pantalla: [null, 'none'], //Indica cual pantalla se visualiza. Datos o mapa
            footer:{fontColor:[COLORES.BACKGROUND, COLORES.NEGRO],  fontWeight: ['bold', 'normal'], color:[COLORES.AZUL, COLORES.BACKGROUND]},
        
            fecha:"",
            camposDisponibles:0,
            precio: "0"
        }
        /*this.state.reuniones = [];
        this.state.puntoDestino = null;
        this.state.puntoInicio = null;*/

        this._mapaTerminado = this._mapaTerminado.bind(this);
    }

    async _mapaTerminado( puntoDestinoAux, puntoInicioAux, reunionesAux){
        await this.setState({puntoDestino: puntoDestinoAux, puntoInicio: puntoInicioAux, reuniones:reunionesAux});
    }
      
    async _cambiarPantalla(pantalla){
        var pantallaAux = ['none', 'none'];
        pantallaAux[pantalla] = null;
        
        var footerAux = {fontColor:[COLORES.NEGRO, COLORES.NEGRO],  fontWeight: ['normal', 'normal'], color:[COLORES.BACKGROUND, COLORES.BACKGROUND]};
        footerAux.fontColor[pantalla] = COLORES.BACKGROUND;
        footerAux.fontWeight[pantalla] = 'bold';
        footerAux.color[pantalla] =  COLORES.AZUL;
        await this.setState( { pantalla: pantallaAux, footer:footerAux} );
    }

    async _crearViaje(){
        if(this.state.puntoDestino == null || this.state.puntoInicio == null){
            Alert.alert("Error", "Verifique que haya marcado un punto de inicio y otro de destino.");
        }else{
            var precio = this.state.precio;
            if(precio = parseFloat(precio)){

                if(precio<0){
                    Alert.alert("Error", "El precio no puede ser menor a 0");
                }else{
                    if(this.state.fecha == ""){
                        Alert.alert("Error", "Ingrese una fecha/hora válida");
                    }else{
                        Alert.alert("Nuevo viaje", "");
                    }
                }
            }else{
                Alert.alert("Error", "Ingrese un precio válido");
            }
        }
    }

      render() {
        return (
            <View style = {{flex:1, backgroundColor:COLORES.BACKGROUND}}>

                <HeaderComponente nombre = "Crear viaje"></HeaderComponente>

                <View style = {{flex:12}}>

                    <View style = {{flex:1, display: this.state.pantalla[0], marginLeft:16, marginTop:10}}>
                        <View style = {{flex:1, flexDirection: "row", borderBottomWidth:3,  borderBottomColor:COLORES.GRIS_MEDIO}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Fecha y hora:</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={this.state.fecha}
                                        is24Hour = {true}
                                        mode="datetime"
                                        placeholder="Seleccione fecha"
                                        format="DD-MM-YYYY, h:mm:ss"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                        // ... You can check the source to find the other keys. 
                                        }}
                                        onDateChange={(date) => {this.setState({fecha: date})}}
                                    />
                                </View>
                        </View>
                        
                        <View style = {{flex:1, flexDirection: "row", borderBottomWidth:3,  borderBottomColor:COLORES.GRIS_MEDIO}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Campos disponibles:</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <Picker
                                        style = {{maxWidth:50}}
                                        itemStyle = {{maxWidth:50}}
                                        selectedValue={this.state.camposDisponibles}
                                        onValueChange={(itemValue, itemIndex) => this.setState({camposDisponibles: itemValue})}>
                                        <Picker.Item label="1" value= {1} />
                                        <Picker.Item label="2" value= {2} />
                                        <Picker.Item label="3" value= {3} />
                                        <Picker.Item label="4" value= {4} />
                                        <Picker.Item label="5" value= {5} />
                                        <Picker.Item label="6" value= {6} />
                                        <Picker.Item label="7" value= {7} />
                                        <Picker.Item label="8" value= {8} />
                                        <Picker.Item label="9" value= {9} />
                                    </Picker>
                                </View>
                        </View>
                        <View style = {{flex:1, flexDirection: "row"}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Precio:</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <TextInput value = {this.state.precio} onChangeText = {(texto)=>{this.setState({precio:texto})}} keyboardType = 'numeric' style = {[estilo.texto,{maxWidth:100}]}></TextInput>
                                </View>
                        </View>
                    </View>

                    <View style = {{flex:1, display: this.state.pantalla[1]}}>
                        <MapaComponente onFinish = {this._mapaTerminado} color_destino = {COLORES.AZUL} color_inicio = {COLORES.VERDE} color_reunion = {COLORES.ROJO} informativo = {false} reuniones = {this.state.reuniones} puntoDestino = { this.state.puntoDestino } puntoInicio = { this.state.puntoInicio } />
                    </View>
                
                </View>


                <View style = {estilo.footer}>

                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(0)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[0]}]}>
                        <Text style = {[estilo.texto,{color:this.state.footer.fontColor[0], fontWeight: this.state.footer.fontWeight[0]}]}>Datos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(1)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[1]}]}>
                        <Text style = {[estilo.texto,{color:this.state.footer.fontColor[1], fontWeight: this.state.footer.fontWeight[1]}]}>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._crearViaje();}} style = {estilo.footerBoton}>
                        <Text style = {[estilo.texto,{color:COLORES.NEGRO}]}>Crear</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
      } 
}

const estilo = StyleSheet.create({
    footer:{
        flex:1, 
        flexDirection: "row",
        borderTopWidth:3,
        borderTopColor: COLORES.GRIS_MEDIO
    },
    footerBoton:{
        flex:1, 
        justifyContent: "center",
        alignItems: "center"
    },

    texto:{
        fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL,
        color: COLORES.TEXTO,
        fontFamily: TIPOGRAFIAS.TEXTO_NORMAL
    },
    titulo:{
        fontWeight: "bold",
        color:COLORES.TITULO
    }
});