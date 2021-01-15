import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const RestaurantDetail = ({ restaurant }) => {

    return (
        <View style={styles.container}>
            <Image 
             source= {{ uri: restaurant.image_url}}
             style={styles.image} />
            <Text style={styles.name}>{restaurant.name}</Text>
            <Text style={styles.rating}> {restaurant.rating} Stars, {restaurant.review_count} Reviews</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container:{
        marginLeft: 15,
    },
    image:{
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    },
    ratings:{
        color: 'lightgrey'
    }
})

export default RestaurantDetail