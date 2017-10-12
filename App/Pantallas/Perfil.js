import React, { Component } from 'react';
import {View, ScrollView, Image, Text, Button, Alert, ActivityIndicator, AsyncStorage} from 'react-native';

import HeaderComponente from '../Componentes/HeaderComponente';
import PerfilComponente from '../Componentes/PerfilComponente';

import BotonComponente from '../Componentes/BotonComponente';
import RestAPI from '../Clases/RestAPI.js';


ESTANDARES = require('../estandares');
COLORES=ESTANDARES.COLORES;

export default class Perfil extends Component{
    static navigationOptions = {
        header: null
      };

      constructor(props){
        super(props);
        this.state={
            ejecutando:false,
            esFavorito : this.props.navigation.state.params.favorito
        }
    }

    async componentWillMount(){
        try {
            var usuario = await AsyncStorage.getItem('@nombre_usuario:key');
            if (usuario == null){
                const { navigate } = this.props.navigation;
                navigate('Home');
            }
            await this.setState({usuario:usuario});
            //await this.setState({ejecutando:false});
        } catch (error) {
           const { navigate } = this.props.navigation;
           navigate('Home');
        }
    }

    async favorito(){
        try{
            this.setState({ejecutando:true});
            if(this.state.esFavorito==true){
                await RestAPI.eliminarFavorito(this.state.usuario, this.props.navigation.state.params.nombre_usuario);
                this.setState({esFavorito:false});
            }else{
                var x = await RestAPI.crearFavorito(this.state.usuario, this.props.navigation.state.params.nombre_usuario);
                this.setState({esFavorito:true});
            }
            this.setState({ejecutando:false});
        }catch(error){
            this.setState({ejecutando:false});
            if(error.error){
                Alert.alert("Error", error.error);
            }else{
                Alert.alert("Atención", "Ha ocurrido un error inesperado");
            }
        }
    }

    async bloquear(){
        try{
           await RestAPI.bloquearUsuario(this.state.usuario, this.props.navigation.state.params.nombre_usuario);
            this.setState({ejecutando:false});
            const {goBack} = this.props.navigation;
            goBack();
        }catch(error){
            this.setState({ejecutando:false});
            if(error.error){
                Alert.alert("Error", error.error);
            }else{
                Alert.alert("Atención", "Ha ocurrido un error inesperado");
            }
        }
    }

    render(){
        return(
            <View View style = {{flex:1, backgroundColor: COLORES.BACKGROUND}}>
                <HeaderComponente nombre = "Perfil"></HeaderComponente>
                <View style = {{flex:8}}>
                
                <PerfilComponente style = {{flex:10}}  rating = {this.props.navigation.state.params.rating} nombre = {(this.props.navigation.state.params.nombre+" "+this.props.navigation.state.params.apellido)} area = {this.props.navigation.state.params.area} telefono = {this.props.navigation.state.params.telefono} correo = {this.props.navigation.state.params.correo}></PerfilComponente>
                </View>

                <View style = {{flex:1, flexDirection: "row"}}>
                    <View style = {{flex:1, alignItems: "flex-start", marginBottom:10, marginLeft:10}}>
                        <BotonComponente onPress = {()=>{this.favorito()}} filled = {require('../Imagenes/heart_filled.png')} unfilled = {require('../Imagenes/heart_unfilled.png')} activo = {this.state.esFavorito} width = {40} height = {0} > </BotonComponente>
                    </View>
                    {this.state.ejecutando == true?<ActivityIndicator style = {{marginTop:20, marginBottom:20}}/>:null}
                    <View style = {{flex:1, alignItems: "flex-end", marginBottom:10}}>
                        <BotonComponente onPress = {()=>{this.bloquear()}} filled = {require('../Imagenes/lock.png')} unfilled = {require('../Imagenes/lock.png')} activo = {false} width = {40} height = {0} > </BotonComponente>
                    </View>
                </View>
            </View>
        );    
    } 
}