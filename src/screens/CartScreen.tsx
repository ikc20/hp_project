// CartScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

const CartScreen = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'Perfume 1', quantity: 1, price: 50 },
        { id: 2, name: 'Blusher', quantity: 2, price: 25 },
        { id: 3, name: 'Body Pack', quantity: 1, price: 30 },
    ]);

    // Calculate total price of items in the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const renderItem = ({ item }: { item: CartItem }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDetails}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemDetails}>Price: ${item.price}</Text>
            <Text style={styles.itemDetails}>Subtotal: ${item.price * item.quantity}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Mon Panier</Text>
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.listContainer}
            />
            <Text style={styles.total}>Total: ${totalPrice}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={() => {/* Handle checkout logic */}}>
                <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FAFAFA',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    itemContainer: {
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        elevation: 1,
    },
    itemName: {
        fontSize: 18,
        fontWeight: '600',
    },
    itemDetails: {
        fontSize: 14,
        color: '#666',
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    checkoutButton: {
        backgroundColor: '#DF8B92',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    checkoutButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CartScreen;
