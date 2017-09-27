import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { TextField } from 'react-native-material-textfield'; //https://www.npmjs.com/package/react-native-material-textfield
COLORES = require('./colores');

class Header extends Component{
    render(){
        return(
            <View style = {estilos.header}>
                <Text style = {estilos.primary}>Ride </Text>
                <Text style= {estilos.divider} >|</Text>
                <Text style = {estilos.secondary}>{this.props.nombre}</Text>
            </View>
        );
    }
}

class Login extends Component{
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
            let usuario = this.state.usuario;
            let contrasennia = this.state.contrasennia;
            this.setState({conectando:true});
            fetch('http://192.168.4.133:8080/api/login',{
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
            });
        }catch(e){
            Alert.alert("Error", e);
            this.setState({conectando:false});
        }
    }

    render(){
        if(this.state.conectando){
            return(
                <View style = {estilos.login}>
                <TextField tintColor = {COLORES.AZUL}
                    label='Usuario'
                    onChangeText={ (text) => this.setState({usuario:text})}
                />
                <TextField tintColor = {COLORES.AZUL} style = {estilos.textField}
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
                    <TextField tintColor = {COLORES.AZUL}
                        label='Usuario'
                        onChangeText={ (text) => this.setState({usuario:text})}
                    />
                    <TextField tintColor = {COLORES.AZUL} style = {estilos.textField}
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


class Unificador extends Component{
    render(){
        return(
            <View style = {{flex:1}}>
              <Header nombre = "Iniciar Sesión"></Header>
                <Login></Login>
            </View>
        );    
    }
}


export default class Principal extends Component{
    render(){
        return(
            <Unificador/>
        );
    }
}

const estilos = StyleSheet.create({
    header:{
        borderBottomWidth: 3,
        borderBottomColor: COLORES.GRIS_CLARO,
        backgroundColor: COLORES.BACKGROUND,
        marginBottom: 16,
        minHeight: 71,
        marginTop: -16,
        zIndex: 16,
        right: 16,
        left: 16,
        top:16,
        flex:0.01,
        flexDirection:'row'
    },

    primary:{
        marginLeft: 8,
        marginTop: 10,
        fontSize: 30,
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 0,
        marginRight: 0
    },
  
    divider:{
        fontSize: 30,
        marginTop: 13,
        marginBottom: 13,
        marginLeft: 0,
        marginRight: 6
    },
  
    secondary:{
      fontSize: 24,
      marginTop: 18,
      marginBottom: 13,
      marginLeft: 0,
      marginRight: 0,
      color: COLORES.AZUL
    },

    login:{
        flex:0.8,
        flexDirection:'column',
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40
    },
    textField:{
        marginBottom : 100
    },
    error:{
        marginTop:20,
        marginBottom: 20,
        color: COLORES.ROJO
        //fontSize: 10
    }
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('ride', () => Principal);