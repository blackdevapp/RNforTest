
import React, {Component} from 'react';



import {SafeAreaView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Text
  ,View,
  Image,
  Dimensions,
  Alert,
  AsyncStorage
} from 'react-native'


const { width, height, scale, fontScale } = Dimensions.get('window')

import styles from '../Styl/Styles'
import TextBox from '../ToolComponents/TextBox'
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

    constructor(props) {
        super(props);
        state = {
          name   : '',
          lname: '',
        }
      }
    
      onClickListener = (m) => {
        Alert.alert("Alert", "Message   :   "+m);
      }
    


      //Login
    onPostLogin(){

  
      
      
        fetch('http://localhost:3000/login',{ // for android 9 and Uper use https
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
              this.onClickListener('Not Found')
            }
            else
            {

              //OK
             //   this._storeget(response.message)
             AsyncStorage.setItem('R_X_TOKEN',response.message)
                  Actions.pop()
           Actions.Main()
            }

          
        
        
           
       
          });
      
      
      
       
      
      }




      
      //Save Storge
      _storeget = async (token) => {
        
         // For Real Project Use ***********    Redux    *******************************

        // await AsyncStorage.setItem('R_X_TOKEN',token).then(response => {
       
        //    // Succes Save
        //    console.log('Succes Save',response,'To',token)


        //    //close Component And Next Page
        //    Actions.pop()
        //    Actions.Main()
        // })
       
    
    
           // 
        };

      

render() {
    return (
        <SafeAreaView style={styles.lcontainer}>

          {/** Hearder */}

          <View style={styles.Toolbar}>
                   <View style={{flex:1,justifyContent:'space-between'}}>
                    </View>
                   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                       <TextBox textContent={'Login'} style={styles.Splash_v_text}/>
                       
                   </View>
                   <View style={{flex:1}}></View>
                   
               </View>
{/** Exp: <Hearder />  Use in **   Main  ** Component for exp*/}

            
        <View style={styles.linputContainer}>
            {/** OR Use /react-native-vector-icons */}
          <Image style={styles.linputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.linputs}
              placeholder="Name"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
        
        <View style={styles.linputContainer}>
            {/** OR Use /react-native-vector-icons */}
          <Image style={styles.linputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.linputs}
              placeholder="LastName"
              keyboardType="default"
              underlineColorAndroid='transparent'
              onChangeText={(lname) => this.setState({lname})}/>
        </View>

         {/** Next page is Main  if==> login will be ok */}
        <TouchableHighlight style={[styles.lbuttonContainer, styles.lloginButton]} onPress={() => this.onPostLogin()}>
          <Text style={styles.lloginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.lbuttonContainer} onPress={() => this.onClickListener('restore_password')}>
           
            <TextBox textContent={'Forgot your password?'} style={styles.Splash_v_text} />
        </TouchableHighlight>


      {/** Next page is  Register*/}
        <TouchableOpacity style={styles.lbuttonContainer} onPress={() => Actions.Register()}>
            
            <TextBox textContent={'Register'} style={styles.Splash_v_text} />
        </TouchableOpacity>
      </SafeAreaView>
    );
}
}
