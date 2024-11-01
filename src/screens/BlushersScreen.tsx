import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Animated } from 'react-native';
import { SearchBar, Rating } from 'react-native-elements';

// Define the type for each blusher item
interface Blusher {
    id: string;
    name: string;
    description: string;
    image: { uri: string } | number; // Allowing both URI and local images
    rating: number;
    price: number; // Regular price
    promoPrice?: number; // Promotional price
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
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, []);

    const updateSearch = (text: string) => {
        setSearch(text);
    };

    // Filter blushers based on search
    const filteredBlushers = blushersData.filter(blusher => 
        blusher.name.toLowerCase().includes(search.toLowerCase())
    );

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
                        <Text style={styles.buttonText}>Add to Favorites</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cartButton}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Our Blushers Collection</Text>
            <SearchBar
                placeholder="Search..."
                onChangeText={updateSearch}
                value={search}
                lightTheme
                round
                containerStyle={styles.searchContainer}
                inputContainerStyle={styles.searchInputContainer}
            />
            <FlatList
                data={filteredBlushers}
                renderItem={renderBlusherItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

// Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 16,
        backgroundColor: '#F0F4F8',
    },
    header: {
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 15,
        textAlign: 'center',
        color: '#2B2D42',
    },
    searchContainer: {
        backgroundColor: '#FFFFFF',
        borderBottomColor: '#CED4DA',
        borderTopColor: '#CED4DA',
        borderRadius: 10,
        marginBottom: 15,
    },
    searchInputContainer: {
        backgroundColor: '#E9ECEF',
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        marginVertical: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    cardContent: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        color: '#2B2D42',
    },
    description: {
        fontSize: 14,
        color: '#4D4D4D',
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
        fontWeight: '600',
        color: '#2B2D42',
        marginRight: 10,
        textDecorationLine: 'line-through',

    },
    promoPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FF5733', // Promotional price in a standout color
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    favoriteButton: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: '#FF8C00', // Favorite button color
        borderRadius: 8,
        alignItems: 'center',
        marginRight: 8,
    },
    cartButton: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: '#28A745', // Cart button color
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default BlushersScreen;
