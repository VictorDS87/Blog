import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.github.com/users/',
})

export const apiBlog = axios.create({
    baseURL: 'https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/',
    
})