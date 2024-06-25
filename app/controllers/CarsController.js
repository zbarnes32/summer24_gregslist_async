import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    this.getCars()
  }
  // CREATE
  // READ
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error) //notify user
      console.error('FAILED TO GET CARS', error) //notify developer
    }
  }
  // UPDATE *
  // DELETE



}