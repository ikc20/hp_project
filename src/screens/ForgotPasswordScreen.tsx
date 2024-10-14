import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import axios from 'axios'; // Assurez-vous d'avoir installé axios

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Erreur', 'Veuillez entrer votre adresse email.');
      return;
    }

    try {
      // Remplacez l'URL par celle de votre API
      await axios.post('http://localhost:3000/reset-password', { email });
      Alert.alert('Succès', 'Un email de réinitialisation a été envoyé.');
      navigation.navigate('Login'); // Naviguer vers l'écran de connexion après l'envoi
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue lors de la réinitialisation du mot de passe.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Réinitialiser le mot de passe</Text>
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity style={styles.resetButton} onPress={handlePasswordReset}>
        <Text style={styles.resetButtonText}>Envoyer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Retour à la connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Pas encore de compte? S'inscrire</Text>
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
  resetButton: {
    backgroundColor: '#6C63FF', // Matching login button color
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  resetButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#6C63FF', // Matching link color
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 12,
  },
});

export default ForgotPasswordScreen;
