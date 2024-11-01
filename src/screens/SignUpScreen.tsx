import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import RNPickerSelect from 'react-native-picker-select';
import * as Yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

interface SignUpProps {
  navigation: StackNavigationProp<RootStackParamList, 'SignUp'>;
}

const SignUp: React.FC<SignUpProps> = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Ce champ est requis'),
    email: Yup.string().email('Adresse e-mail invalide').required('Ce champ est requis'),
    password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Ce champ est requis'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Les mots de passe doivent correspondre')
      .required('Ce champ est requis'),
    country: Yup.string().required('Sélectionnez un pays'),
  });

  const handleSignUp = (values: { username: string; email: string; password: string; confirmPassword: string; country: string }) => {
    Alert.alert('Succès', `Inscription réussie pour ${values.username} de ${values.country}!`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Créer un Compte</Text>
      
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '', country: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholderTextColor="#aaa"
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
              placeholderTextColor="#aaa"
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}

            <RNPickerSelect
  onValueChange={handleChange('country')}
  placeholder={{ label: 'Sélectionnez un pays', value: '' }}
  items={[
    { label: 'France', value: 'France' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Morocco', value: 'Morocco' },
    { label: 'United States', value: 'United States' },
    { label: 'Germany', value: 'Germany' },
    { label: 'Italy', value: 'Italy' },
    { label: 'Spain', value: 'Spain' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'Australia', value: 'Australia' },
    { label: 'Brazil', value: 'Brazil' },
    { label: 'India', value: 'India' },
    { label: 'Japan', value: 'Japan' },
  ]}
  style={{
    inputAndroid: styles.input,
    inputIOS: styles.input,
    iconContainer: {
      top: '12%',
      right: '2%',
    },
  }}
/>

            {errors.country && <Text style={styles.error}>{errors.country}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
              placeholderTextColor="#aaa"
            />
            {errors.password && <Text style={styles.error}>{errors.password}</Text>}

            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              secureTextEntry
              placeholderTextColor="#aaa"
            />
            {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

            {/* Updated onPress handler */}
            <TouchableOpacity style={styles.signUpButton} onPress={() => handleSubmit()}>
              <Text style={styles.signUpText}>S'inscrire</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.link}>Vous avez déjà un compte ? Allez à la connexion</Text>
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
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center',
    color:'#333',
    fontWeight:'bold',
  },
  input:{
    height : 50,
    borderColor:'#ccc',
    borderWidth : 1,
    marginBottom : 16,
    backgroundColor:'#fff',
    paddingLeft :16,
    borderRadius :10,
    shadowColor:'#000',
    shadowOpacity :0.1,
    shadowRadius :5,
    elevation :2,
  },
  signUpButton:{
    backgroundColor:'#DF8B92',
    paddingVertical :12,
    marginBottom :16,
    borderRadius :10,
    width:'80%',
    alignSelf:'center',
    shadowColor:'#000',
    shadowOpacity :0.2,
    shadowRadius :5,
    elevation :3,
  },
  signUpText:{
    color:'#fff',
    textAlign:'center',
    fontSize :18,
    fontWeight :'bold',
  },
  link:{
     color:'#DF8B92',
     textAlign:'center',
     textDecorationLine:'underline',
     marginTop:'12%',
   },
   error: {
    color: 'red',
    marginBottom: 8, // Changed from "8" to 8
  },
  
});

export default SignUp;