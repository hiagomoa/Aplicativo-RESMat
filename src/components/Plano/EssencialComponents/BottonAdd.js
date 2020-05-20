import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styled from 'styled-components/native';

const Touch = styled.TouchableOpacity`
  height:30px;
  width:30px;
`;
const Circulo = styled.View`  
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: #C7C7C7;
`;

export default class BottonAdd extends Component {
    render() {
        return (
            <View>
                <Touch
                    onPress={() => {
                        console.log("clicou")
                        this.props.func(0,this.props.param)
                    }}>
                    <Circulo/>
                    
                </Touch>
            </View>
        );
    }
}