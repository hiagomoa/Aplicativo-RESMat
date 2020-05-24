import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import styled from 'styled-components/native'
import Header from '../components/Header'
import Plano from '../components/Plano/Plano'
import InputText from '../components/Formas/Inputs'
import { Provider } from 'react-redux'
import store from '../store';
import CallInputs from './EssentialComponentsLayoult/CallInputs'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#652291',
    },
    texto: {
        fontSize: 25,
        paddingTop: 22,
        left: 20,
        textAlign: 'center',
        color: '#9E69C1',
    },
})



export default function Layout({ route, navigation }) {
    const { number } = route.params;
    const [state, mudaState] = useState([0, 0]);
    const [state1, mudaState1] = useState([0, 0]);
    const [state2, mudaState2] = useState([0, 0]);


    const clearState = () => {
        const value = [0, 0];
        setarEstado(value);
        setarEstado1(value);
        setarEstado2(value);
    }
    
    const setarEstado = (estado) => {
        mudaState(estado);
       
    }
    const setarEstado1 = (estado) => {
        mudaState1(estado);
        
    }
    const setarEstado2 = (estado) => {
        mudaState2(estado);
    }

    return (
        <Provider store={store}>

            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Header />
                        <View style={styles.cabeçalhoSombra}></View>
                    </View>

                    <View style={{ paddingTop: 50, alignItems: 'center' }}>
                        <Plano idnumber={JSON.stringify(number)} func={setarEstado.bind(this)}
                            func1={setarEstado1.bind(this)} func2={setarEstado2.bind(this)} 
                            func3={clearState.bind(this)} />
                   
                        <View style={{ paddingTop: 5 }}>
                            {state1[0] == 1 && <CallInputs param={2} idescolha={state1[1]} />}
                            {state[0]  == 1 && <CallInputs param={1} idescolha={state[1]} />}
                            {state2[0] == 1 && <CallInputs param={3} idescolha={state2[1]} />}

                            <View style={{ paddingTop: 5 }}>
                                <InputText idnumber={JSON.stringify(number)} idnumber1={state[1]} idnumber2={state1[1]} idnumber3={state2[1]} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        </Provider>
    )
}       