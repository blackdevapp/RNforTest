
import React, {Component} from 'react';

import Apllication from "./Apllication";

import Main from "../Components/Main";
import {Router,Scene} from 'react-native-router-flux'


import Login from '../Components/Login'

import Splash from '../Components/Splash'
import Register from '../Components/Register'



export default class Apps extends Component<Props> {






    render() {
        return (
            <Router>
            <Scene key="root" hideNavBar>
                <Scene key="application" component={Apllication} initial/>
                   <Scene  key="Splash" component={Splash} /> 
                   <Scene  key="Login" component={Login} /> 
                   <Scene  key="Main" component={Main} /> 
                   <Scene  key="Register" component={Register} /> 
                   
            </Scene>
            
            </Router> 
        );
    }
}



