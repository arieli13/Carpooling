import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Icon, View, StyleSheet, Image, Alert, Text} from 'react-native';
import MapView from 'react-native-maps';
ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;
//https://github.com/airbnb/react-native-maps/blob/HEAD/docs/mapview.md


/////////

export default class MapaComponente extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);
         
        this.state = {

            reuniones:this.props.reuniones,
            puntoDestino: this.props.puntoDestino,
            puntoInicio: this.props.puntoInicio,

            puntoInicioComponente: [],
            puntoDestinoComponente: [],
            reunionesComponentes:[],

            key:0
        }
        if(!this.props.informativo){
            if(this.state.puntoDestino!=null){
                this.state.puntoDestinoComponente = <MapView.Marker 
                                                        key = {this.state.key}
                                                        coordinate={ 
                                                            {
                                                                latitude: this.state.puntoDestino.latitud,
                                                                longitude: this.state.puntoDestino.longitud
                                                            }
                                                        }
                                                        pinColor = {this.props.color_destino}
                                                        draggable
                                                        onDragEnd = {(evento)=>{this._modificarDestino(evento)}}
                                                        title = "Punto de destino"
                                                        description = "Aquí es donde se termina el viaje"
                                                    >
                                                    </MapView.Marker>;
                this.state.key = this.state.key+1;
            }
            if(this.state.puntoInicio!=null){
                this.state.puntoInicioComponente = <MapView.Marker 
                                                        key = {this.state.key}
                                                        coordinate={ 
                                                            {
                                                                latitude: this.state.puntoInicio.latitud,
                                                                longitude: this.state.puntoInicio.longitud
                                                            }
                                                        }
                                                        pinColor = {this.props.color_inicio}
                                                        draggable
                                                        onDragEnd = {(evento)=>{this._modificarInicio(evento)}}
                                                        title = "Punto de inicio"
                                                        description = "Aquí es donde inicia el viaje"
                                                    >
                                                    </MapView.Marker>;
                this.state.key = this.state.key+1;

            }
            if(this.state.reuniones!=null){
                for(var i = 0; i<this.state.reuniones.length;i++){
                    this.state.reuniones[i].key = this.state.key;
                    this.state.key = this.state.key+1;
                }
                this.state.reunionesComponentes = this.state.reuniones.map((dato, index)=>{
                    return  <MapView.Marker 
                                key = {dato.key}
                                coordinate={ 
                                    {
                                        latitude: dato.latitud,
                                        longitude: dato.longitud
                                    }
                                }
                                pinColor = {this.props.color_reunion}
                                draggable
                                onDragEnd = {(evento)=>{this._modificarReunion(evento, dato.key)}}
                                onPress = { () => {this._eliminarReunion(dato.key)} }
                            >
                            </MapView.Marker>;
                });
            }
        }else{
            if(this.state.puntoDestino!=null){
                this.state.puntoDestinoComponente = <MapView.Marker 
                                                        key = {this.state.key}
                                                        coordinate={ 
                                                            {
                                                                latitude: this.state.puntoDestino.latitud,
                                                                longitude: this.state.puntoDestino.longitud
                                                            }
                                                        }
                                                        pinColor = {this.props.color_destino}
                                                        title = "Punto de destino"
                                                        description = "Aquí es donde se termina el viaje"
                                                    >
                                                    </MapView.Marker>;
                this.state.key = this.state.key+1;
            }
            if(this.state.puntoInicio!=null){
                this.state.puntoInicioComponente = <MapView.Marker 
                                                        key = {this.state.key}
                                                        coordinate={ 
                                                            {
                                                                latitude: this.state.puntoInicio.latitud,
                                                                longitude: this.state.puntoInicio.longitud
                                                            }
                                                        }
                                                        pinColor = {this.props.color_inicio}
                                                       title = "Punto de inicio"
                                                        description = "Aquí es donde inicia el viaje"
                                                    >
                                                    </MapView.Marker>;
                this.state.key = this.state.key+1;

            }
            if(this.state.reuniones!=[]){
                for(var i = 0; i<this.state.reuniones.length;i++){
                    this.state.reuniones[i].key = this.state.key;
                    this.state.key = this.state.key+1;
                }
                this.state.reunionesComponentes = this.state.reuniones.map((dato, index)=>{
                    return  <MapView.Marker 
                                key = {dato.key}
                                coordinate={ 
                                    {
                                        latitude: dato.latitud,
                                        longitude: dato.longitud
                                    }
                                }
                                pinColor = {this.props.color_reunion}
                            >
                            </MapView.Marker>;
                });
            }
        }
    }

    _annadirDestino(puntoDestinoAux){
        puntoDestinoAux.pinColor = COLORES.AZUL;
        var keyAux = this.state.key;

        this.setState((prevState, props) => {
            return { key: prevState.key+1 }
          });
        this.setState({puntoDestino: puntoDestinoAux });
        this.setState({ puntoDestinoComponente: 
            <MapView.Marker 
                key = {keyAux}
                coordinate={ 
                    {
                        latitude: puntoDestinoAux.latitud,
                        longitude: puntoDestinoAux.longitud
                    }
                }
                pinColor = {puntoDestinoAux.pinColor}
                draggable
                onDragEnd = {(evento)=>{this._modificarDestino(evento)}}
                title = "Punto destino"
                description = "Aquí es donde se termina el viaje"
            >
            </MapView.Marker>
        });

    }
    _annadirInicio(puntoInicioAux){
        var keyAux = this.state.key;

        this.setState((prevState, props) => {
            return { key: prevState.key+1 }
          });
        this.setState({puntoInicio: puntoInicioAux });
        this.setState({ puntoInicioComponente: 
            <MapView.Marker 
                key = {keyAux}
                coordinate={ 
                    {
                        latitude: puntoInicioAux.latitud,
                        longitude: puntoInicioAux.longitud
                    }
                }
                pinColor = {this.props.color_inicio}
                draggable
                onDragEnd = {(evento)=>{this._modificarInicio(evento)}}
                title = "Punto de inicio"
                description = "Aquí es donde inicia el viaje"
            >
            </MapView.Marker>
        });
    }
    _annadirPunto(evento){
            var coordenada = {
                latitud:evento.nativeEvent.coordinate.latitude,
                longitud: evento.nativeEvent.coordinate.longitude
            }

            var punto = { latitud: coordenada.latitud, longitud:coordenada.longitud};

            Alert.alert(
                'Añadir punto',
                '¿Qué punto desea crear/modificar?',
                [
                  {text: 'Destino', onPress: () => {this._annadirDestino(punto)}},
                  {text: 'Inicial', onPress: () => {this._annadirInicio(punto)}}
                ]
              );
    }
    _annadirReunion(evento){
        var coordenada = {
            latitud:evento.nativeEvent.coordinate.latitude,
            longitud: evento.nativeEvent.coordinate.longitude
        }
         var aux = { latitud: coordenada.latitud, longitud:coordenada.longitud, key:this.state.key};
         this.setState((prevState, props) => {
            return { key: prevState.key+1 }
          });
         var reunionesAux = [];
         for(var i = 0; i<this.state.reuniones.length;i++){
            reunionesAux.push( this.state.reuniones[i] )
        }
        reunionesAux.push(aux);
        this.setState({ reuniones: reunionesAux });
        
        this.setState({reunionesComponentes: reunionesAux.map((dato, index)=>{
            return  <MapView.Marker 
                        key = {dato.key}
                        coordinate={ 
                            {
                                latitude: dato.latitud,
                                longitude: dato.longitud
                            }
                        }
                        pinColor = {this.props.color_reunion}
                        draggable
                        onDragEnd = {(evento)=>{this._modificarReunion(evento, dato.key)}}
                        onPress = { () => {this._eliminarReunion(dato.key)} }
                    >
                    </MapView.Marker>;
        })});
        
    }

    _modificarDestino(evento){
        var coordenada = {
            latitud:evento.nativeEvent.coordinate.latitude,
            longitud: evento.nativeEvent.coordinate.longitude
        }
        var aux = {latitud: coordenada.latitud, longitud: coordenada.longitud};
        this.setState({puntoDestino:aux});
    }

    _modificarInicio(evento){
        var coordenada = {
            latitud:evento.nativeEvent.coordinate.latitude,
            longitud: evento.nativeEvent.coordinate.longitude
        }
        var aux = {latitud: coordenada.latitud, longitud: coordenada.longitud};
        this.setState({puntoInicio:aux});
    }

    _modificarReunion(evento, key){
        var coordenada = {
            latitud:evento.nativeEvent.coordinate.latitude,
            longitud: evento.nativeEvent.coordinate.longitude
        }
        var reuniones = this.state.reuniones;
        for(var i = 0; i<reuniones.length;i++){
            if(reuniones[i].key == key){
                reuniones[i].latitud = coordenada.latitud;
                reuniones[i].longitud = coordenada.longitud;
                break;
            }
        }
        this.setState({reuniones:reuniones});
    }

    _eliminarReunionAux(key){
        var reunionesAux = [];
        for(var i = 0; i<this.state.reuniones.length;i++){
            if(this.state.reuniones[i].key != key ){
                reunionesAux.push( this.state.reuniones[i] );
            }
       }
       this.setState({ reuniones: reunionesAux });
       
       this.setState({reunionesComponentes: reunionesAux.map((dato, index)=>{
           return  <MapView.Marker 
                       key = {dato.key}
                       coordinate={ 
                           {
                               latitude: dato.latitud,
                               longitude: dato.longitud
                           }
                       }
                       pinColor = {this.props.color_reunion}
                       draggable
                       onDragEnd = {(evento)=>{this._modificarReunion(evento, dato.key)}}
                       onPress = { () => {this._eliminarReunion(dato.key)} }
                   >
                   </MapView.Marker>;
       })});
    }
    _eliminarReunion(key){
        Alert.alert(
            'Eliminar reunión',
            '¿Desea eliminar el punto de reunión?',
            [
              {text: 'Eliminar', onPress: () => {this._eliminarReunionAux(key)}},
              {text: 'Cancelar', onPress: () => {}}
            ]
          );
    }
      
      

      render() {
        var mapa;
        if(this.props.informativo){
            mapa = <MapView style = {{flex:1}} 
                        showsUserLocation={true}
                        followUserLocation={true}
                    >

                    {this.state.puntoInicioComponente}
                    {this.state.puntoDestinoComponente}
                    {this.state.reunionesComponentes}

                    </MapView>
        }else{
            mapa = 
            <View style = {{flex:1}}>
            <MapView style = {{flex:1}} onPress = {(evento)=>{this._annadirReunion(evento)}} onLongPress = {(evento)=>{this._annadirPunto(evento)}}
                        
                        showsUserLocation={true}
                        followUserLocation={true}
                    >

                    {this.state.puntoInicioComponente}
                    {this.state.puntoDestinoComponente}
                    {this.state.reunionesComponentes}


                    </MapView>
                </View>
        }
        
        return (
            mapa
        );
      } 
}