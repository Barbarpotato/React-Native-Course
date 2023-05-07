import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: '#EE9972' }}>
      <Text
        style={HeaderStyles.Headertext}>
        Little Lemon
      </Text>
    </View>
  );
}

const HeaderStyles = StyleSheet.create({
  Headertext: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  }
})