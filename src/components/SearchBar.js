import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {


    return (
        <View style={styles.searchBar}>
            <Feather name="search" color="black" style={styles.iconStyle} />
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 5,
    }

})

export default SearchBar