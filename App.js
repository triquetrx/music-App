import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider, ImageBackground } from 'react-native';
import Playing from './Components/Playing';
import Login from './Components/Login';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      productionCount: 0
    }
  }
  render(){
    return(
      <View style={styles.container}>
        <Login />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color:"#090A0B",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});