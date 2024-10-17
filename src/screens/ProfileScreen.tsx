import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';

const ProfileScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => console.log('Logout') }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      {/* User Profile Picture */}
      <TouchableOpacity style={styles.profilePicture}>
  <Image 
    source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&w=1080&fit=max' }} // Profile avatar from Unsplash
    style={styles.profileImage}
  />
  <Text style={styles.initials}>MI</Text>
</TouchableOpacity>



      {/* User Information */}
      <View style={styles.userInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Imahrain Mohammed</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>moh_mhr@example.com</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.value}>+212771532828</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderRadius: 60,
  },
  initials: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    marginVertical: 12,
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#777',
  },
  button: {
    backgroundColor: '#6C63FF', // Consistent with other screens
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
