import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Slider, ImageBackground } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';

const Controller = () =>{
    return(
        <SafeAreaView style={styles.songController}>
            <Slider style={{marginHorizontal:2,marginTop:18}} minimumValue={0} maximumValue={1} 
                minimumTrackTintColor="#090A0B" 
                maximumTrackTintColor="#3C3C3C1A"
                thumbTintColor="#F5F5F5"/>
            <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:17}}>
                <Text style={{fontSize:10,color:"#090A0B", fontWeight:"700"}}>1:15</Text>
                <Text style={{fontSize:10,color:"#090A0B", fontWeight:"700"}}>3:30</Text>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginTop:20}}>
                <AntDesign name="banckward" size={24} color="#090A0B" style={{marginTop:12, marginLeft:10}}/>
                <View style={{borderRadius:50/2, backgroundColor: '#fff', width:50, height:50, alignItems:'center', marginTop:1}}>
                    <AntDesign name="caretright" size={30} style={{marginTop:8}} color="#090A0B" />
                </View>
                <AntDesign name="forward" size={24} color="#090A0B" style={{marginTop:12, marginRight:10}}/>
            </View>
            <View style={{flexDirection:"row", justifyContent:"space-between", marginHorizontal:20, marginTop:20}}>
                <Entypo name="shuffle" size={20} color="#3C3C3C" style={{marginTop:4}}/>
                <Entypo name="share" size={20} color="#090A0B" style={{marginTop:4}}/>
            </View>
        </SafeAreaView>
    );
}
export default Controller;
const styles=StyleSheet.create({
    songController: {
        marginTop:60, 
        marginBottom:10,
        marginHorizontal:25,
        height:180,
        backgroundColor:"rgba(255,255,255,0.25)",
        borderColor:"rgba(255,255,255,0.25)",
        shadowColor:"0 8 32 0 rgba(31,38,135,0.37)",
        borderWidth:2,
        borderRadius:10,
      },
})