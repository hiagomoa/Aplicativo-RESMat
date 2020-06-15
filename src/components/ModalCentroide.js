import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal, TouchableHighlight } from 'react-native';
import styled from 'styled-components/native';
import { connect } from 'react-redux';


const InputText = styled.TextInput`
    height: 40px;
    width: 70px;
    background-color: #723699;
    font-size: 20px;
    border-radius: 10px;  
`;

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
    padding: 35,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 230,
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


const initialState={
CenterX: 0,
CenterY: 0,
visibilidadeModal: true
}
class ModalCentroide extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      CenterX: 0,
      CenterY: 0,
      visibilidadeModal: this.props.valor
    };
  }

  updateState=()=>{
    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP")
    this.setState({initialState});
    this.handleAdd2(initialState); 
    console.log("AOOOOOOOOOOBAAAAABABBABABBABABBABABABBAbaBABABba")
  }
  handleAdd = valor => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_MODAL_VALOR',
      valor
    });
    this.SetarFlagPlano();
  };
  handleAdd2 = valor => {
    const { dispatch } = this.props;
    dispatch({
      type: 'RESET',
      valor
    });
    this.SetarFlagPlano();
  };

  SetarFlagPlano = () => {
    let a = 0;
    const { dispatch } = this.props;
      dispatch({
        type: 'ADD_FLAG_PLANO',
        a
    })
  };
  trocaValor= estado =>{
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
    this.setState({visibilidadeModal: estado})
  }

  componentDidUpdate(prevProps) {
     () => this.setState({ visibilidadeModal: prevProps });
  }

  render() {
    console.log("\n 55555555555555555  " + this.props.Flag);
    if (this.props.Flag == 1){
      this.updateState();
    }
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.visibilidadeModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }} 
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Insira valores do centroide nos eixos X e Y!</Text>

            <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
              <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }}>
                <Text style={{ fontSize: 20, paddingTop: 3 }}> X= </Text>
                <InputText
                  keyboardType='numeric'
                  onChangeText={CenterX => this.setState({ CenterX })}>
                </InputText>
              </View>
              <View style={{ flexDirection: "row", flex: 1, justifyContent: "space-around" }} >
                <Text style={{ fontSize: 20, paddingTop: 3 }}>Y=</Text>
                <InputText
                  keyboardType='numeric'
                  onChangeText={CenterY => this.setState({ CenterY })}>
                </InputText>
              </View>
            </View>
            <View style={{ paddingTop: 40 }}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#723699" }} //cor do botao fechar
                onPress={() => {
                  this.trocaValor(false);
                  this.handleAdd(this.state);
                  this.props.func();
                }}>

                <Text style={styles.textStyle}>OK</Text>

              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}



  export default connect(state => ({
    Flag: state.initialState
  }))(ModalCentroide); 