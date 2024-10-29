import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Alert, Animated } from 'react-native';

const PROMO_PERFUMES = [
  {
    id: '1',
    name: 'BORN IN ROMA',
    brand: 'By Valentino',
    price: '$109.90',
    image: require('../assets/perfumes/rs.png'),
  },
  {
    id: '10',
    name: 'Jean Paul Gaultier - Divine Coffret',
    price: '$224.00',
    rating: 4,
    image: { uri: 'https://www.parfumerie-burdin.com/23057-thickbox_default/jean-paul-gaultier-divine-coffret-parfum-et-son-vaporisateur-de-sac.jpg' },
  },
  {
    id: '6',
    name: 'Cheirosa 68 Family',
    price: '$29.00',
    rating: 4,
    image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/29/original-cheirosa68-010029.png' },
  },
  {
    id: '3',
    name: 'LOST CHERRY',
    brand: 'By Tom Ford',
    price: '$200.00',
    image: require('../assets/perfumes/image2.png'),
  },
  {
    id: '9',
    name: 'Sol De Janeiro - Rio Radiance Body Spray SPF50',
    price: '$36.00',
    rating: 4.5,
    image: { uri: 'https://bogart-april-be-storage.omn.proximis.com/Imagestorage/imagesSynchro/600/600/b3880a157b908f6a067c8690b2e8385c8e85028f_3ade6ea1-e896-4b16-b9ea-front.jpeg' },
  },
  {
    id: '11',
    name: 'Born In Roma Collection Set',
    gender: 'female',
    price: '$88.00',
    image: { uri: 'https://boutique.heathrow.com/dw/image/v2/BDNX_PRD/on/demandware.static/-/Sites-boutique-master-catalog/default/dw82314a1c/images/hi-res/world-duty-free/6094605detailImage01.jpg' },
    description: 'Luxe',
    rating: 4,
  },
];

const PromoScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleBuyPress = (itemName) => {
    Alert.alert('Purchase Confirmation', `You have selected ${itemName} for purchase.`);
  };

  const renderPromoItem = ({ item }) => (
    <Animated.View style={[styles.promotionContainer, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]}>
      <Text style={styles.promotionTitle}>Special Promotion</Text>
      <Text style={styles.promotionSubTitle}>of the Week</Text>

      <Image source={item.image} style={styles.perfumeImage} />

      <Text style={styles.perfumeName}>{item.name}</Text>
      {item.brand && <Text style={styles.perfumeBrand}>{item.brand}</Text>}

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>FOR ONLY</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyPress(item.name)}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </Animated.View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={PROMO_PERFUMES}
        renderItem={renderPromoItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={320}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F4F9',
  },
  promotionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
    marginHorizontal: 10,
    width: 300,
    borderWidth: 1,
    borderColor: '#E8E5EA',
  },
  promotionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#8B5E83',
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  promotionSubTitle: {
    fontSize: 16,
    color: '#B08BAA',
    marginBottom: 15,
    letterSpacing: 1.5,
  },
  perfumeImage: {
    width: 260,
    height: 340,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#F0EDEE',
  },
  perfumeName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  perfumeBrand: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  priceLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#555',
  },
  price: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 2,
    color: '#8B5E83',
  },
  buyButton: {
    backgroundColor: '#8B5E83',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PromoScreen;
