import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';

import MapaComponente from '../Componentes/MapaComponente';
import HeaderComponente from '../Componentes/HeaderComponente';

ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
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

                    <View style = {{flex:1, display: this.state.pantalla[0], marginLeft:16}}>
                        <Text>Datos</Text>
                    </View>

                    <View style = {{flex:1, display: this.state.pantalla[1]}}>
                        <MapaComponente onFinish = {this._mapaTerminado} color_destino = {COLORES.AZUL} color_inicio = {COLORES.VERDE} color_reunion = {COLORES.ROJO} informativo = {false} reuniones = {this.state.reuniones} puntoDestino = { this.state.puntoDestino } puntoInicio = { this.state.puntoInicio } />
                    </View>

                    <View style = {{flex:1, display: this.state.pantalla[2]}}>
                        <Text>Lugares</Text>
                    </View>
                
                </View>

                
                <View style = {estilo.footer}>



                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(0)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[0]}]}>
                        <Text style = {{color:this.state.footer.fontColor[0], fontWeight: this.state.footer.fontWeight[0]}}>Datos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(1)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[1]}]}>
                        <Text style = {{color:this.state.footer.fontColor[1], fontWeight: this.state.footer.fontWeight[1]}}>Mapa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{this._cambiarPantalla(2)}} style = {[estilo.footerBoton, {backgroundColor:this.state.footer.color[2]}]}>
                        <Text style = {{color:this.state.footer.fontColor[2], fontWeight: this.state.footer.fontWeight[2]}}>Nombres</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{}} style = {estilo.footerBoton}>
                        <Text style = {{color:COLORES.NEGRO}}>Crear</Text>
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
    }
});