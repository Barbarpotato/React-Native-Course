import { View, Text } from 'react-native'
import React from 'react'

function WelcomeScreen() {
    return (
        <View style={{ justifyContent: 'center', flex: 0.8 }} >
            <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>Welcome to Little Lemon</Text>
            <Text style={{ marginTop: 30, color: 'white', textAlign: 'center', fontSize: 20 }} >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
        </ View>
    )
}

export default WelcomeScreen