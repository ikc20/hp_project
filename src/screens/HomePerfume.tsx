import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Alert } from 'react-native';

const PROMO_PERFUMES = [
  {
    id: '9', 
    name: 'Brazilian Crush Cheirosa 59', 
    price: '$26.00', 
    image: { uri: 'https://m.media-amazon.com/images/I/51KMT4TPJVL._SL1200_.jpg' }
  },
  {
    id: '1',
    name: 'BORN IN ROMA',
    brand: 'By Valentino',
    price: '$109.90',
    image: require('../assets/perfumes/rs.png'),
  },
  {
    id: '2',
    name: 'LA BELLE',
    brand: 'By Jean Paul Gaultier',
    price: '$120.00',
    image: require('../assets/perfumes/image.png'), // Update with actual image path
  },
  {
    id: '3',
    name: 'LOST CHERRY',
    brand: 'By Tom Ford',
    price: '$200.00',
    image: require('../assets/perfumes/image2.png'), // Update with actual image path
  },
  {
    id: '8', 
    name: 'Rio Body Trio - Set crèmes corporelles', 
    price: '$36', 
    image: { uri: 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw9b69cf34/products/SOL_DE_JAN/UK200050800_SOL_DE_JAN.jpg' }
  },
];

const PromoScreen = () => {
  const handleBuyPress = (itemName: any) => {
    Alert.alert('Purchase', `You have selected ${itemName} for purchase.`);
  };

  const renderPromoItem = ({ item }) => (
    <View style={styles.promotionContainer}>
      <Text style={styles.promotionTitle}>Special Promotion</Text>
      <Text style={styles.promotionSubTitle}>of the week</Text>

      <Image source={item.image} style={styles.perfumeImage} />

      <Text style={styles.perfumeName}>{item.name}</Text>
      <Text style={styles.perfumeBrand}>{item.brand}</Text>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>FOR ONLY</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>

      {/* Buy Button */}
      <TouchableOpacity style={styles.buyButton} onPress={() => handleBuyPress(item.name)}>
        <Text style={styles.buyButtonText}>Buy</Text>
      </TouchableOpacity>
    </View>
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
        snapToInterval={300} 
        decelerationRate="fast" 
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0EDEE',
  },
  promotionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    marginHorizontal: 10, // Adjusted for spacing
    width: 300, // Fixed width for horizontal list
  },
  promotionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5E83',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  promotionSubTitle: {
    fontSize: 18,
    color: '#B08BAA',
    marginBottom: 15,
    letterSpacing: 1.5,
  },
  perfumeImage: {
    width: 270,
    height: 350,
    borderRadius: 20,
    marginBottom: 12,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#F0EDEE', // Subtle border
  },
  perfumeName: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    textAlign: 'center',
  },
  perfumeBrand: {
    fontSize: 14,
    color: '#888',
    marginBottom: 25,
    fontStyle: 'italic',
  },
  priceContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#555'
},
price:{
   fontSize :36,
   fontWeight:'bold',
   marginTop :1,
   color:'#8B5E83'
},
// Styles for the Buy button
buyButton:{
   backgroundColor:'#8B5E83', 
   paddingVertical :10, 
   paddingHorizontal :20, 
   borderRadius :10, 
   marginTop :15
},
buyButtonText:{
   color:'#FFFFFF', 
   fontSize :18, 
   fontWeight:'bold'
}
});

export default PromoScreen;