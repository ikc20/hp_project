import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar, Rating } from 'react-native-elements'; // Import de la SearchBar et Rating

interface Perfume {
  id: string;
  name: string;
  price: string;
  image: any;
  gender: 'male' | 'female' | 'unisex';
  description: string;
  rating: number; // Optional property for rating
}

const perfumes: Perfume[] = [
  { id: '1', name: 'La Belle', price: '$150', image: require('../assets/perfumes/her.png'), gender: 'female', description: 'A sweet floral fragrance.', rating: 4 },
  { id: '2', name: 'Lost Cherry', price: '$260', image: require('../assets/perfumes/image2.png'), gender: 'unisex', description: 'A fruity and floral scent.', rating: 3 },
  { id: '3', name: 'Paradoxe Prada', price: '$450', image: require('../assets/perfumes/image3.png'), gender: 'female', description: 'A modern and sophisticated fragrance.', rating: 5 },
  { id: '4', name: 'Black Opium', price: '$550', image: require('../assets/perfumes/bo.png'), gender: 'female', description: 'A warm and spicy scent.', rating: 4 },
  { id: '5', name: 'Kirk', price: '$90', image: require('../assets/perfumes/kirk.png'), gender: 'male', description: 'Kirk de Mirko Buffini Firenze est un parfum boisé épicé pour homme.', rating: 3 },
  { id: '6', name: 'Sauvage', price: '$85', image: require('../assets/perfumes/sauvage.png'), gender: 'male', description: 'La bergamote de Calabre, signature vive et juteuse de Sauvage.', rating: 4 },
  { id: '7', name: 'Born in Roma', price: '$160', image: { uri: 'https://daisy.ma/wp-content/uploads/2023/07/valentino-donna-born-in-roma-intense-eau-de-parfum-skin-society-shop-address-country-2.webp' }, gender: 'female', description: 'For the elegant.', rating: 4 },
  { id: '8', name: 'Chanel No. 5', price: '$300', image: { uri: 'https://mojezapachy.pl/7435-large_default/chanel-no5-l-eau-red-edition-woda-toaletowa-100ml.jpg' }, gender: 'female', description: 'A timeless classic with floral notes.', rating: 5 },
  { id: '9', name: 'Dior Homme Intense', price: '$150', image: { uri: 'https://kosmenia.ma/cdn/shop/files/dior_homme_eau_de_parfum_intense_P_2048x.jpg?v=1710947007' }, gender: 'male', description: 'A rich and woody fragrance for men.', rating: 4 },
  { id: '10', name: 'Yves Saint Laurent Libre', price: '$130', image: { uri: 'https://www.fatin.ma/wp-content/uploads/2023/05/ysl_libre_le_parfum_1.jpg' }, gender: 'female', description: 'A bold and floral scent with a hint of lavender.', rating: 4 },
  { id: '11', name: 'Tom Ford Black Orchid', price: '$180', image: { uri: 'https://www.lamode.tn/55867-large_default/eau-de-toilette-unisexe-tom-ford-tom-ford-black-orchid.webp' }, gender: 'unisex', description: 'An opulent and dark fragrance with rich notes.', rating: 4 },
  { id: '12', name: 'Marc Jacobs Daisy', price: '$95', image: { uri: 'https://daisy.ma/wp-content/uploads/2024/03/marc-jacobs-ladies-perfect-intense-edp-spray-34-oz-fragrances-3616302779994-2.jpg' }, gender: 'female', description: 'A fresh and fruity floral scent perfect for everyday wear.', rating: 3 },
  { id: '13', name: 'JEAN PAUL GAULTIER - Le Male', price: '$88', image: { uri: 'https://kosmenia.ma/cdn/shop/files/jean_paul-gaultier_le_male_elixir_p1_2048x.jpg?v=1703184975' }, gender: 'male', description: 'Faites monter la température pendant les festivités avec le coffret Le Mâle Eau de toilette.', rating: 4 },
];


const PerfumeScreen = () => {
  const [genderFilter, setGenderFilter] = useState<string>('All');
  const [cart, setCart] = useState<Perfume[]>([]);
  const [search, setSearch] = useState<string>(''); // État pour la barre de recherche

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  const filteredPerfumes = perfumes.filter(perfume => 
    (genderFilter === 'All' || perfume.gender === genderFilter.toLowerCase()) &&
    perfume.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (perfume: Perfume) => {
    if (!cart.some(item => item.id === perfume.id)) {
      setCart([...cart, perfume]);
      Alert.alert('Added to Cart', `${perfume.name} has been added to your cart.`);
    } else {
      Alert.alert('Already in Cart', `${perfume.name} is already in your cart.`);
    }
  };

  const renderItem = ({ item }: { item: Perfume }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
        
        {/* Rating Component */}
        <Rating
          imageSize={20}
          readonly
          startingValue={item.rating || 0} // Default rating if not provided
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
      <Text style={styles.title}>Perfume Collection</Text>

      {/* Barre de recherche */}
      <SearchBar
        placeholder="Search for perfumes..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
      />

      <View style={styles.filterContainer}>
        {['All', 'Female', 'Male', 'Unisex'].map(gender => (
          <TouchableOpacity 
            key={gender} 
            style={[styles.filterButton, genderFilter === gender && styles.selectedFilterButton]}
            onPress={() => setGenderFilter(gender)}
          >
            <Text style={styles.filterButtonText}>{gender}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <FlatList
        data={filteredPerfumes}
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
    marginVertical: 10,
    color: '#333',
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    paddingHorizontal: 0,
    marginBottom: 15,
  },
  searchInputContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: '#E2B8BE',
    borderRadius: 120,
  },
  selectedFilterButton: {
    backgroundColor: '#cc7c84',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 16,
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
  rating: {
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PerfumeScreen;
