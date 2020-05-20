import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import Forma from '../Formas/Formas';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import BottonAdd from "./EssencialComponents/BottonAdd"
import ModalAddForms from './EssencialComponents/ModalAddForms';

const ViewDot = styled.View`
        
        position: absolute;
        padding-left: ${props => (props.px ? props.px : '0')}px; 
        top: ${props => (props.py ? props.py : '0')}px; 

`;

const Imagem = styled.Image`
      width: ${props => (props.px ? props.px : '0')}px;
      
      height: ${props => (props.py ? props.py : '0')}px;
`;

class Plano extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flagButton1: 1,
      flagButton2: 1,
      flagButton3: 1,
      id1: '',
      id2: '',
      id3: '',
      flagFigura1: 0,
      flagFigura2: 0,
      flagFigura3: 0,
      modalVisible: false,
      FlagBolota: 0,
    };
  }


  setarFlag = (Estado, tipo) => {
    if (tipo == 1) {
      this.setState({ flagButton1: Estado })
    }
    if (tipo == 2) {
      this.setState({ flagButton2: Estado })
    }
    if (tipo == 3) {
      this.setState({ flagButton3: Estado })
    }
    this.setState({ FlagBolota: 1 })
  }

  setarModal = () => {
    this.setState({ modalVisible: false });
  }

  setarFlagFigura = (Figura) => {

    if (Figura == 1) {
      this.setState({ flagFigura1: 1 })
    }
    if (Figura == 2) {
      this.setState({ flagFigura2: 1 })
    }
    if (Figura == 3) {
      this.setState({ flagFigura3: 1 })
    }
  }

  setarId = (Id, Figura) => {
    if (Figura == 1) {
      this.setState({ id1: Id })
    }
    if (Figura == 2) {
      this.setState({ id2: Id })
    }
    if (Figura == 3) {
      this.setState({ id3: Id })
    }
  }

  render() {
    let posicao = this.props.EstadoInput[0];
    let X = 0, Y = 0;

    let eixoX = 240, eixoY = 210;

    if (this.props.idnumber == 1) { //TRIANGULO
      eixoX = 240;
      eixoY = 180;
    } else if (this.props.idnumber == 2) { //Quadrado
      eixoX = 170;
      eixoY = 127;
    } else if (this.props.idnumber == 3) { //Circulo
      eixoX = 170;
      eixoY = 127;
    } else if (this.props.idnumber == 4) { //trapezio
      eixoX = 170;
      eixoY = 127;
    } else if (this.props.idnumber == 5) { //hexagono
      eixoX = 170;
      eixoY = 127;
    }

    if (typeof posicao === 'object') {
      X = -1 * parseInt(posicao.CenterX);
      Y = parseInt(posicao.CenterY);
    }

    return (
      <View style={{ height: Dimensions.get("window").height / 2, alignItems: "center" }} >
        {/*

        <ViewDot px={X} py={Y}>
          <Imagem px={eixoX} py={eixoY} source={require('../../img/planoCartesiano.png')} />
        </ViewDot>
        COLOCAR ISSO NO LAYOULT BASE DEPOIS
*/}
        <View style={{ alignItems: "center" }}>
          {this.state.flagButton1 == 1 &&
            <View style={{ paddingBottom: 40 }}>
              <BottonAdd param={1} func={this.setarFlag.bind(this)} />
            </View>
          }
          {this.state.flagButton1 == 0  && <ModalAddForms param={1} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
            func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} />}
          {this.state.flagFigura1 === 1 && <View><Forma id={this.state.id1} /></View>}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <View >
            {this.state.flagButton2 == 1 &&
              <View style={{ paddingRight: 20 }}>
                <BottonAdd param={2} func={this.setarFlag.bind(this)} />
              </View>
            }
            {this.state.flagButton2 == 0 && <ModalAddForms param={2} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
              func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} />}
            {this.state.flagFigura2 === 1 && <View><Forma id={this.state.id2} /></View>}
          </View>

          <View>

            <Forma id={this.props.idnumber} />

          </View>

          <View>
            {this.state.flagButton3 == 1 &&
              <View style={{ paddingLeft: 20 }}>
                <BottonAdd param={3} func={this.setarFlag.bind(this)} />
              </View>
            }
            {this.state.flagButton3 == 0 && <ModalAddForms param={3} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
              func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} />}
            {this.state.flagFigura3 === 1 && <View><Forma id={this.state.id3} /></View>}
          </View>

        </View>


      </View>
    );
  }
}

export default connect(state => ({
  EstadoInput: state.valoresModal,
  EstadoInputCount1: state.count1,
  EstadoInputCount2: state.count2,
  EstadoInputCount3: state.count3,
  EstadoInputCount4: state.count4
}))(Plano);

