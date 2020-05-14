import React from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

class Calculo extends React.Component {
    state = {
        resultado: 0,
        flag: 0
    }
    chamaRedux = valor => {
        const { dispatch } = this.props;
        
        
        dispatch({
            type: 'ADD_RESULT',
            valor
        });
    }

    setarResultado = (valor) => {

        if (valor != this.state.resultado) {
            this.setState({ resultado: valor })
            this.setState({ flag: 1 })
        }
    }

    verificacaoAntiLoop = valor => {

        if (valor === 1) {
            
            this.props.funcao(1);
            this.props.funcao2(this.state.resultado);
            this.setState({ flag: 2 })
        }
    }

    render() {

        let count1 = 100, count2 = 200, count3 = 200, count4 = 200;

        if (typeof this.props.estadoInputCount1[0] != "undefined") {
            count1 = parseInt(this.props.estadoInputCount1[0]);
        }
        if (typeof this.props.estadoInputCount2[0] != "undefined") {
            count2 = parseInt(this.props.estadoInputCount2[0]);
        };
        if (typeof this.props.estadoInputCount3[0] != "undefined") {
            count3 = parseInt(this.props.estadoInputCount3[0]);
        }
        if (typeof this.props.estadoInputCount4[0] != "undefined") {
            count4 = parseInt(this.props.estadoInputCount4[0]);
        }

        if (this.props.id == 1) {
            this.setarResultado(count1)
        }

        this.chamaRedux(this.state.resultado);
        this.verificacaoAntiLoop(this.state.flag);
        return (
            <View>
            </View>
        )
    }
}
const mapState = state => ({
    estadoInputCount1: state.count1,
    estadoInputCount2: state.count2,
    estadoInputCount3: state.count3,
    estadoInputCount4: state.count4
})

export default connect(mapState)(Calculo);