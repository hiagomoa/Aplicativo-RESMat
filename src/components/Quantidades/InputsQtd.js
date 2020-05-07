import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native'
import { connect } from 'react-redux'


const InputText = styled.TextInput`
    height: 40px;
    width: 70px;
    background-color: #723699;
    font-size: 20px;
    border-radius: 10px;
   
`;

const StyledView = styled.View`
  border-radius: 10px;
  shadow-color: #000000;
  shadow-offset: {width: 50px; height: 30px;};
  shadow-opacity: 500;
  shadow-radius: 10px;
  elevation: 5;
`;

const Visual = styled.View`
  background-color: #652291;
`;
const Touch = styled.TouchableOpacity`
  height:100px;
  width:100px;
`;

const styles = StyleSheet.create({
  EditingText: {
    color: '#C7C7C7',
    paddingTop: 6,
    fontSize: 20,
  },

  centeredView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,



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
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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

class Triangulo extends React.Component {

  state = {
    count1: 100,
    count2: 200,
    count3: 100,
    count4: 50,
    CenterX: 20,
    CenterY: 20,
    modalVisible: false
  }


  handleAdd = product => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_NUMBER',
      product
    });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { modalVisible } = this.state;
    return (

      <View>

        {this.props.idescolha === '1' &&
          <View>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.EditingText} > X= </Text>
                <StyledView>
                  <InputText
                    keyboardType='numeric'
                    onChangeText={count1 => this.setState({ count1 })}>
                  </InputText>
                </StyledView>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.EditingText} > Y= </Text>
                <StyledView>
                  <InputText
                    keyboardType='numeric'
                    onChangeText={count2 => this.setState({ count2 })}>
                  </InputText>
                </StyledView>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch', }}>
              <View>
                <Touch
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                  <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> + </Text>
                  <Text style={{ color: 'white', fontSize: 20 }}> Centroid </Text>
                </Touch>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Touch
                  onPress={() => this.handleAdd(this.state)}>
                  <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> = </Text>
                  <Text style={{ color: 'white', fontSize: 20 }}> Compute </Text>
                </Touch>
              </View>
            </View>

            {/*--------------modal-Inicio------------*/}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
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
                        this.setModalVisible(!modalVisible);
                        this.handleAdd(this.state);
                      }}>

                      <Text style={styles.textStyle}>OK</Text>

                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/*--------------modal-final-----------*/}

          </View>
        }

        {this.props.idescolha === '2' &&

          <View style={{ flexDirection: 'column', alignItens: 'center' }}>

            <View style={{ alignItems: 'center' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.EditingText} > R= </Text>
                <StyledView>
                  <InputText
                    keyboardType='numeric'
                    onChangeText={count1 => this.setState({ count1 })}>
                  </InputText>
                </StyledView>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch', }}>
              <View>
                <Touch
                  onPress={() => {
                    this.setModalVisible(true);
                  }}>
                  <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> + </Text>
                  <Text style={{ color: 'white', fontSize: 20 }}> Centroid </Text>
                </Touch>
              </View>
              <View style={{ paddingLeft: 10 }}>
                <Touch
                  onPress={() => this.handleAdd(this.state)}>
                  <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> = </Text>
                  <Text style={{ color: 'white', fontSize: 20 }}> Compute </Text>
                </Touch>
              </View>
            </View>


            {/*--------------modal-inicio-----------*/}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
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
                        this.setModalVisible(!modalVisible);
                        this.handleAdd(this.state);
                      }}>

                      <Text style={styles.textStyle}>OK</Text>

                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/*--------------modal-final-----------*/}


          </View>
        }

        {
          this.props.idescolha === '3' &&
          <View>

            <View style={{ flexDirection: 'column' }}>

              <View style={{ flexDirection: 'row' }}>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.EditingText} > B= </Text>
                  <StyledView>
                    <InputText
                      keyboardType='numeric'
                      onChangeText={count1 => this.setState({ count1 })}>
                    </InputText>
                  </StyledView>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.EditingText} > AngEsq= </Text>
                  <StyledView>
                    <InputText
                      keyboardType='numeric'
                      onChangeText={count2 => this.setState({ count2 })}>
                    </InputText>
                  </StyledView>
                </View>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.EditingText} > AngDir= </Text>
                  <StyledView>
                    <InputText
                      keyboardType='numeric'
                      onChangeText={count3 => this.setState({ count3 })}>
                    </InputText>
                  </StyledView>
                </View>



                <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 2 }}>
                  <Text style={styles.EditingText} > h= </Text>
                  <StyledView >
                    <InputText
                      keyboardType='numeric'
                      onChangeText={count4 => this.setState({ count4 })}>
                    </InputText>
                  </StyledView>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: "row", alignContent: 'space-around', alignItems: 'stretch', }}>
                <View>
                  <Touch
                    onPress={() => {
                      this.setModalVisible(true);
                    }}>
                    <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> + </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}> Centroid </Text>
                  </Touch>
                </View>
                <View style={{ paddingLeft: 10 }}>
                  <Touch
                    onPress={() => this.handleAdd(this.state)}>
                    <Text style={{ color: 'white', fontSize: 50, paddingLeft: 18 }}> = </Text>
                    <Text style={{ color: 'white', fontSize: 20 }}> Compute </Text>
                  </Touch>
                </View>
              </View>

            </View>

            {/*--------------modal-inicio-----------*/}
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
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
                        this.setModalVisible(!modalVisible);
                        this.handleAdd(this.state);
                      }}>

                      <Text style={styles.textStyle}>OK</Text>

                    </TouchableHighlight>
                  </View>
                </View>
              </View>
            </Modal>
            {/*--------------modal-final-----------*/}


          </View>

        }
      </View >

    )
  }
}

export default connect()(Triangulo)