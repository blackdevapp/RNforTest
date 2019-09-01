import React from 'react';
import
 {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
  Image
} from 'react-native'
const { width, height,scale, fontScale } = Dimensions.get('window')

  
//<InputTextBox  label='رمزعبور' onChange={(v) => alert(v)} />
      
           
class Wating extends React.Component {

 

    render() {
        const { label, color } = this.props;
        return (
          <View style={{flexDirection:'column',justifyContent:'center',alignContent:'center',alignItems:'center',borderColor:color,borderRadius:5,borderWidth:2,marginLeft:height*.07,marginRight:height*.07,padding:5}}>
              <Text style={{color:color,fontSize:20}}>{label}</Text>
              <ActivityIndicator size="large" color={color}  style={{marginTop:height*.02}}/>
          </View>
        );
    }
}

export default Wating;