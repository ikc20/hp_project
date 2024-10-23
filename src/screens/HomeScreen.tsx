import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <ImageBackground 
      source={require('../assets/blue.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Our Store!</Text>
        <Text style={styles.subtitle}>Your one-stop shop for beautiful flowers and perfumes</Text>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navigationButtonText}>Create an Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navigationButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('HomePerfume')}>
          <Text style={styles.navigationButtonText}>Promo Of The Week</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('FlowerCategoriesScreen')}>
          <Text style={styles.navigationButtonText}>Shop Flowers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('ContactScreen')}>
          <Text style={styles.navigationButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(240, 244, 248, 0.7)', // Optional overlay for better text readability
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  navigationButton: {
    backgroundColor: '#DF8B92',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
