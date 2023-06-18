import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator initialRouteName="Login"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Welcome') iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
                else iconName = 'ios-list'
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray'
            })}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});

