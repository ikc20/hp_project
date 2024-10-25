import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar, Rating } from 'react-native-elements';  // Import de la SearchBar et Rating

interface BodyProduct {
  id: string;
  name: string;
  price: string;
  image: any;
  rating: number;  // Ajout de la propriété rating
}

const bodyProducts: BodyProduct[] = [
  { id: '1', name: 'Aloe Vera Body Pack', price: '$25.00', rating: 4.5, image: { uri: 'https://cdn.notinoimg.com/detail_main_lq/sol_de_janeiro/810912034730_01-o/sol-de-janeiro-bom-dia-jet-set-travel-set-for-the-body-for-women___240624.jpg' }},
  { id: '2', name: 'Coconut Hydration Pack', price: '$20.00', rating: 3.5, image: { uri: 'https://palmarya.ma/images/demo/shop/Sol%20De%20Janeiro/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET.jpg' }},
  { id: '3', name: 'Lavender Relaxation Pack', price: '$30.00', rating: 4, image: require('../assets/bpack/image3.png') },
  { id: '4', name: 'Exotic Mango Pack', price: '$28.00', rating: 3.5, image: require('../assets/bpack/image4.png')},
  { id: '5', name: 'Cheirosa 40 Family', price: '$35.00', rating: 4, image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/35/original-cheirosa40-010035.png' }},
  { id: '6', name: 'Cheirosa 68 Family', price: '$34.00', rating: 4, image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/29/original-cheirosa68-010029.png' }},
  { id: '7', name: 'Cheirosa 62 Family', price: '$33.00', rating: 4, image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/03/original-cheirosa62-010003.png' }},
  { id: '8', name: 'Rio Body Trio - Set crèmes corporelles', price: '$36.00', rating: 4, image: { uri: 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw9b69cf34/products/SOL_DE_JAN/UK200050800_SOL_DE_JAN.jpg' }},
  { id: '9', name: 'Sol De Janeiro - Rio Radiance Body Spray SPF50', price: '$36.00', rating: 4.5, image: { uri: 'https://bogart-april-be-storage.omn.proximis.com/Imagestorage/imagesSynchro/600/600/b3880a157b908f6a067c8690b2e8385c8e85028f_3ade6ea1-e896-4b16-b9ea-front.jpeg' }},
  { id: '10', name: 'Jean Paul Gaultier - Divine Coffret', price: '$240.00', rating: 4, image: { uri: 'https://www.parfumerie-burdin.com/23057-thickbox_default/jean-paul-gaultier-divine-coffret-parfum-et-son-vaporisateur-de-sac.jpg' }},
  { id: '11', name: 'OLAPLEX Starter - Kit pour les Cheveux', price: '$40.00', rating: 2.5, image: { uri: 'https://brandsandbeauty.ma/cdn/shop/files/Designsanstitre_42.png?v=1723210685' }},
  { id: '12', name: 'Shiseido - Bio-Performance - Shiseido Coffret Anti-âge', price: '$77.00', rating: 3.5, image: { uri: 'https://www.parfumerie-burdin.com/7094-large_default/shiseido-bio-performance-coffret-anti-age.jpg' }},
];

const BodyProductsScreen = () => {
  const [cart, setCart] = useState<BodyProduct[]>([]);
  const [search, setSearch] = useState<string>('');  // État pour la barre de recherche

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  // Filtrer les produits en fonction de la recherche
  const filteredProducts = bodyProducts.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: BodyProduct) => {
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
  
        {/* Ajout du Rating avec la note spécifique */}
        <Rating
          imageSize={20}
          readonly
          startingValue={item.rating}  // Utilisation de la note du produit
          style={styles.rating}
        />
  
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => addToCart(item)} accessibilityLabel={`Add ${item.name} to cart`}>
            <Icon name="add-shopping-cart" size={24} color="#4CAF50" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Favorite', `${item.name} added to favorites`)} accessibilityLabel={`Add ${item.name} to favorites`}>
            <Icon name="favorite-border" size={24} color="#E74C3C" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Body Product Packs</Text>

      {/* Barre de recherche */}
      <SearchBar
  placeholder="Search for products..."
  onChangeText={(text: string) => updateSearch(text)}
  value={search}
  lightTheme
  round
  containerStyle={styles.searchContainer}
  inputContainerStyle={styles.searchInputContainer}
/>

      <FlatList
        data={filteredProducts}
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
  searchContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
  },
  searchInputContainer: {
    backgroundColor: '#FFFFFF',
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#4CAF50',
  },
  rating: {
    paddingVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  row: {
    justifyContent: 'space-between',
  },
});

export default BodyProductsScreen;
