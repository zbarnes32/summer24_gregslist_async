import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"

export class HousesController {
    constructor(){
        // ✅ console.log('From the HousesController')
        this.getHouses()
    }

    getHouses(){
        try {
            housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.log("Failed to get houses", error)
        }
    }
}