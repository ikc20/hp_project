import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/LoginScreen';
import Signup from './screens/SignupScreen';
const Stack = createStackNavigator();

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    if (email === 'mailto:test@example.com' && password === 'password123') {
      Alert.alert('Connexion réussie', `Bienvenue, ${email}!`);
      // Optionally navigate to another screen after successful login
    } else {
      Alert.alert('Erreur', 'Email ou mot de passe incorrect');
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login">
          {props => <Login {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
