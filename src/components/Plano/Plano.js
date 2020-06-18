import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Forma from '../Formas/Formas';
import Forma1 from '../Formas/Formas1';
import Forma2 from '../Formas/Formas2';
import Forma3 from '../Formas/Formas3';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import BottonAdd from "./EssencialComponents/BottonAdd"
import ModalAddForms from './EssencialComponents/ModalAddForms';

const ViewDot = styled.View` 
        position: absolute;
        left: ${props => (props.px ? props.px : '115')}px; 
        bottom: ${props => (props.py ? props.py : '125')}px; 
`;
const Circle = styled.View`
        width: 10;
        height: 10;
        border-Radius: 5;
        background-Color: red;
`;

const Imagem = styled.Image`
      width: ${props => (props.px ? props.px : '170')}px;
      
      height: ${props => (props.py ? props.py : '170')}px;
`;

const initialState = {
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
  FlagPlano: 0,
}

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
      FlagPlano: 0,
    };
  }

  clearState = () => {
    this.setState({
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
      FlagPlano: 0
    });
    this.props.func3();//LayoutBase
    this.handleDispatch();

  }

  handleDispatch = () => {
    //let valor = {
    //  CenterX: 0,
    //  CenterY: 0,
    //  visibilidadeModal: false 
    //}
    let a = 0
    const { dispatch } = this.props;
    dispatch({
      type: 'RESET',
      a
    })
  };
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
  setarFlagPlano = () => {
    console.log("att a flag plano");
    this.setState({ FlagPlano: 1 })
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
    let X = false, Y = false;
    let FlagPlano = true;
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
      X = parseInt(posicao.CenterX);
      Y = parseInt(posicao.CenterY);
      console.log("PLANO   __" + X + Y);
      X = X + 115;
      Y = Y + 125;
    }
    if (typeof this.props.EstadoFlagPlano != 'undefined') {
      FlagPlano = this.props.EstadoFlagPlano;
    }
    return (
      <View style={{ height: Dimensions.get("window").height / 2, alignItems: "center" }} >

        <View style={{ position: "absolute" }}>
          {FlagPlano == true &&

            < Image source={require('../../img/planoCartesiano.png')} style={{ width: 200, height: 232, paddingTop: 10 }}></Image>
          }
        </View>


        <View style={{ alignItems: "center" }}>
          {this.state.flagButton1 == 1 &&
            <View style={{ paddingBottom: 40 }}>
              <BottonAdd param={1} func={this.setarFlag.bind(this)} />

            </View>
          }
          {this.state.flagButton1 == 0 && <ModalAddForms param={1} id={this.state.id1} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
            func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} func5={this.props.func.bind(this)} />}
          {this.state.flagFigura1 === 1 && <Forma1 id={this.state.id1} />}
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>

          <View >
            {this.state.flagButton2 == 1 &&
              <View style={{ paddingRight: 20 }}>
                <BottonAdd param={2} func={this.setarFlag.bind(this)} />
              </View>
            }
            {this.state.flagButton2 == 0 && <ModalAddForms param={2} id={this.state.id2} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
              func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} func5={this.props.func1.bind(this)} />}
            {this.state.flagFigura2 === 1 && <View><Forma2 id={this.state.id2} /></View>}
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
            {this.state.flagButton3 == 0 && <ModalAddForms param={3} id={this.state.id3} func={this.setarFlagFigura.bind(this)} func2={this.setarModal.bind(this)}
              func3={this.setarId.bind(this)} func4={this.setarFlag.bind(this)} func5={this.props.func2.bind(this)} />}
            {this.state.flagFigura3 === 1 && <View><Forma3 id={this.state.id3} /></View>}
          </View>

        </View>
        <View style={{ paddingTop: 30 }}>
          <View style={{ borderRadius: 20, width: 50, height: 50, alignItems: 'center' }}>
            <TouchableOpacity onPress={this.clearState}>
              <Image source={require('../../img/seta_circular.png')} style={{ width: 50, height: 50 }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        {X!=0 ||  Y!=0 ? 
          <ViewDot px={X} py={Y}>
            <Circle />
          </ViewDot> : null
        }
      </View >
    );
  }
}

export default connect(state => ({
  EstadoInput: state.valoresModal,
  EstadoInputCount1: state.count1,
  EstadoInputCount2: state.count2,
  EstadoInputCount3: state.count3,
  EstadoInputCount4: state.count4,
  EstadoFlagPlano: state.tiraPlano
}))(Plano);

