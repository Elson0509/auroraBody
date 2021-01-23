import React from 'react';
import {
    StyleSheet,
    View,
  } from 'react-native';
import { Table, Row} from 'react-native-table-component';

const TableBMI = (props) => {
    const tableHead = ['Weight Status', 'BMI']
    const tableBody = [
        ['Underweight', '<18.5'],
        ['Normal', '18.5 - 24.9'],
        ['Overweight', '25.0 - 29.9'],
        ['Obese Class I', '30.0 - 34.9'],
        ['Obese Class II', '35.0 - 39.9'],
        ['Obese Class III', '≥39.9'],
    ]
    const getIndexScale = (weight) =>{
        if(weight < 18.5)
            return 0
        else if(weight <=24.9)
            return 1
        else if(weight <=29.9)
            return 2
        else if(weight <=34.9)
            return 3
        else if(weight <=39.9)
            return 4
        else
            return 5
    }

    return (
        <View>
            <Table>
                <Row data={tableHead} style={styles.head} textStyle={[styles.textCenter, styles.textSizeHeader, styles.textStyleHeader]}/>
                {tableBody.map((el, ind) => (
                    <Row 
                        key={ind} 
                        data={el} 
                        style={[styles.bodyRow, props.weight && getIndexScale(props.weight)==ind ? styles.bodyRowMarkedColor : styles.bodyRowNormalColor]} 
                        textStyle={[styles.textCenter, styles.textSizeBody]}
                    />
                ))}
            </Table>
        </View>
    );
};

const styles = StyleSheet.create({
    head:{
        height: 40,
        backgroundColor:'#ccc',
    },
    textSizeHeader:{
        fontSize:25
    },
    textStyleHeader:{
        fontWeight:"bold",
        letterSpacing:1
    },
    textSizeBody:{
        fontSize:20
    },
    bodyRow:{
        borderBottomColor:'black',
        borderBottomWidth:1,
        paddingVertical:4
    },
    bodyRowNormalColor:{
        backgroundColor:'#f5efdf',
    },
    bodyRowMarkedColor:{
        backgroundColor:'#f59b7d',
    },
    textCenter:{
        textAlign:'center'
    }
    
})

export default TableBMI;