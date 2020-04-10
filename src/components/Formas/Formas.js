import React from 'react';
import {Text} from 'react-native'
import styled from 'styled-components/native'

const Triangulo = styled.View`
        width: 0;   
        height: 0;
        background-color: transparent;
        border-style: solid;
        border-left-width: 100;
        border-right-width: 100;
        border-bottom-width: 200;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #C7C7C7;
`;
const Quadrado= styled.View`
        width: 150;   
        height: 150;
        background-color: #C7C7C7;   
`;
//(100/2)
const Circulo= styled.View`  
        width: 100;
        height: 100;
        border-radius: 50;
        background-color: #FF0000;
`;

const Trapezio= styled.View`
    width: 200;
    height: 0;
    border-bottom-width: 100;
    border-bottom-color: red;
    border-left-width: 50;
    border-left-color: transparent;
    border-right-width: 50;
    border-right-color: transparent;
    border-style: solid;
    `;

//#region Hexagono
  const Hexagono= styled.View`
    width: 100;
    height: 55;
    `;
  
  const HexagonoInner= styled.View`
    width: 100;
    height: 55;
    background-color: #FF0000;
    `;

  const HexagonoAfter= styled.View`
    position: absolute;
    bottom: -25;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-left-width: 50;
    border-left-color: transparent;
    border-right-width: 50;
    border-right-color: transparent;
    border-top-width: 25;
    border-top-color: #FF0000;
    `;
  
  const HexagonoBefore= styled.View`
    position: absolute;
    top: -25;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-left-width: 50;
    border-left-color: transparent;
    border-right-width: 50;
    border-right-color: transparent;
    border-bottom-width: 25;
    border-bottom-color: #FF0000;
    `;
//#endregion

const Plano = styled.View`
      flex-direction: row;
      align-items: center;
      justify-content:center;
      height: 300;
      width: 300;
      border-left-color: #C7C7C7;
      border-bottom-color: #C7C7C7;
      border-left-width:2;
      border-bottom-width:2;
`;  

const Title = styled.Text`
	font-size: 20px;
	font-weight: 500;
	color: palevioletred;
`;

export default class Formas extends React.Component {
  state= {
    opcao: this.props.id,
  }
  render(){
  return( 
    <Plano>
    
    {this.state.opcao === '1' && <Triangulo/> }
    {this.state.opcao === '2' && <Quadrado/> }
    {this.state.opcao === '3' && <Circulo/> }
    {this.state.opcao === '4' && <Trapezio/> }
    {this.state.opcao === '5' && <Hexagono>
        <HexagonoInner/>
        <HexagonoBefore/>
        <HexagonoAfter/>
        </Hexagono> }

		</Plano>

    ) ;
}
}

