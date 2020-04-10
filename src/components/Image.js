import React from 'react';
import {
    StyleSheet,
    View,
    Image, Text,
} from 'react-native';

export default props => {
    return(
      <View>
      <Image source={props.link}
             style={{width:50, height:50}}>
      </Image>
      
      </View>
    )
  }