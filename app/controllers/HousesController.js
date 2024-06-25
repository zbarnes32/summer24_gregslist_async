import { AppState } from "../AppState.js"
import { housesService } from "../services/HousesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class HousesController {
    constructor() {
        AppState.on('houses', this.drawHouses)
        // ✅ console.log('From the HousesController')
        this.getHouses()
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.log("Failed to get houses", error)
        }
    }

    drawHouses() {
        const houses = AppState.houses
        let innerHTMLString = ''
        houses.forEach((house) => innerHTMLString += house.houseCardTemplate)
        setHTML('houseListings', innerHTMLString)
    }
}