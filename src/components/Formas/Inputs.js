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
          <InputsQtdd idescolha='1' id={this.props.idnumber}/>
        }
        {this.props.idnumber === '2' || this.props.idnumber === '3'|| this.props.idnumber === '5' ?
          <InputsQtdd idescolha='2' id={this.props.idnumber} /> : false
        }
        {this.props.idnumber === '4' &&
          <InputsQtdd idescolha='3' id={this.props.idnumber}/>
        }
   
      </View>
    )
  }
}

export default connect(state => ({
  EstadoInput: state.numberInput
}))(Inputs);