import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Header from '../components/Header'
import Imagem from '../components/Image'
import Plano from '../components/Plano'


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

export default function Layout({route,navigation }) {
    const {number} = route.params;
    var teste = 'Hiago BURROOO'
    

    return (
        <View style={styles.container}>

            <View>
                <Header />
                <View style={styles.cabeçalhoSombra}></View>
            </View>

            <View style={{paddingTop: 30,alignItems:'center'}}> 
                <Plano idnumber={JSON.stringify(number)}/>
                <Text> {JSON.stringify(number)} </Text>
            </View>

            <Text>{teste}</Text>
 
  

        </View>
    )
}