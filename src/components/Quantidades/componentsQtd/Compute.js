import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Calculo from '../../Calculo';
import ModalResult from '../../ModalResultados'
const Touch = styled.TouchableOpacity`
  height:100px;
  width:100px;
`;

export default class Centroid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: 0,
            flagModalResult: false,
            visibleModal: false,
            resultado: '',
            resultadoCentroidX: 0,
            resultadoCentroidY: 0,
            resultadoMomento: 0,
        };
    }


    MudarFlag = valor => {
        if (valor == 1) {
            this.setState({ flag: 1 });
            this.setState({ visibldeModal: true });
        }
        if(valor == 0){
            this.setState({flag :0});
        }
    }
    setarVisibleModal = valor => {
            this.setState({ visibleModal: false });
            this.setState({ flagModalResult: false });
    }

    setarValorModalResult = op => { 
            this.setState({ flagModalResult: op })
    }

    setarResultado= (resultCentX,resultCentY,resultMoment) =>{
            this.setState({resultadoCentroidX: resultCentX});
            this.setState({resultadoCentroidY: resultCentY});
            this.setState({resultadoMomento: resultMoment});
    } 



    render() {
        return (
            <View style={{ paddingLeft: 10 }}>
                <Touch
                    onPress={() => {
                        this.props.func(1),
                        this.MudarFlag(1)
                    }
                    }>
                    <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> = </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}> Compute </Text>
                </Touch>
                {this.state.flag === 1 &&
                    <View>
                        <Calculo id={this.props.id} id1={this.props.id1} id2={this.props.id2}  id3={this.props.id3} funcao={this.setarValorModalResult.bind(this)} funcao2={this.setarResultado.bind(this)}></Calculo>
                    </View>
                }
                {this.state.flagModalResult === 1 &&
                    <View>
                        <ModalResult func={this.setarVisibleModal.bind(this)} func2={this.setarValorModalResult.bind(this)} func3={this.MudarFlag.bind(this)} valor={true} 
                            resultCentX={this.state.resultadoCentroidX} resultCentY={this.state.resultadoCentroidY} resultMoment={this.state.resultadoMomento}  ></ModalResult>
                    </View>
                }
            </View>
        )
    }
}