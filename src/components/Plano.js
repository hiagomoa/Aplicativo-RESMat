import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Forma from './Formas/Formas';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const ViewDot = styled.View`
        
        position: relative;
        padding-left: ${props => (props.px ? props.px : '0')}px; 
        top: ${props => (props.py ? props.py : '0')}px; 

`;

class Plano extends Component {
  render() {
    let posicao = this.props.EstadoInput[0];
    let X = 0, Y = 0;

    if (typeof posicao === 'object') {
      X = posicao.CenterX;
      Y = -1*parseInt(posicao.CenterY);
    }

    return (
      <View style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height / 2 }} >
        
        <View style={{position: 'absolute', paddingLeft: 50,paddingTop: 10}}>
          <Forma id={this.props.idnumber} />
        </View>
        <ViewDot  px={X} py={Y}>
          <Image source={require('../img/plano_cartesiano.png')}
            style={{width: 250, height: 250 }}>
          </Image>
        </ViewDot>

    

      </View>
    );
  }
}


export default connect(state => ({
  EstadoInput: state.valoresModal
}))(Plano);

