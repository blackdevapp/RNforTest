
import React, {Component} from 'react';



import {SafeAreaView,Text,View,Image,Dimensions,Alert} from 'react-native'
import styles from '../Styl/Styles'

const { WIDTH, height, scale, fontScale } = Dimensions.get('window')

import TextBox from '../ToolComponents/TextBox'


console.disableYellowBox = true

export default class Splash extends Component {

render() {
    return (
       <SafeAreaView style={styles.Splash_v_background}>
           <TextBox textContent={'Splash'} style={styles.Splash_v_text} />
       </SafeAreaView>
    );
}
}
