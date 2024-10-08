import React from 'react';
import { Alert } from 'react-native';
import Login from './screens/LoginScreen';
import Routes from './screens/routes';


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    
    if (email === 'test@example.com' && password === 'password123') {
      Alert.alert('Connexion réussie', `Bienvenue, ${email}!`);
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
      
    }
  };

  return (
    
    <Login onLogin={handleLogin} navigation={undefined} />
  );
};

export default App;
