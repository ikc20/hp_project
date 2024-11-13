import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const AddressScreen = () => {
  const [addressType, setAddressType] = useState('Home');

  return (
    <ScrollView style={styles.container}>
      {/* Step Indicator */}
      <View style={styles.stepContainer}>
        <Text style={styles.step}>1. Address</Text>
        <Text style={styles.step}>2. Order Summary</Text>
        <Text style={styles.step}>3. Checkout</Text>
      </View>

      {/* Current Address Card */}
      <View style={styles.addressCard}>
        <Text style={styles.name}>Utkarsh Kumar</Text>
        <Text style={styles.address}>Apartment 64, HCBS Sports Villa, Sohna, Sector 32 - 122331</Text>
        <Text style={styles.phone}>+91-9034596034</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* New Address Form */}
      <Text style={styles.formTitle}>Add new address</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Phone Number" />
      <View style={styles.row}>
        <TextInput style={[styles.input, styles.halfInput]} placeholder="Pincode" />
        <TextInput style={[styles.input, styles.halfInput]} placeholder="State" />
      </View>
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="House No." />
      <TextInput style={styles.input} placeholder="Road Or Landmark" />

      {/* Address Type Selection */}
      <View style={styles.typeContainer}>
        {['Home', 'Office', 'Other'].map(type => (
          <TouchableOpacity
            key={type}
            style={[styles.typeButton, addressType === type && styles.typeButtonSelected]}
            onPress={() => setAddressType(type)}
          >
            <Text>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8f8f8' },
  stepContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  step: { fontSize: 16, color: '#4A90E2' },
  addressCard: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  name: { fontSize: 16, fontWeight: 'bold' },
  address: { fontSize: 14, color: '#666' },
  phone: { fontSize: 14, color: '#666' },
  editButton: { alignSelf: 'flex-end', marginTop: 10 },
  formTitle: { fontSize: 18, marginVertical: 10 },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#ccc' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { flex: 0.48 },
  typeContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  typeButton: { padding: 10, borderRadius: 5, borderWidth: 1, borderColor: '#ccc' },
  typeButtonSelected: { backgroundColor: '#4A90E2', borderColor: '#4A90E2' },
});

export default AddressScreen;
