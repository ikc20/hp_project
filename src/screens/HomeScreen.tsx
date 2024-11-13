import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Animated, Easing } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  PromoScreen: undefined;
  BodyProductsScreen: undefined;
  PerfumeScreen: undefined;
  CreditCardScreen : undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground source={require('../assets/red.png')} style={styles.backgroundImage}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome to Our Store!</Text>
        <Text style={styles.subtitle}>
          Your one-stop shop for beautiful exclusive products and perfumes
        </Text>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navigationButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navigationButtonText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('PromoScreen')}>
          <Text style={styles.navigationButtonText}>Promo Of The Week</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('BodyProductsScreen')}>
          <Text style={styles.navigationButtonText}>Our Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('PerfumeScreen')}>
          <Text style={styles.navigationButtonText}>Our Perfumes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('CreditCardScreen')} >
        <Text style={styles.navigationButtonText}>Credit Card</Text>

        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(240, 244, 248, 0.7)',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#34495E',
    marginBottom: 40,
    textAlign: 'center',
  },
  navigationButton: {
    backgroundColor: '#E74C3C',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
