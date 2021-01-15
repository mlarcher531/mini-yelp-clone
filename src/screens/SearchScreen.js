import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import yelp from '../api/yelp'

import SearchBar from '../components/SearchBar'
import useYelpApi from '../hooks/useYelpApi'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useYelpApi()

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} restaurants</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    error: {

    }

})

export default SearchScreen