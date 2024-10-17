import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

interface FlowerCategory {
  id: number;
  name: string;
  image: string;
  price: string;
}

const flowerCategories: FlowerCategory[] = [
  {
    id: 1,
    name: 'Roses',
    image: 'https://www.pretty.ma/wp-content/uploads/2023/12/Bouquet-de-Fleurs-Rouge-12-Rose-Fleuriste-Casablanca-Livraison-Fleurs-Casablanca-Bouquet-de-Fleurs-Pretty-Flowers-400x400.webp',
    price: '$30',
  },
  {
    id: 2,
    name: 'Tulipes',
    image: 'https://png.pngtree.com/png-clipart/20231016/original/pngtree-bouquet-of-tulips-png-image_13322188.png',
    price: '$24,95',
  },
  {
    id: 3,
    name: 'Lilies',
    image: 'https://fleurop.com/pub/media/catalog/product/cache/21a01495836dc5a2e9fbd362850a43a4/7/4/74335_1.jpg',
    price: '$35',
  },
  {
    id: 4,
    name: 'Orchidées',
    image: 'https://thumbs.dreamstime.com/z/bouquet-avec-des-roses-tulipes-et-orchid%C3%A9es-108235962.jpg',
    price: '$39,95',
  },
  {
    id: 5,
    name: 'Carillon',
    image: 'https://medias.florajet.com/_w_/produits/600/68841.jpg',
    price: '$41,90',
  },
];

const FlowerCategoriesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const handleBuy = (flower: FlowerCategory) => {
    Alert.alert('Achat', `Vous avez acheté : ${flower.name} pour ${flower.price}`);
  };

  const handleAddToFavorites = (flowerId: number) => {
    if (favorites.includes(flowerId)) {
      setFavorites(favorites.filter(id => id !== flowerId));
    } else {
      setFavorites([...favorites, flowerId]);
    }
  };

  const renderItem = ({ item }: { item: FlowerCategory }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item)}>
        <Text style={styles.buttonText}>Order Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.favoriteButton,
          favorites.includes(item.id) ? styles.favorited : null,
        ]}
        onPress={() => handleAddToFavorites(item.id)}
      >
        <Text style={styles.buttonText}>
          {favorites.includes(item.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Flower Categories</Text>
      <FlatList
        data={flowerCategories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#6C63FF',
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: '#CB8587',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  favoriteButton: {
    backgroundColor: '#D6D4AD',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  favorited: {
    backgroundColor: '#9295B7',
  },
});

export default FlowerCategoriesScreen;
