import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import yelp from '../api/yelp'

import SearchBar from '../components/SearchBar'
import useYelpApi from '../hooks/useYelpApi'
import RestaurantList from '../components/RestaurantList'


const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useYelpApi()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <RestaurantList
                    title={'Cost Effective'}
                    results={filterResultsByPrice('$')}
                />
                <RestaurantList
                    title={'Bit Pricier'}
                    results={filterResultsByPrice('$$')}
                />
                <RestaurantList
                    title={'Big Spender'}
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    margin: {
        marginLeft: 15
    }

})

export default SearchScreen