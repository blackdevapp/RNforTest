import React from 'react';

import { TouchableOpacity,View,Text,Dimensions ,ActivityIndicator} from 'react-native';
const { width, height, scale, fontScale } = Dimensions.get('window')
import PropTypes from 'prop-types';

//   <ButtonText onPress={() => {	alert("Hi there!!!")}} label='ورود' height={height*.08} width={width*.8} styleLabel={{ justifyContent: 'center', fontFamily:'Iransans',color:'#fff',fontSize:20}} />
  

class ButtonText extends React.Component {
    state = {
        icon: "eye-off",
        password: true
    };

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const {loading=false,backgroundColor,onPress, label, height, width ,styleLabel,borderColor,borderRadius,borderWidth} = this.props;
        return (
         <TouchableOpacity
         onPress={() => onPress()}
         >
             <View style={{flexDirection:'row',margin:10,backgroundColor:backgroundColor,height:height,width:width,borderColor:borderColor,justifyContent:'center',alignItems:'center',borderRadius:borderRadius,borderWidth:borderWidth}}>
                <Text style={styleLabel}>{label}</Text>
               
                {loading?<ActivityIndicator size="small" color={'#fff'}  style={{margin:height*.01}}/>:null}
             </View>
         </TouchableOpacity>
        );
    }
}
ButtonText.propTypes = {
    onPress: PropTypes.func
  };
export default ButtonText;