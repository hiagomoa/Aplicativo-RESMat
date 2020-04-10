import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

const InputText = styled.TextInput`
    height: 40px;
    width: 70px;
    background-color: #723699;
    font-size: 20;
   
`;

const StyledView = styled.View`
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: {width: 50px; height: 30px;};
  shadow-opacity: 500;
  shadow-radius: 10px;
  elevation: 5;
`;

const Visual = styled.View`
    background-color: #652291;

    
`;

const styles = StyleSheet.create({
  EditingText: {
    color: '#C7C7C7',
    paddingTop: 6,
    fontSize: 20,
  },

})

export default class Triangulo extends React.Component {
  state = {
    count1: '',
    count2: ''
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.EditingText} > X= </Text>
          <StyledView>
            <InputText
              keyboardType='numeric'
              onChangeText={count1 => this.setState({ count1 })}>
            </InputText>
          </StyledView>
        </View>


        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.EditingText} > Y= </Text>
          <StyledView>
            <InputText
              keyboardType='numeric'
              onChangeText={count2 => this.setState({ count2 })}>
            </InputText>
          </StyledView>
        </View>

      </View>
    )
  }
}


