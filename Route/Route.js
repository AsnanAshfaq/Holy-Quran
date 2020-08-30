import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screenss/Home'
import Surah from '../Screenss/Surah'
import Juz from '../Screenss/Juz'
import surahReading from '../Screenss/Surah-Reading'
import juzReading from '../Screenss/Juz-Reading'
import { fromLeft } from 'react-navigation-transitions';
import { Constants } from 'expo'

const Routes = {
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        }
    },
    Surah: {
        screen: Surah,
        navigationOptions: {
            title: 'Read Surah',
            headerTintColor: 'white',
            headerMode:'float',
            headerStyle: { backgroundColor: 'black', },
            headerTitleStyle: { color: 'white' }
        }
    },
    Juz: {
        screen: Juz,
        navigationOptions: {
            title: 'Read Juz',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black' },
            headerTitleStyle: { color: 'white',}
        }
    },
    ReadingSurah: {
        screen: surahReading,
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('title'),
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black',  },
            headerTitleStyle: { color: 'white', fontSize: 30 }
        }),

    },
    ReadingJuz: {
        screen: juzReading,
        screenOptions:{
            gestureEnabled:true,
            gestureDirection:'horizontal'
        },
        navigationOptions: ({ navigation }) => ({
            title: navigation.getParam('title'),
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'black',},
            headerTitleStyle: { color: 'white', fontSize: 30 }
        }),
    },
    initialRouteName: 'Home',
    transitionConfig: () => fromLeft(1000),
}

const stackNavigator = createStackNavigator(Routes)

export default createAppContainer(stackNavigator)