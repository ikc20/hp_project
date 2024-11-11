import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

// Import screens
import Login from './screens/LoginScreen';
import SignUp from './screens/SignUpScreen';
import Home from './screens/HomeScreen';
import Profile from './screens/ProfileScreen';
import HomePerfume from './screens/PromoScreen';
import PerfumeScreen from './screens/PerfumeScreen';
import BodyProductsScreen from './screens/BodyProductsScreen';
import BlushersScreen from './screens/BlushersScreen';
import PromoScreen from './screens/PromoScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import MascaraScreen from './screens/MascaraScreen';
import CartScreen from './screens/CartScreen';

// Define types for navigation parameters
type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  Profile: undefined;
  HomePerfume: undefined;
  PerfumeScreen: undefined;
  BlushersScreen: undefined;
  ForgotPassword: undefined;
  Cart: undefined;
  OrderConfirmationScreen: {
    orderId: string;
    totalAmount: string;
    items: Array<{ name: string; quantity: number; price: string }>;
  };
};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#DF8B92' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="HomePerfume" component={HomePerfume} />
    <Stack.Screen name="PerfumeScreen" component={PerfumeScreen} />
    <Stack.Screen name="BlushersScreen" component={BlushersScreen} options={{ title: 'Make-Up' }} />
    <Stack.Screen name="Cart" component={CartScreen} />
    {/* Add other screens as necessary */}
  </Stack.Navigator>
);

const App = () => (
  <ImageBackground source={require('./assets/pastel.png')} style={styles.backgroundImage}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="HomeStack"
        screenOptions={{
          drawerStyle: { backgroundColor: '#6b3059', width: 240 },
          drawerActiveTintColor: '#DF8B92',
          drawerInactiveTintColor: '#fff',
          drawerLabelStyle: { fontWeight: 'bold' },
          drawerType: 'slide',
        }}
      >
        <Drawer.Screen name="HomeStack" component={HomeStack} options={{ title: 'Home' }} />
        <Drawer.Screen name="Body-Pack" component={BodyProductsScreen} options={{ title: 'Body-Pack' }} />
        <Drawer.Screen name="Blushers" component={BlushersScreen} options={{ title: 'Make-Up' }} />
        <Drawer.Screen name="Our-Promo" component={PromoScreen} options={{ title: 'Our exclusive promos' }} />
        <Drawer.Screen name="Our perfumes" component={PerfumeScreen} options={{ title: 'Our Perfumes' }} />
        <Drawer.Screen name="Our Mascaras" component={MascaraScreen} options={{ title: 'Our Mascaras' }} />
        <Drawer.Screen name="Cart" component={CartScreen} options={{ title: 'Cart' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  </ImageBackground>
);

const styles = StyleSheet.create({
  backgroundImage: { flex: 1, resizeMode: 'cover' },
});

export default App;
