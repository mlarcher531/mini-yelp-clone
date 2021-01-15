import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

import RestaurantDetail from './RestaurantDetails'

const RestaurantList = ({ title, results }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
            horizontal={true}
            data={results}
            keyExtractor={result => result.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return <RestaurantDetail restaurant={item}/>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
})

export default RestaurantList