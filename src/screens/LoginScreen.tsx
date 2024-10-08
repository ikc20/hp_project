import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

// TypeScript interface pour les props
interface LoginProps {
  onLogin: (email: string, password: string) => void;
  navigation: any; // Add navigation prop if you're using it for Forgot Password
}

const Login: React.FC<LoginProps> = ({ onLogin, navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Fonction pour gérer la soumission du formulaire
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erreur', 'Veuillez entrer un email et un mot de passe.');
      return;
    }

    // Appel à la fonction de connexion
    onLogin(email, password);
  };

  // Fonction pour gérer le clic sur le lien "Mot de passe oublié ?"
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

      <Button title="Sign In" onPress={handleLogin} />

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
});

export default Login;
