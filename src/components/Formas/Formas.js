import React from 'react';
import {Text} from 'react-native'
import styled from 'styled-components/native'

const Triangulo = styled.View`
        width: 0;   
        height: 0;
        background-color: transparent;
        border-style: solid;
        border-left-width: 100px;
        border-right-width: 100px;
        border-bottom-width: 200px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #C7C7C7;
`;
const Quadrado= styled.View`
        width: 150px;   
        height: 150px;
        background-color: #C7C7C7;   
`;
//(100/2)
const Circulo= styled.View`  
        width: 100px;
        height: 100px;
        border-radius: 50px;
        background-color: #FF0000;
`;

const Trapezio= styled.View`
    width: 200px;
    height: 0px;
    border-bottom-width: 100px;
    border-bottom-color: red;
    border-left-width: 50px;
    border-left-color: transparent;
    border-right-width: 50px;
    border-right-color: transparent;
    border-style: solid;
    `;

//#region Hexagono
  const Hexagono= styled.View`
    width: 100px;
    height: 55px;
    `;
  
  const HexagonoInner= styled.View`
    width: 100px;
    height: 55px;
    background-color: #FF0000;
    `;

  const HexagonoAfter= styled.View`
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-left-width: 50px;
    border-left-color: transparent;
    border-right-width: 50px;
    border-right-color: transparent;
    border-top-width: 25px;
    border-top-color: #FF0000;
    `;
  
  const HexagonoBefore= styled.View`
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-left-width: 50px;
    border-left-color: transparent;
    border-right-width: 50px;
    border-right-color: transparent;
    border-bottom-width: 25px;
    border-bottom-color: #FF0000;
    `;
//#endregion

const Plano = styled.View`
      flex-direction: row;
      align-items: center;
      justify-content:center;
      height: 300px;
      width: 300px;
      border-left-color: #C7C7C7;
      border-bottom-color: #C7C7C7;
      border-left-width:2px;
      border-bottom-width:2px;
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

