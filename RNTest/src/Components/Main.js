
import React, {Component} from 'react';



import {SafeAreaView,FlatList,TextInput,TouchableOpacity,View,Image,Dimensions,Alert} from 'react-native'
import {Dialog,DialogContent} from "react-native-popup-dialog";
import CountDown from 'react-native-countdown-component';

const { width, height, scale, fontScale } = Dimensions.get('window')

import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextBox from '../ToolComponents/TextBox';
import ButtonText from '../ToolComponents/ButtonText'
import Header from '../Components/Header'
import styles from '../Styl/Styles'
import { CheckBox } from 'react-native-elements'

export default class Main extends Component {
    constructor(props){
        super(props)

        this.state={
            s:0,
            m:15,
            d:new Date(),
            av:false,
            list:[],
            add:false,
            name:'',
            checked:false
            
        }
    }
  
 //Fun
 addToArray(){
     //close  popup
    


    //add to array
    let array=[]
     this.state.list.length === 0? array.push({
        id:array.length,
        name:this.state.name
    }):console.log('exs')
    this.setState({add:false,list:array})
    this.textInput.clear()
   
 }


 //render
render() {
    return (
       <SafeAreaView style={{flex:1,flexDirection:'column',backgroundColor:'#ff7979',alignItems:'center'}}>
            
            <Header name={'Main'}  view={ 
                        <TouchableOpacity onPress={()=>this.setState({add:true})}>
                          <Image style={styles.linputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/plus-2-math.png'}}/> 
                   
                       </TouchableOpacity>}/>
                       <View style={{width:width*.9,height:height*.1}}>
                       {this.state.list.length>0 ?  
                          <FlatList

                                extraData={this.state}
                                data={this.state.list} 
                                renderItem={({index,item})=>
                                <View style={{  // ios
                                  
                                    alignItems: 'center', 
                                    shadowOffset: {width: 0, height: 13}, 
                                    shadowOpacity: 0.3,
                                    shadowRadius: 6,
                                    shadowColor:'#000',
                                    // android (Android +5.0)
                                    elevation: 3,
                                    width:width*.9,height:height*.2}}>
                                <CheckBox
                                    center
                                    title={item.name}
                                    checked={this.state.checked}
                                    onPress={() => this.setState({list: []})}
                                    />
                            </View>}
                       />:null}
                       </View>


<AnimatedCircularProgress
  size={height*.3}
  duration={60000 * this.state.m + this.state.s}
  width={height*.01}

  fill={100}
  tintColor="#fff"
  onAnimationComplete={() => console.log('onAnimationComplete')}
  backgroundColor="gray" >
       {
    (fill) => (
        <CountDown
        until={60 * this.state.m + this.state.s}
        size={30}
        onPress={()=>console.log('f')}
        onFinish={() => !this.state.av?alert('Finished'):null}
        digitStyle={{backgroundColor: 'transparent'}}
        timeToShow={['M', 'S']}
        digitTxtStyle={{color: '#fff'}}
        running={this.state.av?false:true}
        timeLabels={{m: 'MM', s: 'SS'}}
        timeLabelStyle={{color:'#fff'}}
    />
    )
  }
</AnimatedCircularProgress>
  


<TouchableOpacity 
onPress={()=> this.setState({av:this.state.av?false:true})}
style={{borderRadius:10000,height:height*.08,width:width*.25,justifyContent:'center',alignItems:'center',backgroundColor:'gray',margin:15}}>
    <TextBox style={{color:'#fff'}} textContent={this.state.av?'Resume':'Stop'} />
</TouchableOpacity>





  {/*Dialog Add*/}
  <Dialog
                    onDismiss={() => {
                        this.setState({ add: false });
                    }}
                    width={.9}
                    height={.2}
                    visible={this.state.add}
                    rounded
                    actionsBordered

                 
                   dialogStyle={{ position: 'absolute', bottom: 0,     margin:height*.02 }}


                >
                    <DialogContent
                        style={{
                            backgroundColor: '#fff',
                            flexDirection:'column',
                       

                        }}
                    >
                           <View style={styles.linputContainer}>
            {/** OR Use /react-native-vector-icons */}
         
          <TextInput style={styles.linputs}
              placeholder="Task Name"
              keyboardType="default"
              ref={input => { this.textInput = input }} 
              onChangeText={(name) => this.setState({name})}/>
        </View>
                  
                     <View style={{justifyContent:'center',alignItems:'center',margin:10,flexDirection:'row'}}>

                    <ButtonText  backgroundColor={'#ff7979'} borderColor={'#ff7979'} borderRadius={10} borderWidth={2}   onPress={()=> this.addToArray()} label='Add' height={height*.06} width={width*.4} styleLabel={{ justifyContent: 'center',color:'#fff',fontSize:16}}  />
                    <ButtonText  borderColor={'#ff7979'} borderRadius={10} borderWidth={2}   onPress={() => this.setState({add: false})} label='Cancell' height={height*.06} width={width*.4} styleLabel={{ justifyContent: 'center',color:'#ff7979',fontSize:16}}  />

                    </View>



                    </DialogContent>
                </Dialog>

       </SafeAreaView>
    );
}
}
