import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Home from './screens/HomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import Profile from './screens/ProfileScreen';
import EditProfileScreen from './components/EditProfileScreen'; 
import 'react-native-gesture-handler';
import FlowerCategoriesScreen from './screens/FlowerCategoriesScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6C63FF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Welcome Back' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Become a member' }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Reset Password' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Your Profile' }} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <ImageBackground 
      source={require('./assets/pastel.png')}  
      style={styles.backgroundImage}
    >
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Login"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#ECCABF', // Changez cette couleur pour personnaliser
              width: 240, // Largeur de la barre latérale
            },
            drawerActiveTintColor: '#DF8B92', // Couleur du texte actif
            drawerInactiveTintColor: '#fff', // Couleur du texte inactif
          }} 
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
          <Drawer.Screen name="SignUp" component={SignUp} options={{ title: 'Create Account' }} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="FlowerCategories" component={FlowerCategoriesScreen} options={{ title: 'Flower Categories' }}/>
          <Drawer.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;