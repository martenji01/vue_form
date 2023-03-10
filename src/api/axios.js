import axios from "axios";

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const getContacts = async (filters)=>{
    const params = {
        ...filters
    }
    try {
        const {data: resp} = await axios.get('/character', {params})
        console.log({resp})
        return resp.results
    } catch (error) {
        console.log({error})
        return []
    }
}

export const getContactFromId = async (id)=>{
    try {
        const {data: item} = await axios.get('/character/'+ id)
        console.log({item})
        return item
    } catch (error) {
        console.log({error})
        return []
    }
}

export const getLocation = async (url)=>{
    console.log(url)
    const locationID = url.split('/')
    try {
        const {data: item} = await axios.get('/location/'+ locationID[[locationID.length-1]])
        console.log({item})
        return item
    } catch (error) {
        console.log({error})
        return null
    }
   
}