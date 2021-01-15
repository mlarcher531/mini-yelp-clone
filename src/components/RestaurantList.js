import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Touchable } from 'react-native'
import { withNavigation } from 'react-navigation'

import RestaurantDetail from './RestaurantDetails'

const RestaurantList = ({ title, results, navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={result => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate('Images') }}>
                            <RestaurantDetail restaurant={item} />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10,
    }
})

export default withNavigation(RestaurantList)