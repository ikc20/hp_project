import { StackNavigationProp } from '@react-navigation/stack';

// Définition des routes de votre Stack Navigator
export type RootStackParamList = {
  SignUp: undefined; 
  Login: undefined;  
  Home: undefined;  
  EditProfile : undefined;
};


export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
