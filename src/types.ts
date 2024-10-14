import { StackNavigationProp } from '@react-navigation/stack';

// Définition des routes de votre Stack Navigator
export type RootStackParamList = {
  SignUp: undefined; // Aucune propriété passée à l'écran SignUp
  Login: undefined;  // Aucune propriété passée à l'écran Login
  Home: undefined;   // Aucune propriété passée à l'écran Home (par exemple)
};

// Type pour la navigation dans l'écran SignUp
export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

// Vous pouvez aussi définir des types pour d'autres écrans :
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
