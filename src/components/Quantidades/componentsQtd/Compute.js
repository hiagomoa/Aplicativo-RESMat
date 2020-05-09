import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Touch = styled.TouchableOpacity`
  height:100px;
  width:100px;
`;

export default class Centroid extends React.Component {
    render() {
        return (
            <View style={{ paddingLeft: 10 }}>
                <Touch
                    onPress={() => { this.props.func(1) }}>
                    <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> = </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}> Compute </Text>
                </Touch>
            </View>
        )
    }
}