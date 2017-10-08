import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text, TextInput, TouchableHighlight, Picker, Modal,ScrollView} from 'react-native';

import MapaComponente from '../Componentes/MapaComponente';
import HeaderComponente from '../Componentes/HeaderComponente';

import DatePicker from 'react-native-datepicker'


ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;
/////////

export default class Mapa extends Component{
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

            pantalla: [null, 'none', 'none'],
            footer:{fontColor:[COLORES.BACKGROUND, COLORES.NEGRO, COLORES.NEGRO, COLORES.NEGRO],  fontWeight: ['bold', 'normal', 'normal', 'normal'], color:[COLORES.AZUL, COLORES.BACKGROUND, COLORES.BACKGROUND, COLORES.BACKGROUND]}
        }
        this.state.reuniones = [];
        this.state.puntoDestino = null;
        //this.state.puntoInicio = null;
        this._mapaTerminado = this._mapaTerminado.bind(this);
    }

    async _mapaTerminado( puntoDestinoAux, puntoInicioAux, reunionesAux){
        await this.setState({puntoDestino: puntoDestinoAux, puntoInicio: puntoInicioAux, reuniones:reunionesAux});
    }
      
    async _cambiarPantalla(pantalla){
        var pantallaAux = ['none', 'none', 'none'];
        pantallaAux[pantalla] = null;
        
        var footerAux = {fontColor:[COLORES.NEGRO, COLORES.NEGRO, COLORES.NEGRO, COLORES.NEGRO],  fontWeight: ['normal', 'normal', 'normal', 'normal'], color:[COLORES.BACKGROUND, COLORES.BACKGROUND, COLORES.BACKGROUND, COLORES.BACKGROUND]};
        footerAux.fontColor[pantalla] = COLORES.BACKGROUND;
        footerAux.fontWeight[pantalla] = 'bold';
        footerAux.color[pantalla] =  COLORES.AZUL;
        await this.setState( { pantalla: pantallaAux, footer:footerAux} );
    }

      render() {
        return (
            <View style = {{flex:1, backgroundColor:COLORES.BACKGROUND}}>

                <HeaderComponente nombre = "Crear viaje"></HeaderComponente>

                <View style = {{flex:12}}>

                    <View style = {{flex:1, display: this.state.pantalla[0], marginLeft:16, marginTop:10}}>
                        <View style = {{flex:1, flexDirection: "row"}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Fecha y hora</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <DatePicker
                                        style={{width: 200}}
                                        date={this.state.date}
                                        is24Hour = {true}
                                        mode="datetime"
                                        placeholder="select date"
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
                                        onDateChange={(date) => {this.setState({date: date})}}
                                    />
                                </View>
                        </View>
                        
                        <View style = {{flex:1, flexDirection: "row"}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Campos disponibles</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <Picker
                                        style = {{maxWidth:50}}
                                        itemStyle = {{maxWidth:50}}
                                        selectedValue={this.state.language}
                                        onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                                        <Picker.Item label="1" value="1" />
                                        <Picker.Item label="2" value="2" />
                                        <Picker.Item label="3" value="3" />
                                        <Picker.Item label="4" value="4" />
                                        <Picker.Item label="5" value="5" />
                                        <Picker.Item label="6" value="6" />
                                        <Picker.Item label="7" value="7" />
                                        <Picker.Item label="8" value="8" />
                                        <Picker.Item label="9" value="9" />
                                    </Picker>
                                </View>
                        </View>
                        <View style = {{flex:1, flexDirection: "row"}}>
                                <View style = {{flex:1, justifyContent:"center"}}>
                                    <Text style = {[estilo.texto, estilo.titulo]}>Precio</Text>
                                </View>
                                <View style = {{flex:2, justifyContent:"center"}}>
                                    <TextInput keyboardType = 'numeric' style = {[estilo.texto,{maxWidth:100}]}></TextInput>
                                </View>
                        </View>
                    </View>

                    <View style = {{flex:1, display: this.state.pantalla[1]}}>
                        <MapaComponente onFinish = {this._mapaTerminado} color_destino = {COLORES.AZUL} color_inicio = {COLORES.VERDE} color_reunion = {COLORES.ROJO} informativo = {false} reuniones = {this.state.reuniones} puntoDestino = { this.state.puntoDestino } puntoInicio = { this.state.puntoInicio } />
                    </View>

                    <View style = {{flex:1, display: this.state.pantalla[2]}}>
                        <View style = {{flex:1, flexDirection: "row", alignItems: "center"}}>
                            <View style = {{flex:1}}>
                                <Text >Punto destino: </Text>
                            </View>
                            <View style = {{flex:2}}>
                                <TextInput onChangeText={async (texto) => {var puntoaux = this.state.puntoDestino; puntoaux.descripcion = texto; await this.setState({puntoDestino:puntoaux})   }} editable = {this.state.puntoDestino!=null} value = {this.state.puntoDestino == null ? "":this.state.puntoDestino.descripcion}></TextInput>
                            </View>
                        </View>
                        <View style = {{flex:1, flexDirection: "row", alignItems: "center"}}>
                            <View style = {{flex:1}}>
                                <Text >Punto inicio: </Text>
                            </View>
                            <View style = {{flex:2}}>
                                <TextInput onChangeText={async (texto) => {var puntoaux = this.state.puntoInicio; puntoaux.descripcion = texto; await this.setState({puntoInicio:puntoaux})   }} editable = {this.state.puntoInicio!=null} value = {this.state.puntoInicio == null ? "":this.state.puntoInicio.descripcion}></TextInput>
                            </View>
                        </View>
                        <View style = {{flex:5, flexDirection: "row"}}>
                            <View style = {{flex:1}}>
                                <Text >Punto reunión: </Text>
                            </View>
                            <View style = {{flex:2}}>
                                <ScrollView style = {{flex:1}}>
                                    {this.state.reuniones.map(function(dato, index){
                                            return <TextInput key = {index} editable = {true} value = {dato.descripcion}></TextInput>;
                                    })}
                                </ScrollView>
                            </View>
                        </View>

                    </View>
                
                </View>


                <View style = {estilo.footer}>

                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(0)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[0]}]}>
                        <Text style = {[estilo.texto,{color:this.state.footer.fontColor[0], fontWeight: this.state.footer.fontWeight[0]}]}>Datos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(1)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[1]}]}>
                        <Text style = {[estilo.texto,{color:this.state.footer.fontColor[1], fontWeight: this.state.footer.fontWeight[1]}]}>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(2)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[2]}]}>
                        <Text style = {[estilo.texto,{color:this.state.footer.fontColor[2], fontWeight: this.state.footer.fontWeight[2]}]}>Puntos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{}} style = {estilo.footerBoton}>
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