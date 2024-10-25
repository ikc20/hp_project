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
        <Text style={styles.subtitle}>Your one-stop shop for beautiful exclusive products and perfumes</Text>


      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navigationButtonText}>Log In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.navigationButtonText}>Create an Account</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('HomePerfume')}>
          <Text style={styles.navigationButtonText}>Promo Of The Week</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('BodyProductsScreen')}>
          <Text style={styles.navigationButtonText}>Our Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('PerfumeScreen')}>
          <Text style={styles.navigationButtonText}>Our Perfumes</Text>
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
    backgroundColor: 'rgba(240, 244, 248, 0.8)', // Slightly darker overlay for better contrast
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2C3E50', // Darker color for better readability
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#34495E', // Darker color for better readability
    marginBottom: 40,
    textAlign: 'center',
  },
  navigationButton: {
    backgroundColor: '#E74C3C', // Changed to a more vibrant red
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25, // More rounded corners for a modern look
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000', // Shadow effect for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // For Android shadow effect
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;