import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SearchBar, Rating } from 'react-native-elements';

interface BodyProduct {
  id: string;
  name: string;
  price: string;
  promoPrice?: string;
  image: any;
  rating: number;
}

const bodyProducts: BodyProduct[] = [
  { id: '1', name: 'Aloe Vera Body Pack', price: '$25.00', promoPrice: '$20.00', rating: 4.5, image: { uri: 'https://cdn.notinoimg.com/detail_main_lq/sol_de_janeiro/810912034730_01-o/sol-de-janeiro-bom-dia-jet-set-travel-set-for-the-body-for-women___240624.jpg' }},
  { id: '2', name: 'Coconut Hydration Pack', price: '$20.00', rating: 3.5, image: { uri: 'https://palmarya.ma/images/demo/shop/Sol%20De%20Janeiro/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET/SOL%20DE%20JANEIRO%20BEIJA%20FLOR%20JET%20SET.jpg' }},
  { id: '3', name: 'Lavender Relaxation Pack', price: '$30.00', promoPrice: '$25.00', rating: 4, image: { uri: 'https://cdn11.bigcommerce.com/s-5b8wpik5v8/images/stencil/1280x1280/products/444/1580/lavender_body_pack__28365.1620485468.jpg' }},
  { id: '4', name: 'Exotic Mango Pack', price: '$28.00', rating: 3.5, image: { uri: 'https://www.foreverliving.fr/wp-content/uploads/2019/07/Aloe-Vera-Pêche-Set.jpg' }},
  { id: '5', name: 'Cheirosa 40 Family', price: '$35.00', promoPrice: '$30.00', rating: 4, image: { uri: 'https://static.thcdn.com/images/small/webp/widgets/95-en/35/original-cheirosa40-010035.png' }},
  { id: '6', name: 'Tropical Citrus Set', price: '$26.00', promoPrice: '$22.00', rating: 4.3, image: { uri: 'https://giftr.my/cdn/shop/files/Tropical_Citrus_Gift_Set_grande.jpg?v=1698922585' }},
  { id: '7', name: 'Vanilla Dream Body Set', price: '$32.00', rating: 4.7, image: { uri: 'https://m.media-amazon.com/images/I/51AnJ1faKvL._AC_.jpg' }},
  { id: '8', name: 'Rose Petal Luxury Set', price: '$40.00', promoPrice: '$35.00', rating: 4.8, image: { uri: 'https://i.pinimg.com/originals/17/84/61/17846173b2dfdba28d9d5f3e6d3a1a02.jpg' }},
  { id: '9', name: 'Ocean Breeze Pack', price: '$27.00', rating: 4.2, image: { uri: 'https://cdn11.bigcommerce.com/s-cd10c/images/stencil/1280x1280/products/126/2915/ocean_breeze.jpg?c=2' }},
  { id: '10', name: 'Chamomile Calm Pack', price: '$29.00', promoPrice: '$24.00', rating: 4.5, image: { uri: 'https://www.caringorganics.com/wp-content/uploads/2018/04/chamomile_body_pack.jpg' }},
  { id: '11', name: 'Orchid Enchantment Pack', price: '$34.00', promoPrice: '$30.00', rating: 4.6, image: { uri: 'https://lovery.com/cdn/shop/products/81CAN2891DL._SL1500.jpg?v=1609065771&width=1426' }},
  { id: '12', name: 'Exotic Berry Blast', price: '$31.00', rating: 4.3, image: { uri: 'https://cdn.shopify.com/s/files/1/0438/7881/0472/products/ExoticBerryBlast.jpg?v=1624849931' }},
  { id: '13', name: 'Soothing Shea Set', price: '$36.00', rating: 4.4, image: { uri: 'https://m.media-amazon.com/images/I/71P1FQbLWfL._AC_SL1500_.jpg' }},
  { id: '14', name: 'Golden Glow Body Oil Pack', price: '$39.00', promoPrice: '$33.00', rating: 4.9, image: { uri: 'https://www.biossance.com/cdn/shop/products/GoldenGlowOil.jpg' }},
  { id: '15', name: 'Minty Fresh Revitalizer', price: '$24.00', rating: 4.1, image: { uri: 'https://images.prom.ua/5582380358_w640_h640_podarochnyj-nabor-neroli.jpg' }},
];


const BodyProductsScreen = () => {
  const [cart, setCart] = useState<{ product: BodyProduct; quantity: number }[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  const filteredProducts = bodyProducts.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const addToCart = (product: BodyProduct) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        // Update quantity if product is already in cart
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    Alert.alert('Added to Cart', `${product.name} has been added to your cart.`);
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(productId)
        ? prevFavorites.filter(id => id !== productId)
        : [...prevFavorites, productId]
    );
  };

  const renderItem = ({ item }: { item: BodyProduct }) => {
    const isFavorite = favorites.includes(item.id);
    const itemInCart = cart.find(cartItem => cartItem.product.id === item.id);

    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          {item.promoPrice ? (
            <View style={styles.priceContainer}>
              <Text style={styles.originalPrice}>{item.price}</Text>
              <Text style={styles.promoPrice}>{item.promoPrice}</Text>
            </View>
          ) : (
            <Text style={styles.price}>{item.price}</Text>
          )}

          <Rating imageSize={20} readonly startingValue={item.rating} style={styles.rating} />

          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => addToCart(item)} accessibilityLabel={`Add ${item.name} to cart`}>
              <Icon name="add-shopping-cart" size={24} color="#4CAF50" />
              {itemInCart && (
                <Text style={styles.cartQuantity}>x{itemInCart.quantity}</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleFavorite(item.id)} accessibilityLabel={`Add ${item.name} to favorites`}>
              <Icon
                name={isFavorite ? 'favorite' : 'favorite-border'}
                size={24}
                color={isFavorite ? '#E74C3C' : '#888'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Body Product Packs</Text>
      <SearchBar
        placeholder="Search for products..."
        onChangeText={updateSearch}
        value={search}
        lightTheme
        round
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" style={styles.loader} />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      )}
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
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 16,
    color: '#B0B0B0',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  promoPrice: {
    fontSize: 16,
    color: '#FF6347',
    fontWeight: 'bold',
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
  cartQuantity: {
    fontSize: 14,
    color: '#4CAF50',
    marginLeft: 5,
  },
  row: {
    justifyContent: 'space-between',
  },
  loader: {
    marginTop: 50,
  },
});

export default BodyProductsScreen;
