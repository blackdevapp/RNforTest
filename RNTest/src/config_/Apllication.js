

import React, {Component} from 'react';


import Splash from "../Components/Splash";
import Login from "../Components/Login";
import Main from "../Components/Main";

import {AsyncStorage} from "react-native";


export default class Application extends Component {


    constructor(Props){
        super(Props);



        this.state ={
            token:1,
            view:<Splash/>
        }
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('R_X_TOKEN');
            console.log(value)

            {/**  Real we need cheack from server athu */}
            if (value !== null) {
               
                this.setState({view:<Main/>})
            }
            else
            {
             
                 this.setState({view:<Login/>})

            }
        } catch (error) {
            
        }
    };

    componentDidMount(){
        
        setTimeout(()=>{
            this._retrieveData()
        },1000)
    }


    render() {
        return (
            this.state.view
        );
    }
}


