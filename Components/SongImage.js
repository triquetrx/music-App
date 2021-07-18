import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

const SongImage=()=>{
    return(
        <View style={styles.songPlayingCover}>
            <Image source={require('./images/imagineDragons.jpg')} style={styles.previousSong} />
            <Image source={require('./images/score.jpg')} style={styles.songArt} />
            <Image source={require('./images/mouthoftheriver.jpg')} style={styles.nextSong} />
        </View>
    );
    
}
export default SongImage
const styles = StyleSheet.create({
    songPlayingCover: {
        marginTop:50,
        marginBottom:20,
        justifyContent: "space-between",
        flexDirection: "row"
    },
    songArt:{
        marginTop:10,
        width:300,
        height:300
    },  
    previousSong: {
        marginTop:55,
        width:200,
        height:200,
        marginLeft: -187,
        marginRight:15,
        opacity:0.5
    },
    nextSong: {
        marginTop:55,
        width:200,
        height:200,
        marginLeft:15,
        opacity:0.5
    },
})