import React from 'react';
import { Text } from 'react-native'
import styled from 'styled-components/native'
import { connect } from 'react-redux'

const Triangulo = styled.View`
        width: 0;   
        height: 0;
        background-color: transparent;
        border-style: solid;
        border-left-width: ${props => (props.tam1 ? props.tam1 : '100')}px;
        border-right-width: ${props => (props.tam1 ? props.tam1 : '100')}px;
        border-bottom-width: ${props => (props.tam2 ? props.tam2 : '200')}px;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #C7C7C7;
`;
const Quadrado = styled.View`
        width: ${props => (props.tam ? props.tam : '150')}px;  
        height: ${props => (props.tam ? props.tam : '150')}px;
        background-color: #C7C7C7;   
`;
//(100/2)
const Circulo = styled.View`  
        width: ${props => (props.tam1 ? props.tam1 : '200')}px;
        height: ${props => (props.tam1 ? props.tam1 : '200')}px;
        border-radius: ${props => (props.tam2 ? props.tam2 : '100')}px;
        background-color: #C7C7C7;
`;

const Trapezio = styled.View`
        width: ${props => (props.tam1 ? props.tam1 : '100')}px;/*base de baixo*/
        height: 0px;
        border-bottom-width: ${props => (props.tam4 ? props.tam4 : '50')}px;/*altura*/
        border-bottom-color: #C7C7C7;
        border-left-width: ${props => (props.tam2 ? props.tam2 : '50')}px; /*Angulo da esquerda*/
        border-left-color: transparent;
        border-right-width: ${props => (props.tam3 ? props.tam3 : '50')}px;/*Angulo da direita*/
        border-right-color: transparent;
        border-style: solid;
`;

//#region Hexagono
const Hexagono = styled.View`
        width: 100px;
        height: 55px;
`;

const HexagonoInner = styled.View`
        width: 100px;
        height: 55px;
        background-color: #C7C7C7;
`;

const HexagonoAfter = styled.View`
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
        border-top-color: #C7C7C7;
`;

const HexagonoBefore = styled.View`
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
        border-bottom-color: #C7C7C7;
`;
//#endregion

const Plano = styled.View`
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 300px;
        width: 300px;
        border-left-color: #C7C7C7;
        border-bottom-color: #C7C7C7;
        border-left-width: 2px;
        border-bottom-width: 2px;
`;

const Title = styled.Text`
        font-size: 20px;
        font-weight: 500px;
        color: palevioletred;
`;

class Formas extends React.Component {
        state = {
                opcao: this.props.id,
        }

        render() {
                let a = this.props.estadoInput[0];
                let count1 = 100, count2 = 200, count3 = 200, count4 = 200;

                if (typeof a == 'object') {
                        count1 = a.count1 ;
                        count2 = a.count2 ;
                        count3 = a.count3 ;
                        count4 = a.count4 ;
                }
                let variavel
                if (this.state.opcao === '3') { //teste para enviar ao circulo o count dividido por 2
                        variavel = parseInt(count1, 10)
                        variavel = variavel / 2;
                       
                }


                return (
                        <Plano>

                                {this.state.opcao === '1' && <Triangulo tam1={count1} tam2={count2} />}
                                {this.state.opcao === '2' && <Quadrado tam={count1} />}
                                {this.state.opcao === '3' && <Circulo tam1={count1} tam2={variavel} />}
                                {this.state.opcao === '4' && <Trapezio tam1={count1} tam2={count2} tam3={count3} tam4={count4} />}
                                {this.state.opcao === '5' && <Hexagono>
                                        <HexagonoInner />
                                        <HexagonoBefore />
                                        <HexagonoAfter />
                                </Hexagono>
                                }

                        </Plano>

                );
        }
}

const mapState = state => ({
        estadoInput: state.numberInput
})

export default connect(mapState)(Formas);