import axios from 'axios'


const apiKey ="34f83446"

const connection = axios.create({
    baseURL:"http://www.omdbapi.com"

})

export {apiKey,connection}
