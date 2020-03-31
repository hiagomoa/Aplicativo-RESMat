import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/Telas/LayoutBase'
import Imagem from './src/components/Image'

function CustomDrawerContent(props, navigation) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('./src/img/triangulo.png')}
          style={{ width: 100, height: 100, color: 'black' }}>
        </Image>
        <Text>Teste</Text>
      </View>

      <View style={styles.container}>

        <View >
          <DrawerItem icon={() => <Imagem link={require("./src/img/triangulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
            style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Triangulo')} />
        </View>

        <View>
        <DrawerItem icon={() => <Imagem link={require("./src/img/trianguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('TrianguloVazado')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/circulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Circulo')} />
        </View>
        
        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/circuloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('CirculoVazado')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/quadrado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Quadrado')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/quadradoVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('QuadradoVazado')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/trapezio.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Trapezio')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/trapezioVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('TrapezioVazado')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/losangulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Losangulo2')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/losanguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('LosanguloVazado2')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/losangulo.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('Losangulo3')} />
        </View>

        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/losanguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('LosanguloVazado3')} />
        </View>
        
        <View style={{paddingTop:20}}>
        <DrawerItem icon={() => <Imagem link={require("./src/img/losanguloVazado.png")}  ></Imagem>} labelIcon={{ marginRigth: -10 }}
          style={styles.quadrados} label="" onPress={() => props.navigation.navigate('LosanguloVazado4')} />
        </View>

      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: '#D8CBE1',
        width: 300,
      }}>
      <Drawer.Screen name="Triangulo" component={Home} />
      <Drawer.Screen name="TrianguloVazado" component={Home} />
      <Drawer.Screen name="Circulo" component={Home} />
      <Drawer.Screen name="CirculoVazado" component={Home} />
      <Drawer.Screen name="Quadrado" component={Home} />
      <Drawer.Screen name="QuadradoVazado" component={Home} />
      <Drawer.Screen name="Trapezio" component={Home} />
      <Drawer.Screen name="TrapezioVazado" component={Home} />
      <Drawer.Screen name="Losangulo2" component={Home} />
      <Drawer.Screen name="LosanguloVazado2" component={Home} />
      <Drawer.Screen name="Losangulo3" component={Home} />
      <Drawer.Screen name="LosanguloVazado3" component={Home} />

    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <MyDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
    paddingTop: 30,
    width: 200,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    alignSelf: 'center',
    justifyContent:'space-around'



  },
  quadrados: {
    backgroundColor: '#C3ABD2',
    width: 72,
    height: 70,
    borderColor:'#652291',
    borderWidth: 2,
    borderRadius:20,
  },




})

