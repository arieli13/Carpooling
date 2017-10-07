import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';

import MapaComponente from '../Componentes/MapaComponente';


/////////

export default class Mapa extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);

        this.state = {
            reuniones :[{latitud: 10.129449914257651, longitud: -84.12949372082949},
                {latitud: 10.217632914832444, longitud: -84.2198670655489}],
            puntoDestino: {latitud: 10.018449614257637, longitud: -84.12949372082949},
            puntoInicio: {latitud: 10.106632914832444, longitud: -84.2198670655489}
        }
        /*this.state.reuniones = [];
        this.state.puntoDestino = null;
        this.state.puntoInicio = null;*/
    }

    _actualizarDestino(reuniones, puntoDestino, puntoInicio){
        //PuntoDestino e inicio: {latitud: null, longitud:null, pinColor: COLORES.AZUL}
        //reuniones = []
        this.setState({reuniones:reuniones, puntoDestino:puntoDestino, puntoInicio:puntoInicio});
    }
      
      

      render() {
        return (
            <MapaComponente color_destino = {COLORES.AZUL} color_inicio = {COLORES.VERDE} color_reunion = {COLORES.ROJO} informativo = {true} reuniones = {this.state.reuniones} puntoDestino = { this.state.puntoDestino } puntoInicio = { this.state.puntoInicio } />
        );
      } 
}