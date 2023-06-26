import * as React from 'react';
import {
  View, StyleSheet, Image, Text,
  TextInput, Button, Alert
} from 'react-native';
import { validateEmail } from '../utils';

const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = React.useState("")

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/little-lemon-logo-grey.png')} resizeMode='contain' />
      <Text style={styles.text}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput style={styles.textInput} value={email} onChangeText={onChangeEmail} placeholder='Type your email' />
      <Button
        onPress={() => {
          Alert.alert('', 'Thanks for subscribing, stay tuned!', [{
            text: 'OK',
            onPress: () => onChangeEmail("")
          }])
        }}
        disabled={!validateEmail(email)} color={'#495e57'} title='Subscribe' style={styles.button}></Button>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    margin: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  textInput: {
    borderColor: '#495e57',
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    width: 300
  },
  button: {
    paddingTop: 15,
    width: 300
  }
})

export default SubscribeScreen;
