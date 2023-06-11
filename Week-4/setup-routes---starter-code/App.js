import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LittleLemonHeader from './components/LittleLemonHeader'
import LittleLemonFooter from './components/LittleLemonFooter'
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <View >
        <LittleLemonHeader />
      </View>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerStyle: { backgroundColor: '#ec9973' } }}>
        <Stack.Screen options={{ title: 'Little Lemon' }} name='Welcome' component={WelcomeScreen} />
        <Stack.Screen options={{ title: 'Little Lemon' }} name='Login' component={LoginScreen} />
      </Stack.Navigator>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

