import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, Alert, ActivityIndicator} from 'react-native';
import { TextField } from 'react-native-material-textfield'; //https://www.npmjs.com/package/react-native-material-textfield
ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;
TIPOGRAFIAS = ESTANDARES.TIPOGRAFIAS;

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

    _Ingresar(){
        try{
            /*let usuario = this.state.usuario;
            let contrasennia = this.state.contrasennia;
            this.setState({conectando:true});*/
            const { navigate } = this.props.navigation;
            navigate('M');
            /*fetch('http://172.18.197.171:8080/api/login',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  nombre_usuario: usuario,
                  pass: contrasennia,
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson['error']){
                    this.setState({error:responseJson['descripcion'], conectando:false});
                }else{
                    Alert.alert("datos", JSON.stringify(responseJson, null, 2));
                    this.setState({conectando:false});
                }
            })
            .catch((response) => response.json())
            .catch((error) => {
              Alert.alert("Error", JSON.stringify(error, null, 2));
              this.setState({conectando:false});
            });*/
        }catch(e){
            Alert.alert("Error", JSON.stringify(e, null, 2));
            //this.setState({conectando:false});
        }
    }

    render(){
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

