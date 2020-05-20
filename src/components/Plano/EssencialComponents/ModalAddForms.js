import React from 'react'
import { View, Text, Modal, StyleSheet, Image, ScrollView, Dimensions, TouchableHighlight } from 'react-native'
import styled from 'styled-components/native';

const Touch = styled.TouchableOpacity`
  height:70px;
  width:70px;
`;


export default class ModalAddForms extends React.Component {
    state = {
        VisibleModal: true
    }
    setarEstadoModal = (Estado) => {
        this.setState({ VisibleModal: Estado })
    }

    render() {
        console.log(this.props.param)
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.VisibleModal}
            >

                <View style={styles.modalView}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={styles.quadrados}>
                                    <Touch
                                        onPress={() => {
                                            console.log("clicou")
                                            this.props.func3("1",this.props.param);
                                           
                                        }}>
                                        <Image style={{ width: 70, height: 70 }} source={require('../../../img/triangulo.png')}></Image>
                                    </Touch>
                                </View>
                                <View style={styles.quadrados}>
                                    <Touch
                                        onPress={() => {
                                            console.log("clicou")
                                            this.props.func3("3",this.props.param)
                                        }}>
                                        <Image style={{ width: 70, height: 70 }} source={require('../../../img/circulo.png')}></Image>
                                    </Touch>
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={styles.quadrados}>
                                    <Touch
                                        onPress={() => {
                                            console.log("clicou")
                                            this.props.func3("2",this.props.param)
                                        }}>
                                        <Image style={{ width: 65, height: 65 }} source={require('../../../img/quadrado.png')}></Image>
                                    </Touch>
                                </View>
                                <View style={styles.quadrados}>
                                    <Touch
                                        onPress={() => {
                                            console.log("clicou")
                                            this.props.func3("4",this.props.param)
                                        }}>
                                        <Image style={{ width: 70, height: 70 }} source={require('../../../img/trapezio.png')}></Image>
                                    </Touch>
                                </View>
                            </View>
                            <View style={{ width: '100%', flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={styles.quadrados}>
                                    <Touch
                                        onPress={() => {
                                            console.log("clicou")
                                            this.props.func3("5",this.props.param)
                                        }}>
                                        <Image style={{ width: 70, height: 70 }} source={require('../../../img/losangulo.png')}></Image>
                                    </Touch>
                                </View>

                            </View>

                            <TouchableHighlight
                                style={{ ...styles.openButton, backgroundColor: "#723699" }} //cor do botao fechar
                                onPress={() => {
                                    this.setarEstadoModal(false);
                                    this.props.func(this.props.param);
                                    this.props.func2();
                                    this.props.func4(-1,this.props.param);
                                }}>

                                <Text style={styles.textStyle}>OK</Text>

                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                </View>

            </Modal>
        )

    }

}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },

    modalView: {  //parte de dentro do modal
        margin: 20,
        backgroundColor: '#E7DCEE',
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: (Dimensions.get('window').height / 4) * 3,
        width: (Dimensions.get('window').width / 10) * 9,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },

    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    container: {
        width: (Dimensions.get('window').width / 10) * 7,
        height: 500,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        flexDirection: "column",

    },
    quadrados: {
        alignItems: 'center',
        backgroundColor: '#C3ABD2',
        width: 80,
        height: 80,
        borderColor: '#652291',
        borderWidth: 2,
        borderRadius: 20,
        justifyContent: 'center'
    },

})