import { AppState } from "../AppState.js"
import { carsService } from "../services/CarsService.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
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

    async createHouse(){
        try {
            event.preventDefault()
            const form = event.target
            const houseData = getFormData(form)
            console.log('Did we get the data from the form?', houseData)
            await carsService.createHouse(houseData)
        } catch (error) {
            Pop.error(error)
            console.log('We did not create a house listing 🥲', error)
        }


    }
}