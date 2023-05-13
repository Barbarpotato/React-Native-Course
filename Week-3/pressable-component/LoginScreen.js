import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable, Alert, View } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  const [isLogin, setIsLogin] = useState(false)

  const handleUserInput = () => {
    if (!password || !email) return Alert.alert('Please Fill the Input!')
    else setIsLogin(!isLogin)
  }


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {!isLogin && (
        <React.Fragment>
          <Text style={styles.regularText}>Login to continue </Text>
          <TextInput
            style={styles.inputBox}
            value={email}
            onChangeText={onChangeEmail}
            placeholder={'email'}
            keyboardType={'email-address'}
          />
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={onChangePassword}
            placeholder={'password'}
            keyboardType={'default'}
            secureTextEntry={true}
          />
          <View style={styles.loginContainer}>
            <Pressable onPress={handleUserInput} style={styles.loginButton}>
              <Text style={styles.loginText}>
                Log In
              </Text>
            </Pressable>
          </View>
        </React.Fragment>
      )}
      {isLogin && (
        <Text style={styles.regularText}>
          You are logged in!
        </Text>
      )}
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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  loginContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: '#EE9972',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 30
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
});
