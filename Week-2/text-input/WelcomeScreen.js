import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function WelcomeScreen() {

  const [firstName, setFirstName] = React.useState('')

  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder='First Name'
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 25,
    padding: 10
  }
});
