// ContactScreen.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactScreen = () => {
  const handlePhonePress = async () => {
    const url = 'tel:+33123456789';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error('Phone number is not supported');
    }
  };

  const handleEmailPress = async () => {
    const url = 'mailto:contact@mybusiness.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error('Email address is not supported');
    }
  };

  const handleWebsitePress = async () => {
    const url = 'https://www.mybusiness.com';
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.error('Website is not supported');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
        <Icon name="phone" size={30} color="#DF8B92" accessibilityLabel="Phone number" />
        <Text style={styles.contactText}>+33 1 23 45 67 89</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
        <Icon name="envelope" size={30} color="#DF8B92" accessibilityLabel="Email address" />
        <Text style={styles.contactText}>contact@mybusiness.com</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.contactItem} onPress={handleWebsitePress}>
        <Icon name="globe" size={30} color="#DF8B92" accessibilityLabel="Website" />
        <Text style={styles.contactText}>www.mybusiness.com</Text>
      </TouchableOpacity>

      <View style={styles.contactItem}>
        <Icon name="map-marker" size={30} color="#DF8B92" accessibilityLabel="Address" />
        <Text style={styles.contactText}>12 Avenue de la République, 75011 Paris, France</Text>
      </View>
    </SafeAreaView>
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
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    letterSpacing: 1, 
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    width: '100%', 
  },
  contactText: {
    fontSize: 20,
    marginLeft: 20,
    color: '#333',
    letterSpacing: 0.5,
    textDecorationLine: 'underline', 
    paddingVertical: 10, 
  },
});

export default ContactScreen;
