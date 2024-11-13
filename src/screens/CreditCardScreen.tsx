import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CreditCard {
  label: string;
  number: string;
  expiration: string;
  cardType: string;
}

const creditCards: CreditCard[] = [
  {
    label: 'Visa',
    number: '**** **** **** 1234',
    expiration: '12/24',
    cardType: 'Visa',
  },
  {
    label: 'MasterCard',
    number: '**** **** **** 5678',
    expiration: '11/23',
    cardType: 'MasterCard',
  },
  {
    label: 'American Express',
    number: '**** **** **** 9012',
    expiration: '10/25',
    cardType: 'Amex',
  },
];

const CreditCardScreen: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const getCardIcon = (cardType: string) => {
    switch (cardType) {
      case 'Visa':
        return <Icon name="cc-visa" size={24} color="#1a1f71" />;
      case 'MasterCard':
        return <Icon name="cc-mastercard" size={24} color="#eb001b" />;
      case 'Amex':
        return <Icon name="cc-amex" size={24} color="#2e77bb" />;
      default:
        return <Icon name="credit-card" size={24} color="#333" />;
    }
  };

  const handleContinue = () => {
    if (selectedCard !== null) {
      // Logique pour passer à l'étape suivante
      console.log("Naviguer vers le formulaire de paiement");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Select a Payment Method</Text>
        {creditCards.map((card, index) => {
          const isActive = selectedCard === index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCard(index)}
              style={[styles.cardContainer, isActive && styles.cardActive]}
            >
              <View style={styles.cardTop}>
                <View style={styles.cardInfo}>
                  {getCardIcon(card.cardType)}
                  <Text style={styles.cardLabel}>{card.label}</Text>
                </View>
                <Text style={styles.cardType}>{card.cardType}</Text>
              </View>
              <Text style={styles.cardNumber}>{card.number}</Text>
              <Text style={styles.cardExpiration}>Expires: {card.expiration}</Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={handleContinue}
          style={[styles.continueButton, selectedCard === null && styles.buttonDisabled]}
          disabled={selectedCard === null}
        >
          <Text style={styles.buttonText}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreditCardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 24,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 1.5,
    elevation: 3,
  },
  cardActive: {
    borderColor: '#0069fe',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginLeft: 8,
  },
  cardType: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2f2f2f',
  },
  cardNumber: {
    fontSize: 16,
    color: '#3a3a3a',
    marginBottom: 4,
  },
  cardExpiration: {
    fontSize: 14,
    color: '#8b8b8b',
  },
  continueButton: {
    backgroundColor: '#0069fe',
    paddingVertical: 14,
    borderRadius: 80,
    alignItems: 'center',
    marginTop: 20,
  },
  
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
