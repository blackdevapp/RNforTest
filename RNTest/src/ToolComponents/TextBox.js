import React from 'react';import {  Text,View} from 'react-native';
//<InputTextBox  label='رمزعبور' onChange={(v) => alert(v)} />
      
           
class TextBox extends React.Component {
    state = {
        icon: "eye-off",
        password: false
    };

    _changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render() {
        const {  style,textContent } = this.props;
        return (
            <View >
                <Text style={[style, {  fontFamily: "Iransans" }]}>{textContent}</Text>
            </View>
        );
    }
}

export default TextBox;