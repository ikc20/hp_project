// PerfumeScreen.tsx
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from 'react-native';

interface Perfume {
  id: string;
  name: string;
  price: string;
  image: string;
}

const perfumes: Perfume[] = [
  {
    id: '1',
    name: 'Rose Blossom',
    price: '€85',
    image: 'https://example.com/rose-blossom.jpg',
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    price: '€90',
    image: 'https://example.com/ocean-breeze.jpg',
  },
  {
    id: '3',
    name: 'Lavender Fields',
    price: '€75',
    image: 'https://example.com/lavender-fields.jpg',
  },
  {
    id: '4',
    name: 'Mystic Oud',
    price: '€120',
    image: 'https://example.com/mystic-oud.jpg',
  },
];

const PerfumeScreen = () => {
  const renderPerfumeItem = ({ item }: { item: Perfume }) => (
    <View style={styles.perfumeItem}>
      <Image source={{ uri: item.image }} style={styles.perfumeImage} />
      <View style={styles.perfumeInfo}>
        <Text style={styles.perfumeName}>{item.name}</Text>
        <Text style={styles.perfumePrice}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Our Perfume Collection</Text>
      <FlatList
        data={perfumes}
        renderItem={renderPerfumeItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  perfumeItem: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  perfumeImage: {
    width: 100,
    height: 100,
  },
  perfumeInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  perfumeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  perfumePrice: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
});

export default PerfumeScreen;
