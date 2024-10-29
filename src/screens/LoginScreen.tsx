import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function Login({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <KeyboardAwareScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            alt="App Logo"
            resizeMode="contain"
            style={styles.headerImg}
            source={{ uri: 'https://i.pinimg.com/564x/0d/ba/0f/0dba0f58167eb0b79dddf50aab0d4839.jpg' }} 
          />
          <Text style={styles.title}>Connectez-vous</Text>
          <Text style={styles.subtitle}>Accédez à votre compte et plus</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>E-mail</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="john@example.com"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.input}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              autoCorrect={false}
              clearButtonMode="while-editing"
              onChangeText={password => setForm({ ...form, password })}
              placeholder="********"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity onPress={() => Alert.alert('Login pressed')}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Log In</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Lien vers la page de réinitialisation du mot de passe */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié?</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

      {/* Lien vers la page d'inscription */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.formFooter}>
          Vous n’avez pas de compte?{' '}
          <Text style={{ textDecorationLine: 'underline', color: '#DF8B92' }}>S'inscrire</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 36,
  },
  headerImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 36,
  },
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  forgotPasswordText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#075eec', // Couleur du texte pour le lien
    textAlign: 'center',
    marginTop: 10, // Ajout d'un espace au-dessus
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
   borderColor:'#C9D3DB',
   },
   btn:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',
     borderRadius :30,
     paddingVertical :10,
     paddingHorizontal :20,
     backgroundColor:'#DF8B92', // Couleur du bouton
   },
   btnText:{
     fontSize :18,
     lineHeight :26,
     fontWeight :'600',
     color :'#fff'
   }
});