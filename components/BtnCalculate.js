import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const BtnCalculate = (props) => {
    return (
        <View style={styles.box}>
        <TouchableHighlight
          style={styles.btnCalc}
          onPress={props.press}
            >
          <Text style={styles.txtBtn}>{props.text}</Text>
        </TouchableHighlight>
      </View>
    );
};

const styles = StyleSheet.create({
    box:{
      marginBottom: 20
    },
    txtBtn:{
      fontSize:15,
      textTransform:'uppercase',
      color:'#fff'
    },
    btnCalc:{
        backgroundColor:'#04562c',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:15
    },
});

export default BtnCalculate;