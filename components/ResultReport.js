import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {getScaleFromWheight, messageWeight} from '../utils/Functions'

const ResultReport = (props) => {
    return (
        <View style={[styles.box, styles.border]}>
            <Text style={styles.resultText}>
                You are {getScaleFromWheight(props.result)}.
            </Text>
            <Text style={[styles.resultText]}>
                {messageWeight (props.weight, props.height, props.result)}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#9426c9',
        marginBottom: 60
    },
    border:{
        borderColor:'white',
        borderWidth: 3,
        borderRadius: 20,
    },
    resultText:{
      paddingTop: 5,
      color:'white',
      textAlign:'center',
      fontSize: 27
    },
  });

export default ResultReport;