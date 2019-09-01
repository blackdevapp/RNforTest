
import React, {Component} from 'react';



import {SafeAreaView,Text,View,Image,Dimensions,Alert} from 'react-native'
import styles from '../Styl/Styles'

const { width, height, scale, fontScale } = Dimensions.get('window')

import TextBox from '../ToolComponents/TextBox'


console.disableYellowBox = true

export default class Header extends Component {

render() {
    return (
        <View style={{
            height:height*.06,
            flexDirection:'row',
            width:width,
          
            justifyContent:'space-between'
           }}>
        <View style={{flex:1,justifyContent:'center'}}></View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <TextBox textContent={this.props.name} style={styles.Splash_v_text}/>
            
        </View>
        <View style={{flex:1,justifyContent:'center'}}>
        {this.props.view}
         </View>
        
    </View>
    );
}
}
