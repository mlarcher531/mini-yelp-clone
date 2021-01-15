import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'houston'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage('Oops! Something went wrong.')
        }
    }

    useEffect(() => {
        searchApi('pizza')
    }, [])

    return [searchApi, results, errorMessage]

}







//hook logic taken from SearchScreen.js