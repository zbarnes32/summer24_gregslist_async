import { api } from "./AxiosService.js"

class HousesService {
    async getHouses(){
        const response = await api.get('api/houses')
        console.log('Did we get the data?', response.data);
    
    }
}

export const housesService = new HousesService