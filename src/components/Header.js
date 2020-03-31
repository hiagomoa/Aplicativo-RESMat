import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';



const styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        paddingTop: 22,
        left: 20,
        textAlign: 'center',
        color: '#9E69C1',
    },
    cabeçalho: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 0,
        width: '100%',
        height: 80,
        backgroundColor: '#E7DCEE',
    },
    cabeçalhoSombra: {
        paddingTop: 0,
        width: '100%',
        height: 7,
        backgroundColor: 'black',
        opacity: 0.1,
    }
})

export default function Header(){
    return(
    <View>
        <View style={styles.cabeçalho}>
            <Text style={styles.texto}> Visual Computação </Text>
        </View>
        <View style={styles.cabeçalhoSombra} />
    </View>
    )
}
