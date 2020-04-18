import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import InputsQtdd from '../Quantidades/InputsQtd'

import { connect } from 'react-redux'



class Formas extends Component {
  state = {
    input1: '',
    input2: '',
    opcao: this.props.idnumber

  }


  render() {

    console.log(this.props.EstadoInput);

    return (

      <View>
        {this.state.opcao === '1' && <View>
          <InputsQtdd />
          <Text>AIIIIIIIIII beleza?</Text>
        </View>}
      </View>

    )
  }
}

export default connect(state => ({
  EstadoInput: state.numberInput
}))(Formas);