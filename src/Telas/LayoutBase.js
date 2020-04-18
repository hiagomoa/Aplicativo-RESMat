import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import styled from 'styled-components/native'
import Header from '../components/Header'
import Plano from '../components/Plano'
import InputText from '../components/Formas/Inputs'
import { Provider } from 'react-redux'
import store from '../store';

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



    return (
        <Provider store={store}>
            <View style={styles.container}>

                <View>
                    <Header />
                    <View style={styles.cabeçalhoSombra}></View>
                </View>

                <View style={{ paddingTop: 30, alignItems: 'center' }}>
                    <Plano idnumber={JSON.stringify(number)} />
                    <Text> {JSON.stringify(number)} </Text>


                    <InputText idnumber={JSON.stringify(number)} />

                </View>
            </View>

        </Provider>
    )
}       