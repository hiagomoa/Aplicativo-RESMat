import React, { Component } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import InputsQtdd from '../Quantidades/InputsQtd'

import { connect } from 'react-redux'



class Inputs extends Component {
  state = {
    input1: '',
    input2: '',

  }


  render() {

    return (
      <View>
        {this.props.idnumber === '1' &&
          <InputsQtdd idescolha='1' />
        }
        {this.props.idnumber === '2' || this.props.idnumber === '3'|| this.props.idnumber === '5' ?
          <InputsQtdd idescolha='2' /> : false
        }

        {this.props.idnumber === '4' &&
          <InputsQtdd idescolha='3' />
        }
   
      </View>
    )
  }
}

export default connect(state => ({
  EstadoInput: state.numberInput
}))(Inputs);