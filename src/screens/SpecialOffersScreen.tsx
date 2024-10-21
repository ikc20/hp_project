import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

type Offer = {
    id: string;
    name: string;
    description: string;
    price: string;
    discount: string;
    image: any; 
  };

const offers = [
  {
    id: '1',
    name: 'Rose Bouquet',
    description: 'A beautiful bouquet of fresh red roses.',
    price: '$25',
    discount: '$20',
    image: require('../assets/rose-bouquet.png'), 
  },
  {
    id: '2',
    name: 'Sunflower Bouquet',
    description: 'Brighten someone’s day with these cheerful sunflowers.',
    price: '$30',
    discount: '$22',
    image: require('../assets/sunflower-bouquet.png'),
  },
  {
    id: '3',
    name: 'Tulip Bouquet',
    description: 'Colorful tulips to bring joy to any room.',
    price: '$35',
    discount: '$28',
    image: require('../assets/tulip-bouquet.png'),
  },
];

const SpecialOffersScreen = () => {
    const renderOffer = ({ item }: { item: Offer }) => (
    <View style={styles.offerContainer}>
      <Image source={item.image} style={styles.offerImage} />
      <Text style={styles.offerName}>{item.name}</Text>
      <Text style={styles.offerDescription}>{item.description}</Text>
      <Text style={styles.offerPrice}>Original Price: {item.price}</Text>
      <Text style={styles.offerDiscount}>Discounted Price: {item.discount}</Text>
      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special Offers</Text>
      <FlatList
        data={offers}
        renderItem={renderOffer}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.offersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DF8B92',
    textAlign: 'center',
    marginBottom: 20,
  },
  offersList: {
    paddingBottom: 20,
  },
  offerContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  offerImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  offerName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  offerPrice: {
    fontSize: 16,
    color: '#777',
    textDecorationLine: 'line-through',
  },
  offerDiscount: {
    fontSize: 18,
    color: '#DF8B92',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SpecialOffersScreen;
