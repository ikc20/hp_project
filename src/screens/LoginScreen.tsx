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
import { NavigationProp } from '@react-navigation/native';

interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    email: '',
    password: '',
  });

  const navigation = useNavigation<NavigationProp<any>>();

  const handleLogin = () => {
    // Basic validation (you can expand this further)
    if (!form.email || !form.password) {
      alert('Please enter both email and password.');
      return;
    }

    // Handle login logic here, e.g., API call
    console.log(form);
    // Navigate to the Home screen after successful login
    navigation.navigate('Home'); // Replace 'Home' with your target screen
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.form}>
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

          <View style={styles.formAction}>
            <TouchableOpacity onPress={handleLogin} accessible={true} accessibilityLabel="Login button">
              <View style={styles.btn}>
                <Text style={styles.btnText}>Login</Text>
                <MaterialCommunityIcons
                  color="#fff"
                  name="arrow-right"
                  size={20}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>

            <Text style={styles.formActionSpacer}>Or continue with</Text>

            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="apple" size={30} color="#000" />
                <Text style={styles.socialButtonText}>Apple</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="google" size={30} color="#DB4437" />
                <Text style={styles.socialButtonText}>Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <MaterialCommunityIcons name="facebook" size={30} color="#3B5998" />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')} // Navigate to Sign Up screen
            style={{ marginTop: 'auto' }}>
            <Text style={styles.formFooter}>
              Not a member? <Text style={{ color: '#d897f8' }}>Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
  formActionSpacer: {
    marginVertical: 32,
    fontSize: 14,
    fontWeight: '600',
    color: '#4b4858',
    textAlign: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButtonText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default LoginScreen;
