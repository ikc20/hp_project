import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        { text: "Annuler", style: "cancel" },
        { text: "OK", onPress: () => {
            console.log('Utilisateur déconnecté');
            navigation.navigate('LoginScreen'); // Redirection vers la page de connexion
          }
        }
      ],
      { cancelable: true }
    );
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const handleChangePassword = () => {
    Alert.alert("Changer le mot de passe", "Fonctionnalité à implémenter.");
  };

  return (
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDarkTheme && styles.darkTitle]}>Mon Profil</Text>
      </View>

      <View style={styles.profileContainer}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&w=1080&fit=max' }}
          style={styles.profileImage}
        />
        <Text style={styles.initials}>Username</Text>
      </View>

      <View style={styles.userInfoContainer}>
        <Text style={[styles.label, isDarkTheme && styles.darkLabel]}>Nom :</Text>
        <Text style={[styles.value, isDarkTheme && styles.darkValue]}>Nouvel Utilisateur</Text>
        
        <Text style={[styles.label, isDarkTheme && styles.darkLabel]}>Email :</Text>
        <Text style={[styles.value, isDarkTheme && styles.darkValue]}>moh_mhr@example.com</Text>

        <Text style={[styles.label, isDarkTheme && styles.darkLabel]}>Téléphone :</Text>
        <Text style={[styles.value, isDarkTheme && styles.darkValue]}>+212771532828</Text>
      </View>

      <TouchableOpacity 
        style={[styles.button, styles.changePasswordButton]} 
        onPress={handleChangePassword}
        accessibilityLabel="Changer le mot de passe"
      >
        <Text style={styles.buttonText}>Changer le Mot de Passe</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, styles.themeButton]} 
        onPress={toggleTheme}
        accessibilityLabel="Changer le thème"
      >
        <Text style={styles.buttonText}>{isDarkTheme ? 'Thème Clair' : 'Thème Sombre'}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.logoutButton} 
        onPress={handleLogout}
        accessibilityLabel="Déconnexion"
      >
        <Text style={styles.logoutButtonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#121212',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  darkTitle: {
    color: '#FFF',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: '#8e44ad', // Purple accent for profile border
    marginBottom: 12,
  },
  initials: {
    color: '#8e44ad',
    fontSize: 24,
    fontWeight: '600',
  },
  userInfoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 18,
    elevation: 3,
    marginBottom: 20,
  },
  label: {
    fontWeight: '500',
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  darkLabel: {
    color: '#CCC',
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  darkValue: {
    color: '#DDD',
  },
  button: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  changePasswordButton: {
    backgroundColor: '#3498db', // Blue accent for password change
  },
  themeButton: {
    backgroundColor: '#34495e', // Darker shade for theme toggle
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#e74c3c', // Red for logout
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ProfileScreen;
