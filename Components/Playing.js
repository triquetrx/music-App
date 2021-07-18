import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider, ImageBackground } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {LinearGradient} from 'expo-linear-gradient';
import SongImage from './SongImage';
import Controller from './Controller';

const Playing=() =>{
  return(
    <View style={styles.container}>
        <SafeAreaView style={{alignSelf:"stretch", marginTop:15}}>
            <View style={{marginHorizontal:20, marginTop:32}}>
                <View style={styles.navBar}>
                    <AntDesign name="left" size={20} color="#090A0B" />
                    <View>
                        <Text style={styles.playing}>Now Playing</Text>
                    </View>
                    <AntDesign name="menu-unfold" size={20} color="#3C3C3C" />
                </View>
                <SongImage />
                <View style={styles.songDetails}>
                    <Text style={{fontSize:30,color:"#090A0B",fontWeight:"600", alignItems:"flex-start",marginStart:30}}>Victorious</Text>
                    <Text style={{fontSize:14, color:"#3C3C3C", marginTop:3,fontWeight:"400", alignItems:"flex-start",marginStart:30}}>The Score</Text>
                    <View style={{alignItems:"flex-end",alignItems:"flex-end", marginTop:-45, marginEnd:30}}>
                        <AntDesign name="heart" size={20} color="#EE2E31" />
                    </View>
                </View>
                <Controller />
            </View>
            <View style={styles.songLyrics}>
                <Text style={{fontSize:20, alignSelf:"center"}}>LYRICS</Text>
            </View>
            <LinearGradient colors={['#fff', 'rgba(162,208,247,0.8)']} style={styles.back}/>
        </SafeAreaView>
    </View>
  );
}
export default Playing;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      color:"#090A0B",
      backgroundColor: "#fff",
      alignItems: "center",
    },
    back:{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -50,
      height: 700,
      zIndex:-2
    },
    navBar:{
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    inner:{
      backgroundColor: "#fff",
      alignItems:"center",
      justifyContent: "center",
      borderColor:"#fff",
    },
    topShadow:{
      shadowOffset: {
        width:-20,
        height:-20,
      },
      shadowOpacity: 100,
      shadowRadius: 30,
      shadowColor: "#fff",
    },
    bottomShadow:{
      shadowOffset: {
        width:20,
        height:20
      },
      shadowOpacity:100,
      shadowRadius:30,
      shadowColor: "#d0d0d0"
    },
    playing: {
      color: "#090A0B",
      fontWeight: "400"
    },
    songLyrics: {
      height:40,
      borderRadius:10,
      zIndex:99,
      backgroundColor:"rgba(255,255,255,0.3)",
      marginTop:30,
      marginHorizontal:25,
      textAlign:"center",
      justifyContent:"center"
    }
  });