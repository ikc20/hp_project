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
import PerfumeScreen from './screens/PerfumeScreen';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DF8B92', // Couleur de l'en-tête modifiée
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
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Your Profile' }} />
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
              backgroundColor: '#6b3059', // Couleur de fond du Drawer
              width: 240, 
            },
            drawerActiveTintColor: '#DF8B92', // Texte actif en rose doux
            drawerInactiveTintColor: '#fff', // Texte inactif blanc
          }} 
        >
          <Drawer.Screen name="Home" component={HomeStack} />
          <Drawer.Screen name="Login" component={Login} options={{ title: 'Log In' }} />
          <Drawer.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="FlowerCategories" component={FlowerCategoriesScreen} options={{ title: 'Flowers Categories' }}/>
          <Drawer.Screen name="Perfume" component={PerfumeScreen} options={{ title: 'Our Perfumes' }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Pour couvrir tout l'écran
  },
});

export default App;
