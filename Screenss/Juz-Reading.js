import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import LoadingWithText, { LoadingWithoutText } from '../Global/Loading'
import backgroundImage from '../Images/surah-reading-background.jpg'
import RenderContent from '../Components/ReadSurah-Juz'

export default juzReading = ({ navigation }) => {

    const [juzNumber, setjuzNumber] = useState(null)
    const [Loading, setLoading] = useState(true)
    const [Api, setData] = useState([])
    const [scrollAnimation, setScrollAnimation] = useState(true)

    async function fetchData() {

        const res = await fetch("http://api.alquran.cloud/v1/juz/" + juzNumber + "/quran-uthmani")
        const data = await res.json()
        setData(data)
        setLoading(false)
    }

    const scroll = () => {
        if (scrollAnimation) {
            return (
                <View>
                    <LoadingWithoutText colorName='white' />
                </View>
            )

        }
        else {
            return null
        }
    }

    useEffect(() => {
        if (Loading) {
            setjuzNumber(navigation.state.params.juzNumber)
            fetchData()
        }

    })


 
    
    if (Loading) return <LoadingWithText />
    else {

        if (Api.code == 200) {
            return (
                <RenderContent backImage={backgroundImage} content={Api.data.ayahs} scroll={scroll} setScrollAnimation={setScrollAnimation}/>
            )
        }
        else {
            return <LoadingWithText />
        }
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
