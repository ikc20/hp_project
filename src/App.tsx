import React from 'react';
import { StripeProvider } from '@stripe/stripe-react-native';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from './screens/ProfileScreen';
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Home from './screens/HomeScreen';
import EditProfile from './screens/EditProfile';
import PerfumeScreen from './screens/PerfumeScreen';
import BodyProductsScreen from './screens/BodyProductsScreen';
import BlushersScreen from './screens/BlushersScreen';
import PromoScreen from './screens/PromoScreen';
import MascaraScreen from './screens/MascaraScreen';
import CartScreen from './screens/CartScreen';
import CreditCardScreen from './screens/CreditCardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
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
      <Stack.Screen name="PromoScreen" component={PromoScreen} options={{ title: 'Promos' }} />
      <Stack.Screen name="Login" component={Login} options={{ title: 'Sign In' }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfile} options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />

      <Stack.Screen name="BodyProductsScreen" component={BodyProductsScreen} options={{ title: 'Our B-Products' }} />
      <Stack.Screen name="PerfumeScreen" component={PerfumeScreen} />
      <Stack.Screen name="BlushersScreen" component={BlushersScreen} options={{ title: 'Make-Up' }} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} options={{ title: 'Credit Card' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <StripeProvider publishableKey="pk_test_51PayWeRsGYjzqkNXVpxUAHvuURBrYRcrpLt6EGet2MDXmSwR4mfwvgi8sqAKliFRijUBZbcJ6mYhPBVvmbAX8ds800AvBgXnWY">
      <ImageBackground source={require('./assets/pastel.png')} style={styles.backgroundImage}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#cc7c84',
                width: 240,
              },
              drawerActiveTintColor: '#6b3059',
              drawerInactiveTintColor: '#fff',
              drawerLabelStyle: {
                fontWeight: 'bold',
              },
              drawerType: 'slide',
            }}
          >
            <Drawer.Screen name="Home" component={HomeStack} options={{ title: 'Home' }} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
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