import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { api } from "./AxiosService.js"

class CarsService {
  async createCar(carData) {
    // First argument passed to post is where we are sending the request, second argument is the payload for the request
    // 🐕🗞️------> codeWorks sandbox API
    const response = await api.post('api/cars', carData)

    // NOTE response data is the car that was stored in the database, with extra properties (id, createdAt, creator, etc....)
    console.log('🐕🚙✨<-------', response.data);

    const newCar = new Car(response.data)

    AppState.cars.push(newCar) //💂

  }
  async getCars() {
    // 🐕------> codeWorks sandbox API
    // NOTE the string passed through as the argument to .get will be concatted to the end of your baseURL. This will send a GET request to https://sandbox.codeworksacademy.com/api/cars
    const response = await api.get('api/cars')

    // NOTE Always log the response data
    console.log('🐕🏎️🚓🚙<-------', response.data);

    // NOTE response.data is the array of data we care about (the meat)
    const newCars = response.data.map((carPOJO) => new Car(carPOJO))

    AppState.cars = newCars
  }
}

export const carsService = new CarsService()