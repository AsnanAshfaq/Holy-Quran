import React from 'react'
import { View, ImageBackground, FlatList, Text, StyleSheet, TouchableWithoutFeedback,StatusBar} from 'react-native'


export default function RenderList({ backImage, content, scroll, scrollAnimation, navigation }) {
    return (
        <ImageBackground
            resizeMode='cover'
            style={styles.container}
            source={backImage}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
            <FlatList
                data={content}
                onEndReachedThreshold={0.7}
                ListFooterComponent={scroll}
                onEndReached={() => scrollAnimation(false)}
                keyExtractor={(item, index) => item.juz}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback
                        onPress={() => navigation.navigate('ReadingJuz', { juzNumber: item.juz, title: item.name })}>
                        <View style={styles.nameContainer} key={item.juz}>
                            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Text style={styles.name}>{item.juz}</Text>
                            </View>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            />
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    nameContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '80%',
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        padding: 20,
        marginTop: 15,
        marginBottom: 10,
        marginHorizontal: 35
    },
    name: {
        fontSize: 24,
        color: 'white'
    }
})