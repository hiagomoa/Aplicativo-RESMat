import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Forma from './Formas/Formas';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

const Circulo = styled.View`  
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #FFFFFF;
`;
const ViewDot= styled.View`
        position: absolute;
        padding-left: ${props => (props.px ? props.px : '144')}px; 
        padding-top: ${props => (props.py ? props.py : '170')}px; 

`;

 class Plano extends Component {
  render() {
    let posicao= this.props.EstadoInput[0];
    let X=130, Y=130;

    
    if(typeof posicao==='object'){
        X=posicao.CenterX;
        Y=posicao.CenterY;
    }
  
    return(
      <View >  
          <View >
            <Forma id={this.props.idnumber}/>
          </View>
          <ViewDot  px={X} py={Y}>
            <Circulo/>
          </ViewDot>

      </View>
    ) ;
  }
}


export default connect(state => ({
  EstadoInput: state.valoresModal
}))(Plano);

