import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="user" size={20} color="#007bff" />
          <Text style={styles.settingText}>Modifier le profil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="lock" size={20} color="#007bff" />
          <Text style={styles.settingText}>Changer le mot de passe</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="bell" size={20} color="#007bff" />
          <Text style={styles.settingText}>Notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="credit-card" size={20} color="#007bff" />
          <Text style={styles.settingText}>Moyens de paiement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="eye" size={20} color="#007bff" />
          <Text style={styles.settingText}>Confidentialité</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="help-circle" size={20} color="#007bff" />
          <Text style={styles.settingText}>Centre d'aide</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <FeatherIcon name="info" size={20} color="#007bff" />
          <Text style={styles.settingText}>À propos</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e3e3e3',
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#007bff',
  },
});
