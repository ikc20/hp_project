import React, { useEffect } from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Home from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import PerfumeScreen from './screens/PerfumeScreen';
import BodyProductsScreen from './screens/BodyProductsScreen';
import BlushersScreen from './screens/BlushersScreen';
import PromoScreen from './screens/PromoScreen';
import MascaraScreen from './screens/MascaraScreen';
import CartScreen from './screens/CartScreen';
import CreditCardScreen from './screens/CreditCardScreen';
import 'react-native-gesture-handler';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  HomePerfume: undefined;
  PerfumeScreen: undefined;
  BlushersScreen: undefined;
  Cart: undefined;
  CreditCardScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#DF8B92' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="PerfumeScreen" component={PerfumeScreen} />
      <Stack.Screen name="BlushersScreen" component={BlushersScreen} options={{ title: 'Make-Up' }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} options={{ title: 'Credit Card' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  // Make sure to use the StripeProvider correctly
  return (
    <StripeProvider publishableKey="your-publishable-key">
      <ImageBackground source={require('./assets/pastel.png')} style={styles.backgroundImage}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#6b3059',
                width: 240,
              },
              drawerActiveTintColor: '#DF8B92',
              drawerInactiveTintColor: '#fff',
              drawerLabelStyle: {
                fontWeight: 'bold',
              },
              drawerType: 'slide',
            }}
          >
            <Drawer.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
            <Drawer.Screen name="Body-Pack" component={BodyProductsScreen} options={{ title: 'Body-Pack' }} />
            <Drawer.Screen name="Blushers" component={BlushersScreen} options={{ title: 'Make-Up' }} />
            <Drawer.Screen name="Our-Promo" component={PromoScreen} options={{ title: 'Our exclusive promos' }} />
            <Drawer.Screen name="Our Perfumes" component={PerfumeScreen} options={{ title: 'Our Perfumes' }} />
            <Drawer.Screen name="Our Mascaras" component={MascaraScreen} options={{ title: 'Our Mascaras' }} />
            <Drawer.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ImageBackground>
    </StripeProvider>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default App;
