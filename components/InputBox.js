import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

const InputBox = (props) => {
    return (
        <View style={styles.box}>
            <Text style={styles.labelStyle}>{props.text}</Text>
            <TextInput
                style={styles.txtInput}
                autoFocus={true}
                keyboardType="numeric"
                value={props.value}
                onChangeText={props.changed}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    box:{
      marginBottom: 20
    },
    txtInput:{
      width:'100%',
      borderWidth:1,
      borderColor:'black',
      borderRadius:10,
      fontSize:20,
      textAlign:'center'
    },
    labelStyle:{
      fontSize:22,
      marginBottom:5
    }
});

export default InputBox;