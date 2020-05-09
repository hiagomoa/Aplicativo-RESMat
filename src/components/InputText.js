import React from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import { connect } from 'react-redux'


const InputText = styled.TextInput`
    height: 40px;
    width: 70px;
    background-color: #723699;
    font-size: 20px;
    border-radius: 10px;
   
`;

const StyledView = styled.View`
  border-radius: 10px;
  shadow-color: #000000;
  shadow-offset: {width: 50px; height: 30px;};
  shadow-opacity: 500;
  shadow-radius: 10px;
  elevation: 5;
`;

class InputTexto extends React.Component {

  state = {
    count1: 100,
    count2: 200,
    count3: 100,
    count4: 100,
  }
  handleAdd = valor => {
    const { dispatch } = this.props;
    if(valor != 'undefined'){
    dispatch({
      type: 'ADD_VALORES',
      valor
    });
  }
  };
  render() {
    return (
      <View>
        {this.props.count === 1 &&
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.EditingText} > {this.props.texto}= </Text>
            <StyledView>
              <InputText
                keyboardType='numeric'
                onChangeText={count1 => this.setState({ count1 })}
                returnKeyType="go"
                onSubmitEditing={()=> this.handleAdd(this.state)} >
                  </InputText>
                </StyledView>
              </View>
        }
        {
  this.props.count === 2 &&
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.EditingText} > {this.props.texto}= </Text>
      <StyledView>
        <InputText
          keyboardType='numeric'
          onChangeText={count2 => this.setState({ count2 })}
          returnKeyType="go"
          onSubmitEditing={()=> this.handleAdd(this.state)} >
          
        </InputText>
      </StyledView>
    </View>
}
{
  this.props.count === 3 &&
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.EditingText} > {this.props.texto}= </Text>
      <StyledView>
        <InputText
          keyboardType='numeric'
          onChangeText={count3 => this.setState({ count3 })}
          returnKeyType="go"
          onSubmitEditing={()=> this.handleAdd(this.state)} >
          
        </InputText>
      </StyledView>
    </View>
}
{
  this.props.count === 4 &&
    <View style={{ flexDirection: 'row' }}>
      <Text style={styles.EditingText} > {this.props.texto}= </Text>
      <StyledView>
        <InputText
          keyboardType='numeric'
          onChangeText={count4 => this.setState({ count4 })}
          returnKeyType="go"
          onSubmitEditing={()=> this.handleAdd(this.state)} >
          
        </InputText>
      </StyledView>
    </View>
}
      </View >
    );
  }
}
export default connect()(InputTexto);

const styles = StyleSheet.create({
  EditingText: {
    color: '#C7C7C7',
    paddingTop: 6,
    fontSize: 20,
  },
})