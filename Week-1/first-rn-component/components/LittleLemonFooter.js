import { View, Text } from 'react-native'
import React from 'react'

function LittleLemonFooter() {
    return (
        <View style={{
            backgroundColor: '#F4CE14', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%'
        }}>
            <Text>All rights reserved by Little Lemon, 2022</Text>
        </ View>
    )
}

export default LittleLemonFooter