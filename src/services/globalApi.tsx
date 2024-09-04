import axios from "axios";

const API_KEY ="de2dca98d47449aba094f5244f022624";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenderList = async () => {
try {
    const  response = await axiosCreate.get('/genres?key='+API_KEY);
    
    return response.data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
}
//const  getGenderList = axiosCreate.get('/genres?key='+API_KEY);

export default {
    getGenderList
}