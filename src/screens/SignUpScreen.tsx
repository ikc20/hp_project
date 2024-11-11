import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigation = useNavigation();

  const handleSignUp = () => {
    // Handle sign up logic here, e.g., API call
    console.log(form);
    // Navigate to the Home screen or another screen after successful sign up
    navigation.navigate('Home'); // Replace 'Home' with your target screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Let's Get Started!</Text>
          <Text style={styles.subtitle}>
            Fill in the fields below to create your new account.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              clearButtonMode="while-editing"
              onChangeText={name => setForm({ ...form, name })}
              placeholder="Full Name"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.name}
              accessible={true}
              accessibilityLabel="Full Name input"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Email"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.email}
              accessible={true}
              accessibilityLabel="Email input"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              secureTextEntry
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="Password"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.password}
              accessible={true}
              accessibilityLabel="Password input"
            />
          </View>

          <View style={styles.input}>
            <TextInput
              secureTextEntry
              clearButtonMode="while-editing"
              onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
              placeholder="Confirm Password"
              placeholderTextColor="#505060"
              returnKeyType="done"
              style={styles.inputControl}
              value={form.confirmPassword}
              accessible={true}
              accessibilityLabel="Confirm Password input"
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleSignUp} accessible={true} accessibilityLabel="Sign Up button">
              <View style={styles.btn}>
                <Text style={styles.btnText}>Sign Up</Text>
                <MaterialCommunityIcons
                  color="#fff"
                  name="arrow-right"
                  size={20}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')} // Navigate to Login screen
          style={{ marginTop: 'auto' }}>
          <Text style={styles.formFooter}>
            Already have an account? <Text style={{ color: '#d897f8' }}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24,
    flexGrow: 1,
  },
  header: {
    marginVertical: 36,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#4b4858',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
  },
  input: {
    marginBottom: 16,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#f3eff6',
    paddingLeft: 12,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    color: '#222',
    borderWidth: 1,
    borderColor: 'transparent',
    borderStyle: 'solid',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
});

export default SignUpScreen;
