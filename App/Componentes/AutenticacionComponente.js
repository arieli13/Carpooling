import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, ActivityIndicator} from 'react-native';
import { TextField } from 'react-native-material-textfield'; //https://www.npmjs.com/package/react-native-material-textfield
ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

import RestAPI from '../Clases/RestAPI.js';
import Usuario from '../Clases/Usuario.js';

export default class AutenticacionComponente extends Component{
    constructor(props){
        super(props);
        this.state = {
            usuario: "",
            contrasennia: "",
            error:"",
            conectando:false
        }
    }

    async _Ingresar(){
        try{
            /*let usuario = this.state.usuario;
            let contrasennia = this.state.contrasennia;
            this.setState({conectando:true});
            
            var respuesta = await RestAPI.autenticacion("2014053647", contrasennia);

            var datos = respuesta.perfil;
            Usuario.iniciarSesion(datos.id, datos.tipo, datos.nombre_usuario, datos.nombre, datos.apellido, datos.telefono, datos.correo, datos.area);
            this.setState({conectando:false});*/
            const { navigate } = this.props.navigation;
            navigate('EscogerUsuario');
           
        }catch(e){
            if(e.error){
                this.setState({error: e.error});
            }else{
                Alert.alert("Ha ocurrido un error inesperado", JSON.stringify(e, null, 2));
            }
            //this.setState({error: e, conectando:false});
            this.setState({conectando:false});
        }
    }

    render(){
        /*if(Usuario.inicioSesion){
            this.props.navigation.navigate('EscogerUsuario');
        }*/

        if(this.state.conectando){
            return(
                <View style = {estilos.login}>
                <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                    label='Usuario'
                    onChangeText={ (text) => this.setState({usuario:text})}
                />
                <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                    label='Contraseña'
                    onChangeText={ (text) => this.setState({contrasennia:text})}
                    secureTextEntry = {true}
                />
                <View>
                    <ActivityIndicator style = {{marginTop:20, marginBottom:20}}/>
                </View>
                <Button color = {COLORES.AZUL} onPress = {this._Ingresar.bind(this)} title = "Ingresar"></Button>
        </View>
            );
        }
        return(
            <View style = {estilos.login}>
                    <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                        label='Usuario'
                        onChangeText={ (text) => this.setState({usuario:text})}
                    />
                    <TextField fontSize = {TIPOGRAFIAS.TAMANNIO_NORMAL} tintColor = {COLORES.AZUL} baseColor = {COLORES.GRIS_MEDIO}
                        label='Contraseña'
                        onChangeText={ (text) => this.setState({contrasennia:text})}
                        secureTextEntry = {true}
                    />
                    <View>
                        <Text style = {estilos.error}>
                            {this.state.error}
                        </Text>
                    </View>
                    <Button color = {COLORES.AZUL} onPress = {this._Ingresar.bind(this)} title = "Ingresar"></Button>
            </View>
        );
    }
}

const estilos = StyleSheet.create({
    login:{
        flex:0.8,
        flexDirection:'column',
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40
    },
    error:{
        marginTop:20,
        marginBottom: 20,
        color: COLORES.ROJO,
        fontFamily: TIPOGRAFIAS.TEXTO_NORMAL,
        fontSize: TIPOGRAFIAS.TAMANNIO_NORMAL
    }
});

