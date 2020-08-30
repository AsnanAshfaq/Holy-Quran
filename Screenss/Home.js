import React,{useEffect} from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image, StatusBar } from 'react-native';
import bodyImage from '../Images/quran.jpg'


export default Home = ({ navigation }) => {

    function route(routeName) {
        navigation.navigate(routeName)
    }

    const CustomButtons = ({ routeName, text }) => {
        return (
            <TouchableWithoutFeedback
                style={styles.buttonContainer}
                onPress={() => route(routeName)}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    useEffect(()=>{
        
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true} />
            <View style={styles.HeaderContainer} >
                <Text style={styles.HeaderTitle}>THE HOLY QURAN</Text>
            </View>

            <View style={styles.BodyContainer}>
                <View style={styles.ImageContainer}>
                    <Image source={bodyImage} style={styles.Image} resizeMode='contain' />
                </View>

                <View style={styles.bodyButtonContainer}>

                    <CustomButtons routeName='Surah' text='Read Surah' />
                    <CustomButtons routeName='Juz' text='Read Juz' />
                    {/* <CustomButtons routeName='listenQuran' text='Listen Quran'/> */}

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    HeaderContainer: {
        flex: 1,
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    HeaderTitle: {
        fontSize: 30,
        color: 'white'
    },
    BodyContainer: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ImageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'black'
    },
    Image: {
        width: '100%',
        height: '100%'
    },
    bodyButtonContainer: {
        flex: 4,
        width: '100%',
        paddingTop:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    textContainer: {
        width: '70%',
        padding: 2,
        height: 40,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'white',
        margin: 20,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    }

})