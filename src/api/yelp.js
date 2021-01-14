import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer mZsAnaY3-Z6ldKbGk06AewYS6QVgooz3w4yED9abm9HLhCcl1dgOQgJSUNAK-7V10dMcQ6ZsX-g8ysoxQEG17z1Vk_tFIquzZNV3fu7czJ48kwTJsQCEQqp6oNhxX3Yx' 
    }
})