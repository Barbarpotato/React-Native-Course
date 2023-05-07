import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={FooterStyles.InnerFooterContainer}>
      <Text
        style={FooterStyles.FooterText}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View >
  );
}

const FooterStyles = StyleSheet.create({
  InnerFooterContainer: {
    backgroundColor: '#EE9972',
    marginBottom: 10,
  },
  FooterText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  }
})