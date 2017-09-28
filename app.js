import React, { Component } from 'react';
import { AppRegistry} from 'react-native';

import Autenticacion from './App/Pantallas/Autenticacion';



export default class X extends Component{
    render(){
        return(
            <Autenticacion/>
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('ride', () => X);