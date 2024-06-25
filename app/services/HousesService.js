import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"

class HousesService {
    async getHouses(){
        const response = await api.get('api/houses')
        console.log('Did we get the data?', response.data);
    
        const newHouses = response.data.map((housePOJO) => new House(housePOJO))
        AppState.houses = newHouses
    }
}

export const housesService = new HousesService