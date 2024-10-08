// screens/SignUpScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const SignUpScreen: React.FC<{ onSignUp: (email: string, password: string) => void }> = ({ onSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }
    onSignUp(email, password);
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 12, borderWidth: 1, borderColor: '#ccc', padding: 8 }}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 12, borderWidth: 1, borderColor: '#ccc', padding: 8 }}
      />
      <TextInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ marginBottom: 12, borderWidth: 1, borderColor: '#ccc', padding: 8 }}
      />
      <Button title="S'inscrire" onPress={handleSubmit} />
    </View>
  );
};

export default SignUpScreen;
