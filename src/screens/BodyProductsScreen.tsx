import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface BodyProduct {
  id: string;
  name: string;
  price: string;
  image: any;
  
}

const bodyProducts: BodyProduct[] = [
    
  { id: '1', name: 'Aloe Vera Body Pack', price: '$25', image: { uri: 'https://cdn.notinoimg.com/detail_main_lq/sol_de_janeiro/810912034730_01-o/sol-de-janeiro-bom-dia-jet-set-travel-set-for-the-body-for-women___240624.jpg' }},
  { id: '2', name: 'Coconut Hydration Pack', price: '$20', image: { uri: 'https://palmarya.ma/images/demo/shop/Sol%20De%20Janeiro/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET.jpg' } },
  { id: '3', name: 'Lavender Relaxation Pack', price: '$30', image: require('../assets/bpack/image3.png') },
  { id: '4', name: 'Exotic Mango Pack', price: '$28', image: require('../assets/bpack/image4.png')},
  { id: '5', name: 'Cheirosa 40 Family', price: '$35', image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/35/original-cheirosa40-010035.png' }},
  { id: '6', name: 'Cheirosa 68 Family', price: '$34', image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/29/original-cheirosa68-010029.png' }},
  { id: '7', name: 'Cheirosa 62 Family', price: '$33', image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/03/original-cheirosa62-010003.png' }},
  { id: '8', name:'Rio Body Trio - Set crèmes corporelles', price:'$36', image :{ uri: 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw9b69cf34/products/SOL_DE_JAN/UK200050800_SOL_DE_JAN.jpg'}},
  { id: '9', name:'Brazilian Crush Cheirosa 59',  price:'$26.00', image:{uri :'https://m.media-amazon.com/images/I/51KMT4TPJVL._SL1200_.jpg'}},
];

const BodyProductsScreen = () => {
  const [cart, setCart] = useState<BodyProduct[]>([]);

  const addToCart = (product: BodyProduct) => {
    // Check if the item is already in the cart
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
      Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
    } else {
      Alert.alert('Already in Cart', `${product.name} is already in your cart.`);
    }
  };

  const renderItem = ({ item }: { item: BodyProduct }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity onPress={() => addToCart(item)} accessibilityLabel={`Add ${item.name} to cart`}>
          <Icon name="add-shopping-cart" size={24} color="#4CAF50" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Body Product Packs</Text>
      <FlatList
        data={bodyProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  details: {
    marginTop: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#E74C3C',
    marginVertical: 8,
  },
  description:{
      fontSize :14,
      color:'#666',
      marginBottom :8
   }
});

export default BodyProductsScreen;