import React from 'react';
import { View, Modal, Text } from 'react-native';
import { connect } from 'react-redux';

class Calculo extends React.Component {
    state = {
        resultadoCentroidX: ' ',
        resultadoCentroidY: ' ',
        resultadoMomento: 0,
        flag: 0
    }


    setarResultado = (resCentX, resCentY, resMoment) => {

            if(resCentX!= this.state.resultadoCentroidX || resCentY!=this.state.resultadoCentroidY || resMoment!= this.state.resultadoMomento){
            this.setState({ resultadoCentroidX: resCentX })
            this.setState({ resultadoCentroidY: resCentY })
            this.setState({ resultadoMomento: resMoment })
            this.setState({ flag: 1 })
            }
    }

    verificacaoAntiLoop = valor => {

        if (valor === 1) {

            this.props.funcao(1);
            this.props.funcao2(this.state.resultadoCentroidX, this.state.resultadoCentroidY, this.state.resultadoMomento);
            this.setState({ flag: 2 })
        }
    }

    render() {

        let count1 = 100, count2 = 200, count3 = 200, count4 = 200;
        let x, y, momento;
        let centerX = parseInt(this.props.valor[0].CenterX);
        let centerY = parseInt(this.props.valor[0].CenterY);
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
            if (centerX != 0) {
                x = (count1 / 2);
                x = centerX + x;
            }
            if (centerY != 0) {
                y = (count1 / 3);
                y = centerY + y;
            }
            if(centerX == 0){
                x = (count1/2)
            }
            if(centerY == 0){
                y = (count1/3)
            }
            momento= (count1*Math.pow(count2,3))/36;

        }

        if (this.props.id == 2) {
            if (centerX != 0) {

                x = (count1 / 2);
                x = centerX + x;

            }
            if (centerY != 0) {
 
                y = (count1 / 2);
                y = centerY + y;

            }
            if(centerX == 0){
                x = (count1/2)
            }
            if(centerY == 0){
                y = (count1/2)
            }
            momento = (Math.pow(count1, 4)) / 12;
        }

        if (this.props.id == 3) {
            if (centerX != 0) {

                x = (count1 / 2);
                x = centerX + x;

            }
            if (centerY != 0) {
 
                y = (count1 / 2);
                y = centerY + y;

            }
            if(centerX == 0){
                x = (count1/2)
            }
            if(centerY == 0){
                y = (count1/2)
            }
            momento = (Math.PI * Math.pow(count1, 4)) / 64;
        }

        if(this.props.id == 5) {
            if (centerX != 0) {
                x = count1;
                x = centerX + x;
            }
            if (centerY != 0) {
                y = Math.sqrt(3)*(count1/2);
                y = centerY + y;
            }
            if(centerX == 0){
                x = count1;
            }
            if(centerY == 0){
                y = Math.sqrt(3)*(count1/2);
            }
            momento = (Math.PI * Math.pow(count1, 4)) / 64;

        }
        this.setarResultado(x, y, momento);

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
    estadoInputCount4: state.count4,
    valor: state.valoresModal,
})

export default connect(mapState)(Calculo);