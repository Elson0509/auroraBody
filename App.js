/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, Fragment} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import InputBox from './components/InputBox'
import BtnCalculate from './components/BtnCalculate'
import TableBMI from './components/TableBMI'

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
        <Text>BMI Calculator</Text>
      </View>
      <InputBox text="Inform you weight:" value={weight} changed={value=>setWeight(value)}/>
      <InputBox text="Inform you height:" value={height} changed={value=>setHeight(value)}/>
      <BtnCalculate text="Calculate" press={()=>calcImc()}/>
      {result ? 
        <Fragment>
          <View style={styles.box}>
            <Text>Result: {result}</Text>
          </View>
          <View style={styles.box}>
            <TableBMI weight={result}/>
          </View>
        </Fragment>
       : null}
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
  imgTable:{
    width:'100%',
    resizeMode:'contain',
    marginTop:-120
  }
});

export default App;
