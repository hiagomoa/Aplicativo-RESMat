import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Header from '../components/Header'
import Imagem from '../components/Image'

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

export default function Layout() {
    return (
        <View style={styles.container}>
            
            <Header />
            <View style={styles.cabeçalhoSombra}>
            
            </View>
            

        </View>
    )
}