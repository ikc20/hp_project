import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';


interface SignUpProps {
  navigation: any; // Vous pouvez remplacer 'any' par le type approprié si vous utilisez une bibliothèque de navigation typée
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  // Définir le schéma de validation avec Yup
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Requis'),
    email: Yup.string().email('Email invalide').required('Requis'),
    password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Requis'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Les mots de passe doivent correspondre') // Changed null to undefined
      .required('Requis'),
  });

  const handleSignUp = (values: { username: string; email: string; password: string }) => {
    Alert.alert('Success', `Registered Successfully`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      
      <Formik
        initialValues={{ 
          username: '',
          email: '',
          password: '', 
          confirmPassword: '' }} 
          

        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {errors.username && <Text style={styles.error}>{errors.username}</Text>}
            
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}
            
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
            />
            {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}
            
            <TouchableOpacity style={styles.signUpButton} onPress={() => handleSubmit()}>
  <Text style={styles.signUpText}>Sign Up</Text>
</TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Already have an account? Go to Login</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    backgroundColor: '#fff',
    paddingLeft: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  signUpButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  signUpText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#6C63FF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 12,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default SignUp;