import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, SafeAreaView, Animated } from 'react-native';
import { SearchBar, Rating } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Mascara {
    id: string;
    name: string;
    description: string;
    image: { uri: string } | number;
    rating: number;
    price: number;
    promoPrice?: number;
}

// Données d'exemple pour les mascaras
const mascarasData: Mascara[] = [
    {
        id: '1',
        name: 'Mascara Luxe Volumizer',
        description: 'Donnez du volume et de la longueur à vos cils avec notre mascara révolutionnaire.',
        image: { uri: 'https://www.okkiyo.com/cdn/shop/files/okkiyo-024-Edit-2_1024x.jpg?v=1704693218' },
        rating: 4.5,
        price: 29.99,
        promoPrice: 24.99,
    },
    {
        id: '2',
        name: 'Mascara Long Lasting',
        description: 'Une tenue parfaite toute la journée sans s\'effriter.',
        image: { uri: 'https://stila.co.uk/cdn/shop/products/SC70010001-STAYALLDAYMASCARA_KEYVISUAL.jpg?v=1616480152&width=480SBO2s=' },
        rating: 4.7,
        price: 32.00,
    },
    {
        id: '3',
        name: 'Mascara Waterproof',
        description: 'Résistant à l\'eau, parfait pour les jours de pluie.',
        image: { uri: 'https://images.pexels.com/photos/2637820/pexels-photo-2637820.jpeg?cs=srgb&dl=pexels-828860-2637820.jpg&fm=jpg' },
        rating: 4.3,
        price: 27.50,
        promoPrice: 23.00,
    },
    // Ajoutez plus de mascaras ici
];

const MascaraScreen = () => {
    const [search, setSearch] = useState<string>('');
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleSearch = (text: string) => setSearch(text);

    const filteredMascaras = mascarasData.filter(mascara =>
        mascara.name.toLowerCase().includes(search.toLowerCase())
    );

    const renderMascaraItem = ({ item }: { item: Mascara }) => (
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
                    <TouchableOpacity style={styles.cartButton}>
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
                </TouchableOpacity>
            </View>
            <Text style={styles.header}>Our Luxury Mascara Collection</Text>
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
                data={filteredMascaras}
                renderItem={renderMascaraItem}
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
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingHorizontal: 16,
    },
    iconButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 2,
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
        fontWeight: '600',
    },
    listContainer: {
        paddingBottom: 20,
    },
});

export default MascaraScreen;
