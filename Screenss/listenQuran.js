import React from 'react'
import { View, Text, TouchableOpacity, Platform } from 'react-native'
// import SoundPlayer from 'react-native-sound-player'
// import Sound from 'react-native-sound'
// import Audio from 'expo-av'


export default listenQuran = () => {



    const playQuran = async () => {
        console.log("Preparing to play sound ")
        // file = require('./audio.mp3')
        // const soundObject = new Audio.Sound();
        // try {
        //     await soundObject.loadAsync(
        //         {uri : require('./audio.mp3')}
        //     );
        //     await soundObject.playAsync();
        //     // Your sound is playing!
        //     console.log("PLaying")
        // } catch (error) {
        //     // An error occurred!
        //     console.log(error)
        // }
    }

    return (
        <View>
            <TouchableOpacity onPress={playQuran}>
                <Text>This is the Listening Quran Screen</Text>
            </TouchableOpacity>
        </View>
    )
}