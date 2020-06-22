import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const Touch = styled.TouchableOpacity`
  height:30px;
  width:30px;
`;
const Circulo = styled.View`  
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #C7C7C7;
        align-items: center;
        justify-content:center;
`;

class BottonAdd extends Component {

    SetarFlagPlano = () => {
        let a = 0;
        const { dispatch } = this.props;
          dispatch({
            type: 'ADD_FLAG_PLANO',
            a
        })
      };

    render() {
        return (
            <View>
                <Touch
                    onPress={() => {
                        
                        this.props.func(0,this.props.param);
                        this.SetarFlagPlano();
                    }}>
                    
                    <Circulo>
                    <Image source={require('../../../img/mais.png')} style={{width: 25, height: 25}}></Image>
                    </Circulo>
                    
                </Touch>
            </View>
        );
    }
}

export default connect()(BottonAdd)