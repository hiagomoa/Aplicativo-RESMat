import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView
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
    const [state, mudaState] = useState([0,0]);
    const [state1, mudaState1] = useState([0,0]);
    const [state2, mudaState2] = useState([0,0]);


    console.log("ppppppppppppppppppppppppppppppppppp    " + state[1])
    const setarEstado = (estado) => {
        mudaState(estado);
        console.log('kkkkkkkkkkkkk ' + estado + ' ' + state[0])
    }
    const setarEstado1 = (estado) => {
        mudaState1(estado);
        console.log('lllllllllllllll ' + estado + ' ' + state1[0])
    }
    const setarEstado2 = (estado) => {
        mudaState2(estado);
        console.log('mmmmmmmmmmmmmmm ' + estado + ' ' + state2[0])
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <View>
                    <Header />
                    <View style={styles.cabeçalhoSombra}></View>
                </View>

                <View style={{ paddingTop: 50, alignItems: 'center' }}>
                    <Plano idnumber={JSON.stringify(number)} func={setarEstado.bind(this)}
                        func1={setarEstado1.bind(this)} func2={setarEstado2.bind(this)} />
                    <View style={{ paddingTop: 5 }}>
                        <ScrollView>
                           {/* FALTA VERIFICAÇÃO DO ID  E ARUUMAR SCROLL VIEW*/}
                            {state1[0] == 1 && <CallInputs param={2} idescolha={state1[1]} />}
                            {state[0] == 1 && <CallInputs param={1} idescolha={state[1]} />}
                            {state2[0] == 1 && <CallInputs param={3} idescolha={state2[1]} />}
                            <InputText idnumber={JSON.stringify(number)} />
                            
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Provider>
    )
}       