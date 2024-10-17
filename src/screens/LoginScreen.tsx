import React, { useState } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
  navigation: any; // Add navigation prop if you're using it for Forgot Password
}

const Login: React.FC<LoginProps> = ({ onLogin, navigation }) => {
=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Login = ({ navigation }: { navigation: any }) => {
>>>>>>> 1ad9e9486cf49e64c684e2455a1093e18696503e
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false); // Loading state

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please fill in both fields');
    } else {
      Alert.alert('Success', 'Logged in successfully');
    }
<<<<<<< HEAD

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
=======
>>>>>>> 1ad9e9486cf49e64c684e2455a1093e18696503e
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

<<<<<<< HEAD
      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <Button title="Sign In" onPress={handleLogin} />
      )}

      <TouchableOpacity onPress={handleSignup} style={styles.signup}>
        <Text style={styles.signupText}>S'inscrire</Text>
=======
      {/* Link for Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
>>>>>>> 1ad9e9486cf49e64c684e2455a1093e18696503e
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    backgroundColor: '#fff',
    paddingLeft: 16,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
<<<<<<< HEAD
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
=======
  loginText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#6C63FF', // Couleur du lien
    textAlign: 'center',
>>>>>>> 1ad9e9486cf49e64c684e2455a1093e18696503e
    textDecorationLine: 'underline',
    marginTop: 12,
  },
});

export default Login;
