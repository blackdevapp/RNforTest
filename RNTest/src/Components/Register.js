
import React, {Component} from 'react';



import {SafeAreaView,TouchableHighlight,TextInput,TouchableOpacity,Text,View,Image,Dimensions,Alert} from 'react-native'


const { width, height, scale, fontScale } = Dimensions.get('window')

import styles from '../Styl/Styles'
import TextBox from '../ToolComponents/TextBox'
import { Actions } from 'react-native-router-flux';
export default class Register extends Component {

    constructor(props) {
        super(props);
        state = {
          name   : '',
          lname: '',
        }
      }
    
      onClickListener = () => {
        Alert.alert(
          'Succes',
          'Please go back Login  page',
          [
            {text: 'Cansel', onPress: Actions.pop()},
            
            {text: 'OK', onPress: Actions.pop()},
          ],
          { cancelable: false }
        )
      }
    

            //register
    onPostRegister(){

  
      
      
      fetch('http://localhost:3000/register',{
         method: 'POST',//GET and ...
         headers:{
             Accept: 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            
             "name":this.state.name,
              "lname": this.state.lname
           
           })
        })
        .then((response)=>
        {
        
          if (response.status === 404) {
           
            return 404
          }
        

          return response.json()
         
        }
       ) //   <------ this line 
        .then((response)=>{

          console.log(response)

          if(response === 404)
          {
            //err
            Alert.alert("Alert", "Message   :   Error");
          }
          else
          {

            //OK
              this.onClickListener()
          }

        
      
      
         
     
        });
    
    
    
     
    
    }

render() {
    return (
        <SafeAreaView style={styles.lcontainer}>

<View style={styles.Toolbar}>
                   <View style={{flex:1,justifyContent:'center'}}>
                       {/** OR Use /react-native-vector-icons */}
                       <TouchableOpacity onPress={()=>Actions.pop()}>
                          <Image style={styles.linputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/back-filled.png'}}/> 
                   
                       </TouchableOpacity>
                    </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                       <TextBox textContent={'Register'} style={styles.Splash_v_text}/>
                   </View>
                   <View style={{flex:1}}></View>
                   
               </View>
        <View style={styles.linputContainer}>
          <Image style={styles.linputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.linputs}
               placeholder="Name"
               keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
        
        <View style={styles.linputContainer}>
          <Image style={styles.linputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.linputs}
               placeholder="LastName"
               keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(lname) => this.setState({lname})}/>
        </View>

        <TouchableHighlight style={[styles.lbuttonContainer, styles.lloginButton]} onPress={() => this.onPostRegister()}>
          <Text style={styles.lloginText}>Register</Text>
        </TouchableHighlight>

    
      </SafeAreaView>
    );
}
}
