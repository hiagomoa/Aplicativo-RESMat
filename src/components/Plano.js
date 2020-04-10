import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Forma from './Formas/Formas'

export default class components extends Component {
  render() {
    return(
      <View >  
          <View >
            <Forma id={this.props.idnumber}/>
          </View>
      </View>
    ) ;
  }
}




