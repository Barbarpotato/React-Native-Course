import * as React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.containerDepth}>
        <Image source={require('../assets/little-lemon-logo.png')} style={styles.logo} resizeMode='contain' />
        <Text style={styles.text}>Little Lemon, your local Mediteranian Bistro</Text>
      </View>
      <View>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate("Subscribe")}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Newsletter</Text>
        </Pressable>
      </View>
    </View >
  )
};

const styles = StyleSheet.create({
  containerDepth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    fontSize: 25,
    padding: 30,
    textAlign: 'center'
  },
  pressable: {
    backgroundColor: '#495e57',
    color: 'white',
    padding: 10,
    borderRadius: 8,
    margin: 5
  }
})

export default WelcomeScreen;
