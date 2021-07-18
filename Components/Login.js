import React,{Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import Playing from './Playing';

const image={uri: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"};

const Login = () =>{
    const [text, onChangeText]=React.useState(null);
    const [onChangePassword] = React.useState(null);
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backdrop}>
                <View style={{backgroundColor:'rgba(0,0,0,0.7)',height:'100%',width:'100%'}}>
                    <Text style={styles.headline}>MUSIFY</Text>
                    <Text style={styles.label}>userId</Text>
                    <TextInput style={styles.useridInput} onChangeText={onChangeText} placeholder="userId/ E-mail" textContentType="username" value={text} autocorrect={false} placeholderTextColor="#17171280"/>
                    <Text style={styles.label}>password</Text>
                    <TextInput style={styles.userPassword} onChangeText={onChangePassword} placeholder='password' textContentType="password" secureTextEntry={true} autocorrect={false} placeholderTextColor="#17171280"/>
                    <TouchableOpacity style={{height:40,marginHorizontal:100, marginBottom:20, borderRadius: 50,justifyContent:'center',backgroundColor:'#3772FF', marginTop:60}} onPress={()=> navigation.navigate('Playing')} activeOpacity='0.8'>
                        <Text style={{fontSize:20, color:'#EDE7D9', textAlign:'center', fontWeight:'bold'}}>Login</Text>
                    </TouchableOpacity>
                    <Text style={styles.forgotPassword}>Forgot Password?</Text>
                    <Text style={styles.signup}>New User</Text>
                </View>
            </ImageBackground>
            
        </SafeAreaView>
    );
}

export default Login;

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3C3C3C1A',
        fontFamily:'san-serif'
    },
    backdrop:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    },
    headline:{
        color: "white",
        fontSize: 42,
        fontFamily:'Roboto',
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        margin:60,
        marginTop:100,
        letterSpacing:10,
    },
    label:{
        marginLeft:44,
        marginBottom: -25,
        color:'#EDE7D9'
    },
    useridInput:{
        color: "#040403",
        height:40,
        margin:30,
        fontSize: 22,
        fontFamily:'sans-serif',
        textAlign: 'left',
        paddingLeft:17,
        backgroundColor:"#BCE4F79A",
        borderRadius: 20,
        marginBottom:50
    },
    userPassword: {
        color: "#040403",
        height:40,
        margin:35,
        textAlign:'left',
        paddingLeft:17,
        fontSize: 22,
        backgroundColor:"#BCE4F780",
        borderRadius: 20,
        fontFamily:'sans-serif'
    },
    forgotPassword:{
        position:'absolute',
        bottom:400,
        left:50,
        color: "#F3F4F7",
        justifyContent:'center',
        fontSize: 10,
    },
    signup:{
        color: "#F3F4F7",
        textAlign:'center',
        fontSize: 15,
        marginTop: -13,
        fontFamily:'notoserif',

    },
    back:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -50,
        height: 700,
        zIndex:-2
    },
    button:{
        height:100,
        margin:20
    }
})
