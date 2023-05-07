import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={{ flex: 1, }}>
      <Text
        style={WelcomeScreenStyles.WelcomeHeader}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={WelcomeScreenStyles.WelcomeText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
}

const WelcomeScreenStyles = StyleSheet.create({
  WelcomeHeader: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center'
  },
  WelcomeText:
  {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center'
  }
})