import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Animated } from 'react-native';
import { SearchBar, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Blusher {
    id: string;
    name: string;
    description: string;
    image: { uri: string } | number;
    rating: number;
    price: number;
    promoPrice?: number;
}

// Sample data for blushers
const blushersData: Blusher[] = [
    { 
        id: '1', 
        name: 'Soft Rose', 
        description: 'A soft pink shade for a natural look.', 
        image: { uri: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-DEWY-WORTH.jpg?v=1727895680' }, 
        rating: 4.5,
        price: 20.00,
        promoPrice: 15.00,
    },
    { 
        id: '2', 
        name: 'Peachy Glow', 
        description: 'A warm peach tone for a radiant finish.', 
        image: { uri: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SP-LIQUID-BLUSH-MATTE-FAITH.jpg?v=1727897164' }, 
        rating: 4.0,
        price: 22.00,
        promoPrice: 18.00,
    },
    { 
        id: '3', 
        name: 'Soft Pinch Luminous Powder Blush', 
        description: 'A deep berry shade for a bold statement.', 
        image: { uri: 'https://cdn.shopify.com/s/files/1/0314/1143/7703/files/ECOMM-SOFT-PINCH-LUMINOUS-POWDER-BLUSH-LOVE.jpg?v=1711393161' }, 
        rating: 4.7,
        price: 24.00,
        promoPrice: 20.00,
    },
    { 
        id: '4', 
        name: 'Rare Beauty Mini Soft Pinch Dewy Liquid Blush - Encourage', 
        description: 'A dewy liquid blush for a fresh look.', 
        image: { uri: 'https://www.rarebeauty.com/cdn/shop/files/ECOMM-SP-LIQUID-BLUSH-DEWY-HOPE.jpg?v=1727895243' },
        rating: 4.8,
        price: 25.00,
        promoPrice: 22.00,
    },
    {
        id: '5',
        name: 'Soft Pinch Tinted Lip Oil',
        description: 'An innovative lip jelly that transforms into a lightweight oil.',
        image: { uri: 'https://www.rarebeauty.com/cdn/shop/products/soft-pinch-tinted-lip-oil-hope-1440x1952.jpg?v=1679094432' },
        rating: 3.5,
        price: 18.00,
        promoPrice: 15.00,
    },
];

const BlushersScreen = () => {
    const [search, setSearch] = useState<string>('');
    const [cartCount, setCartCount] = useState<number>(0); // Cart count state
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleSearch = (text: string) => setSearch(text);

    const filteredBlushers = blushersData.filter(blusher =>
        blusher.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleAddToCart = () => {
        setCartCount(cartCount + 1); // Increment cart count when an item is added
    };

    const renderBlusherItem = ({ item }: { item: Blusher }) => (
        <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Rating
                    imageSize={20}
                    readonly
                    startingValue={item.rating}
                    style={styles.rating}
                />
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                    {item.promoPrice && (
                        <Text style={styles.promoPrice}>${item.promoPrice.toFixed(2)}</Text>
                    )}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.favoriteButton}>
                        <Text style={styles.buttonText}>♥ Add to Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
                        <Text style={styles.buttonText}>🛒 Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="heart" size={30} color="#FF6F61" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Icon name="shopping-cart" size={30} color="#6BBE45" />
                    {/* Display the cart count on the cart icon */}
                    {cartCount > 0 && (
                        <View style={styles.cartCount}>
                            <Text style={styles.cartCountText}>{cartCount}</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Our Premium Blushers Collection</Text>
            <SearchBar
                placeholder="Search..."
                onChangeText={handleSearch}
                value={search}
                lightTheme
                round
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
            />
            <FlatList
                data={filteredBlushers}
                renderItem={renderBlusherItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FAFAFA',
    },
    header: {
        fontSize: 24, // réduire la taille de police pour que l'en-tête prenne moins de place
        fontWeight: 'bold',
        marginVertical: 10, // Réduit l'espacement en haut et en bas de l'en-tête
        textAlign: 'center',
        color: '#333',
    },
    
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10, // Diminue la marge en bas pour un espacement plus serré
        paddingHorizontal: 10, // Réduire le padding latéral
    },
    
    iconButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    cartCount: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    cartCountText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    searchContainer: {
        backgroundColor: '#FFF',
        borderBottomColor: '#CED4DA',
        borderTopColor: '#CED4DA',
        borderRadius: 8,
        marginBottom: 15,
    },
    searchInputContainer: {
        backgroundColor: '#E9ECEF',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginVertical: 10,
        padding: 16,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 5,
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    rating: {
        paddingVertical: 5,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF4081',
        marginRight: 10,
        textDecorationLine: 'line-through',
    },
    promoPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    favoriteButton: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: '#FF6F61',
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 8,
    },
    cartButton: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: '#6BBE45',
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    listContainer: {
        paddingBottom: 40,
    },
});

export default BlushersScreen;
