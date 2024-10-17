import React from 'react';
<<<<<<< HEAD
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
=======
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Autho/Login';
import SignUp from './Autho/SignUp';
import Home from './Autho/Home';
import Profile from './Autho/Profile';
import ForgotPasswordScreen from './Autho/ForgotPassword'; // Importer l'écran de réinitialisation du mot de passe

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6C63FF', // Couleur de fond de l'en-tête
          },
          headerTintColor: '#fff', // Couleur du texte de l'en-tête
          headerTitleStyle: {
            fontWeight: 'bold', // Style du titre
          },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Welcome Back' }} // Titre pour l'écran de connexion
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ title: 'Create Account' }} // Titre pour l'écran d'inscription
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ title: 'Reset Password' }} // Titre pour l'écran de réinitialisation du mot de passe
        />
>>>>>>> 1ad9e9486cf49e64c684e2455a1093e18696503e
      </Stack.Navigator>
    </NavigationContainer>
  );
}
