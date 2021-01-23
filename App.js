/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import InputBox from './components/InputBox'
import BtnCalculate from './components/BtnCalculate'
import TableBMI from './components/TableBMI'
import ResultBox from './components/ResultBox'

const App: () => React$Node = () => {

  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState(0)

  const calcImc=()=>{
    if(weight<=0 || !weight){
      alert('Please, inform your Weight!') 
      setResult(0)
      return
    }
    if(height<=0 || !height){
      alert('Please, inform your Height!'); 
      setResult(0)
      return
    }

    const res = weight/(Math.pow(height/100,2))
    setResult(res.toFixed(1))
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.body}>
      <View style={[styles.box, styles.borderBottomTitle]}>
        <Text style={styles.fontTitle}>Aurora Body</Text>
        <Text style={styles.fontTitle}>BMI Calculator</Text>
      </View>
      <InputBox text="Weight (Kg):" value={weight} changed={value=>setWeight(value)}/>
      <InputBox text="Height (cm):" value={height} changed={value=>setHeight(value)}/>
      <BtnCalculate text="Calculate" press={()=>calcImc()}/>
      {result ? 
        <Fragment>
          <ResultBox result={result}/>
          <View style={styles.box}>
            <TableBMI weight={result}/>
          </View>
        </Fragment>
       : null}
       </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body:{
    padding:10,
    backgroundColor:'#8e5da6',
    minHeight:'100%'
  },
  fontTitle:{
    textAlign:'center',
    color:'white',
    fontSize:22,
    paddingBottom: 5,
    fontFamily:'serif',
    fontWeight:'bold',
    letterSpacing:2,
  },
  box:{
    marginBottom: 20
  },
  borderBottomTitle:{
    borderBottomColor:'white',
    borderBottomWidth: 3,
  },
  borderTop:{
    borderTopColor:'white',
    borderTopWidth: 1,
  },
  resultText:{
    paddingTop: 15,
    color:'white',
    textAlign:'center',
  },
  sizeText:{
    fontSize:20
  },
  sizeResult:{
    fontSize:40
  }
});

export default App;
