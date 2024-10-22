import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { ImageSourcePropType } from 'react-native';

// Define a type for the perfume object
interface Perfume {
    id: string;
    name: string;
    price: string;
    image: ImageSourcePropType; // Use ImageSourcePropType for images
    gender: 'male' | 'female' | 'unisex';
    description: string;
}

// Sample perfumes data with correct types
const perfumes: Perfume[] = [
    { id: '1', name: 'La belle', price: '$150', image: require('../assets/perfumes/image.png'), gender: 'female', description: 'A sweet floral fragrance.' },
    { id: '2', name: 'Lost Cherry', price: '$260', image: require('../assets/perfumes/image2.png'), gender: 'unisex', description: 'A fruity and floral scent.' },
    { id: '3', name: 'Paradoxe Prada', price: '$450', image: require('../assets/perfumes/image3.png'), gender: 'female', description: 'A modern and sophisticated fragrance.' },
    { id: '4', name: 'Black Opiume', price: '$550', image: require('../assets/perfumes/bo.png'), gender: 'female', description: 'A warm and spicy scent.' },
    { id: '5', name: 'Kirk', price: '$90', image: require('../assets/perfumes/kirk.png'), gender: 'male', description: 'Kirk de Mirko Buffini Firenze est un parfum Boisé Épicé pour homme.' },
    { id: '6', name:'Sauvage', price:'$85', image: require('../assets/perfumes/sauvage.png'), gender:'male', description:'La bergamote de Calabre, signature vive et juteuse de Sauvage'},
    { id: '7', name: 'GUESS', price: '$150', image: require('../assets/perfumes/image.png'), gender: 'female', description: 'A sweet floral fragrance.' },

];

const PerfumeScreen = () => {
    const [genderFilter, setGenderFilter] = useState<string>('All');

    // Filter perfumes based on selected gender
    const filteredPerfumes = perfumes.filter(perfume => 
        genderFilter === 'All' || perfume.gender === genderFilter.toLowerCase()
    );

    // Render each perfume item
    const renderItem = ({ item }: { item: Perfume }) => (
        <TouchableOpacity onPress={() => showAlert(item.name, item.description)}>
            <View style={styles.perfumeItem}>
                <Image source={item.image} style={styles.perfumeImage} />
                <View style={styles.perfumeDetails}>
                    <Text style={styles.perfumeName}>{item.name}</Text>
                    <Text style={styles.perfumePrice}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    // Function to show alert with perfume details
    const showAlert = (name:string, description:string) => {
        Alert.alert(name, description);
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Our Perfumes</Text>
            <View style={styles.filterContainer}>
                {['All', 'Female', 'Male', 'Unisex'].map(gender => (
                    <TouchableOpacity 
                        key={gender} 
                        style={[
                            styles.filterButton,
                            genderFilter === gender && styles.selectedFilterButton // Change color if selected
                        ]}
                        onPress={() => setGenderFilter(gender)} 
                        accessibilityLabel={`Filter by ${gender}`} // Accessibility label
                    >
                        <Text style={styles.filterButtonText}>{gender}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <FlatList
                data={filteredPerfumes}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#F0F4F8',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color:'#333',
    },
    list:{
        paddingBottom : 20,
    },
    perfumeItem:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#FFF',
        marginBottom : 20,
        padding : 15,
        borderRadius : 12,
        shadowColor:'#000',
        shadowOpacity : 0.2,
        shadowOffset : { width : 0, height : 4 },
        shadowRadius : 6,
        elevation : 4,
    },
    perfumeImage:{
        width : 90,
        height : 90,
        borderRadius : 12,
        marginRight : 20,
    },
    perfumeDetails:{
        flex : 1,
    },
    perfumeName:{
        fontSize : 20,
        fontWeight : '700',
        color:'#333',
    },
    perfumePrice:{
        fontSize : 18,
        color:'#E74C3C',
        marginTop : 5,
    },
    filterContainer:{
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom : 30,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor:'#BDC3C7',
      marginTop : 10
    },
    filterButton:{
      backgroundColor:'#DF8B92', // Couleur par défaut des boutons
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      elevation: 2,
      alignItems:'center'
    },
    selectedFilterButton:{
      backgroundColor:'#E74C3C' // Couleur lorsque le bouton est sélectionné
    },
    filterButtonText:{
      color:'#FFFFFF',
      fontSize: 16,
      fontWeight:'600'
    }
});

export default PerfumeScreen;