
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const firstRN = React.createClass({
  render() {
    return (
    <View>
      <View style={[styles.row_1,styles.height160]}> 
        <View style={styles.left_1}>
          <Text style={styles.font20}>1</Text>
        </View>
        <View style={styles.right_1}>
          <View style={styles.right_1_top}>
            <Text style={styles.font20}>2</Text>
          </View>
          <View style={styles.right_1_bottom}>
              <View style={styles.right_1_bottomLeft}>
               <Text style={styles.font20}>3</Text>
              </View>
              <View style={styles.right_1_bottomRight}>
               <Text style={styles.font20}>4</Text>
              </View>
          </View>
        </View>
      </View>
      <View style={[styles.row_1,styles.height160,{marginTop:10}]}> 
        <View style={styles.left_1}>
          <Text style={styles.font20}>1</Text>
        </View>
        <View style={styles.right_1}>
          <View style={styles.right_1_top}>
            <Text style={styles.font20}>2</Text>
          </View>
          <View style={styles.right_1_bottom}>
              <View style={styles.right_1_bottomLeft}>
               <Text style={styles.font20}>3</Text>
              </View>
              <View style={styles.right_1_bottomRight}>
               <Text style={styles.font20}>4</Text>
              </View>
          </View>
        </View>
      </View>  
    </View>



      )
  }
})

const styles = StyleSheet.create({
  right_1_top:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  right_1_bottom:{
    flex:1,
    flexDirection:'row',
  },
  right_1_bottomLeft:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
   right_1_bottomRight:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  font20:{
    fontSize:20,
  },
  height160:{
    height:160,
  },
  row_1:{
    flexDirection:'row',
    borderWidth:1,
    borderColor:'red',
  },
  left_1:{
    flex:1,
    borderWidth:1,
    borderColor:'red',
  },
  right_1:{
    flex:2,
    flexDirection:'column',
    borderWidth:1,
    borderColor:'red',
  }
})

AppRegistry.registerComponent('firstRN', () => firstRN);