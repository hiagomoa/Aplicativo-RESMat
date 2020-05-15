import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal, TouchableHighlight, Dimensions, Image } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    openButton: {
        borderRadius: 20,
        height: 60,
        width: 60
    },

    modalView: {  //parte de dentro do modal
        backgroundColor: "#E7DCEE",
        borderRadius: 20,
        padding: 50,
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: 200,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})

class ModalResultados extends React.Component {

    state = {
        visibilidadeModal: this.props.valor
    }

    trocaValor = estado => {
        this.setState({ visibilidadeModal: estado })
    }

    render() {
console.log('ouuuuuuuuuuuuuuuuuuuuuu' + this.props.resultCentX)
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.visibilidadeModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.centeredView}>
                            <Text style={{ fontSize: 20 }}> Centroide = {this.props.resultCentX}, {this.props.resultCentY}</Text>
                            <Text style={{ fontSize: 20 }}> Momento = {this.props.resultMoment}</Text>
                            
                        </View>

                        <View style={{ paddingTop: 40 }}>
                            <TouchableHighlight
                                style={{ ...styles.openButton }} //cor do botao fechar
                                onPress={() => {
                                    this.trocaValor(false);
                                    this.props.func(1);
                                    this.props.func2(0);
                                    this.props.func3(0);
                                }}>

                                <Image source={require('../img/seta_voltar.png')} style={{ height: 60, width: 60 }}></Image>
                                {/*<Text style={styles.textStyle}>Voltar</Text>*/}

                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const mapState = state => ({
    estadoInput: state.resultado
})

export default connect(mapState)(ModalResultados);


