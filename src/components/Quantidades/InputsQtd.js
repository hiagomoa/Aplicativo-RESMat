import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import InText from '../InputText';
import ModalCent from '../ModalCentroide';
import Centroid from './componentsQtd/Centroid';
import Compute from './componentsQtd/Compute';

class InputsQtd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalResult: false
    };
  }

  handleAdd = product => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_NUMBER',
      product
    });
  };

  trocaValorPai = () => {
    this.setState({ modalVisible: false });
  }

  componentDidUpdate(prevProps) {
    if (prevProps === true) {
      this.setState({ modalVisible: prevProps });
    }
    if (prevProps === 1) {///OLHAR AQUI NA HORA DO TESTE
      this.setState({ modalResult: true });
      this.handleAdd(this.state);
    }
  }

  render() {
    return (
      <View>
        {this.props.idescolha === '1' &&
          <View>
            <View style={{ flexDirection: 'row' }}>
              <InText count={1} texto='X' id ={this.props.id}></InText>
              <InText count={2} texto='Y' id ={this.props.id}></InText>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch' }}>
              <Centroid func={this.componentDidUpdate.bind(this)} ></Centroid>
              <Compute func={this.componentDidUpdate.bind(this)} id={this.props.id}></Compute>
            </View>

            {this.state.modalVisible === true &&
              <ModalCent valor={this.state.modalVisible} func={this.trocaValorPai.bind(this)}></ModalCent>
            }
          </View>
        }

        {this.props.idescolha === '2' &&
          <View style={{ flexDirection: 'column', alignItens: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <InText count={1} texto='R'></InText>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch', }}>
              <Centroid func={this.componentDidUpdate.bind(this)} ></Centroid>
              <Compute func={this.componentDidUpdate.bind(this)} id={this.props.id}></Compute>
            </View>

            {this.state.modalVisible === true &&
              <ModalCent valor={this.state.modalVisible} func={this.trocaValorPai.bind(this)}></ModalCent>
            }
          </View>
        }

        {this.props.idescolha === '3' &&
          <View>
            <View style={{ flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row' }}>
                <InText count={1} texto='B'></InText>
                <InText count={2} texto='AngEsq'></InText>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <InText count={3} texto='AngDir'></InText>
                <InText count={4} texto='H'></InText>
              </View>

              <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch', }}>
                <Centroid func={this.componentDidUpdate.bind(this)} ></Centroid>
                  <Compute func={this.componentDidUpdate.bind(this)} id={this.props.id}></Compute>
              </View>
              </View>

              {this.state.modalVisible === true &&
                <ModalCent valor={this.state.modalVisible} func={this.trocaValorPai.bind(this)}></ModalCent>
              }
            </View>
        }
      </View >
    )
  }
}

const mapState = state => ({
          estadoInput: state.modalVisible
})
export default connect(mapState)(InputsQtd);