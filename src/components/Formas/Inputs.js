import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native'
import InputsQtdd from '../Quantidades/InputsQtd'
import { connect } from 'react-redux'

class Inputs extends Component {

  render() {

    return (
      <View>
        {this.props.idnumber === '1' &&
          <InputsQtdd idescolha='1' id={this.props.idnumber} id1={this.props.idnumber1}  id2={this.props.idnumber2}  id3={this.props.idnumber3} />
        }
        {this.props.idnumber === '2' || this.props.idnumber === '3'|| this.props.idnumber === '5' ?
          <InputsQtdd idescolha='2' id={this.props.idnumber} id1={this.props.idnumber1}  id2={this.props.idnumber2}  id3={this.props.idnumber3} /> : false
        }
        {this.props.idnumber === '4' &&
          <InputsQtdd idescolha='3' id={this.props.idnumber} id1={this.props.idnumber1}  id2={this.props.idnumber2}  id3={this.props.idnumber3}/>
        }
      </View>
    )
  }
}

export default connect(state => ({
  EstadoInput: state.numberInput
}))(Inputs);