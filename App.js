/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  TextInput
} from 'react-native';

const App: () => React$Node = () => {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)

  const calcImc=()=>{
    if(weight<=0 || !weight){
      alert('Inform your Weight!') 
      setResult(0)
      return
    }
    if(height<=0 || !height){
      alert('Inform your Height!'); 
      setResult(0)
      return
    }

    const res = weight/(Math.pow(height,2))
    setResult(res.toFixed(1))
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.box}>
        <Text>Calculadora de IMC</Text>
      </View>
      <View  style={styles.box}>
        <Text>Inform you weight:</Text>
        <TextInput
          style={styles.txtInput}
          autoFocus={true}
          keyboardType="numeric"
          value={weight}
          onChangeText={value=>setWeight(value)}
        >

        </TextInput>
      </View>
      <View style={styles.box}>
        <Text>Inform you height:</Text>
        <TextInput
          style={styles.txtInput}
          autoFocus={true}
          keyboardType="numeric"
          value={height}
          onChangeText={value=>setHeight(value)}
        >

        </TextInput>
      </View>
      <View style={styles.box}>
        <TouchableHighlight
          style={styles.btnCalc}
          onPress={()=>calcImc()}
        >
          <Text style={styles.txtBtn}>Calculate IMC</Text>
        </TouchableHighlight>
      </View>
      {result ? <View style={styles.box}>
        <Text>Result: {result}</Text>

      </View> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
    padding:10
  },
  box:{
    marginBottom: 20
  },
  txtInput:{
    width:'100%',
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
  },
  btnCalc:{
    backgroundColor:'#04562c',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:15
  },
  txtBtn:{
    fontSize:15,
    textTransform:'uppercase',
    color:'#fff'
  }
});

export default App;
