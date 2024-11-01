import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar, Rating } from 'react-native-elements';
import { ImageSourcePropType } from 'react-native';

interface Perfume {
  id: string;
  name: string;
  price: string;
  image: ImageSourcePropType | { uri: string };
  gender: 'male' | 'female' | 'unisex';
  description: string;
  rating: number;
}

const PerfumeScreen = () => {
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [genderFilter, setGenderFilter] = useState<string>('All');
  const [cart, setCart] = useState<Perfume[]>([]);
  const [search, setSearch] = useState<string>('');

  // Fonction pour charger les produits depuis l'API
  useEffect(() => {
    const fetchPerfumes = async () => {
      try {
        const response = await fetch('http://your-api-url/api/products'); // Remplacez avec votre URL d'API
        const data = await response.json();
        setPerfumes(data); // Assurez-vous que la structure des données correspond à votre interface Perfume
      } catch (error) {
        console.error('Error fetching perfumes:', error);
        Alert.alert('Error', 'Could not load perfumes. Please try again later.');
      }
    };

    fetchPerfumes();
  }, []);

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
        <Rating imageSize={20} readonly startingValue={item.rating || 0} style={styles.rating} />
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
      {filteredPerfumes.length === 0 && <Text style={styles.noResults}>No results found.</Text>}
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
    color: '#2B2D42',
    marginVertical: 8,
    textDecorationLine: 'line-through',
  },
  rating: {
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});

export default PerfumeScreen;
