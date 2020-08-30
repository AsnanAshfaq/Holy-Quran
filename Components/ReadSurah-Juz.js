import React, { useState, useEffect } from 'react'
import { View, ImageBackground, FlatList, Text, StyleSheet, StatusBar } from 'react-native'
import { isNetworkAvailable } from '../Global/Network'

export default function RenderContent({ backImage, content, scroll, setScrollAnimation }) {

    const [networkAvailable, setnetworkAvailable] = useState([])


    async function getNetwork() {
        const network = await isNetworkAvailable().then((data) => data)
        setnetworkAvailable(network)
    }

    useEffect(() => {
        console.log('getting ready')
        getNetwork()
    },[networkAvailable])


    if (networkAvailable.isConnected === true) {
        console.log("HURRAH")
        return (
            <ImageBackground
                blurRadius={1}
                resizeMode='cover'
                style={styles.container}
                source={backImage}>
                <View style={styles.container}>
                    <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
                    <FlatList
                        data={content}
                        onEndReachedThreshold={0.7}
                        ListFooterComponent={scroll}
                        onEndReached={() => setScrollAnimation(false)}
                        renderItem={({ item, index }) => (
                            <View key={index} style={styles.ayahContainer}>
                                <Text style={{ fontSize: 15, color: 'white' }}>
                                    .{index + 1}
                                </Text>
                                <Text style={{ fontSize: 23, color: 'white', paddingLeft: 15 }}>
                                    {'   '}{item.text}.
                                    </Text>
                            </View>
                        )}
                    />
                </View>
            </ImageBackground >
        )
    }
    else {
        console.log("Not connected")
        return(
            <View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ayahContainer: {
        flexDirection: 'row-reverse',
        borderTopWidth: 1,
        borderTopColor: 'white',
        padding: 7
    }
})