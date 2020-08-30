import React,{useEffect,useState} from 'react'
import { View } from 'react-native';
import LoadingWithText, { LoadingWithoutText } from '../Global/Loading'
import juzList from './JuzList.json'
import backgroundImage from '../Images/juz-bakcground.jpg'
import RenderList from '../Components/ListSurah-Juz'


export default  Juz = ({ navigation }) => {
    const [JuzList, setJuzList] = useState([])
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
            const data = juzList
            setJuzList(data)
            setLoading(false)
        }
    })


    if (Loading) return <LoadingWithText />
    else {
        return (
            <RenderList 
                backImage={backgroundImage} 
                content={JuzList.juz} 
                scroll={scroll} 
                scrollAnimation={setScrollAnimation} 
                navigation={navigation}/>
        )
    }
}

