import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

export default LoadingWithText = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color='black' size="large">
            </ActivityIndicator>
            <Text>Getting response from API</Text>
        </View>
    )
}

export function LoadingWithoutText  ({colorName})  {
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={colorName} size="large">
            </ActivityIndicator>
        </View>
    )
}