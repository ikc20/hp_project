import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>Welcome to the App!</Text>

      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.openDrawer()}>
        <Text style={styles.navigationButtonText}>Open Drawer</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.navigationButtonText}>Go to Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navigationButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navigationButtonText}>Sign Up</Text>
      </TouchableOpacity>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8',
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
    backgroundColor: '#6C63FF', // Consistent color with other screens
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
