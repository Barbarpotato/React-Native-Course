import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View
        style={AppStyles.HeaderContainer}>
        <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={AppStyles.FooterContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const AppStyles = StyleSheet.create({
  HeaderContainer: {
    flex: 1,
    backgroundColor: '#333333',
  },
  FooterContainer: {
    backgroundColor: '#495E57'
  }
})