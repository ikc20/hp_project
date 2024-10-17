// ForgotPasswordScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const ForgotPasswordScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState<string>('');

  const handleResetPassword = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
    } else {
      // Add your password reset logic here (API call, etc.)
      Alert.alert('Reset Link Sent', 'Check your email to reset your password!');
      navigation.navigate('Login'); // Navigate back to login after request
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.backToLoginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  resetButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    width: '100%',
    borderRadius: 10,
    marginBottom: 16,
  },
  resetButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backToLoginText: {
    color: '#6C63FF',
    fontSize: 16,
    marginTop: 12,
  },
});

export default ForgotPasswordScreen;
