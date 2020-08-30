import React, { useState, useEffect } from 'react';
import { View} from 'react-native';
import LoadingWithText, { LoadingWithoutText } from '../Global/Loading'
import RenderList from '../Components/ListSurah-Juz'
import backgroundImage from '../Images/surah-bakcground.jpg'

export default Surah = ({ navigation }) => {

    const [SurahList, setSurahList] = useState([])
    const [Loading, setLoading] = useState(true)
    const [scrollAnimation, setScrollAnimation] = useState(true)


    const scroll = () => {
        if (scrollAnimation) {
            return (
                <View>
                    <LoadingWithoutText colorName='white'/>
                </View>
            )
        }
        else {
            return null
        }
    }

    useEffect(() => {
        if (Loading) {
            const data = require('./SurahList.json');
            setSurahList(data)
            setLoading(false)
        }
    })


    if (Loading) return <LoadingWithText />
    else {
    
        return (
            <RenderList 
                backImage={backgroundImage} 
                content={SurahList.surat} 
                scroll={scroll} 
                scrollAnimation={setScrollAnimation} 
                navigation={navigation}/>
            
        )
    }
}

