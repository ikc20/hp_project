import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  navigation: any; // Add navigation prop if you're using it for Forgot Password
}

const Login: React.FC<LoginProps> = ({ onLogin, navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez entrer un email et un mot de passe.');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Erreur', 'Veuillez entrer un email valide.');
      return;
    }

    setLoading(true); // Start loading
    // Call the login function
    onLogin(email, password);
    // Reset loading state after the login process
    setLoading(false); 
  };

  const handleSignup = () => {
    // Navigate to signup screen
    navigation.navigate('Signup'); // Ensure 'Signup' matches your navigation route
  };

  const handleForgotPassword = () => {
    Alert.alert('Mot de passe oublié', 'Veuillez contacter le support pour réinitialiser votre mot de passe.');
    // Optionally, you can navigate to a dedicated screen for password recovery
    // navigation.navigate('ForgotPassword');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <Button title="Sign In" onPress={handleLogin} />
      )}

      <TouchableOpacity onPress={handleSignup} style={styles.signup}>
        <Text style={styles.signupText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e4f6fc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: '#900C3F',
    textDecorationLine: 'underline',
  },
  signup: {
    marginTop: 15,
    alignItems: 'center',
  },
  signupText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

export default Login;
