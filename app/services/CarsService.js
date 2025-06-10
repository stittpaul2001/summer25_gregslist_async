import { api } from "../utils/Axios.js";

class CarsService {
  async getCars() {
    // NOTE axios is going to be used for network requests
    // NOTE you must specify which HTTP verb you are using by calling the correct method
    const response = await api.get('api/cars') // => 'https://sandbox.codeworksacademy.com/' + 'api/cars'
    console.log('GOT CARS 🏎️🏎️🏎️', response.data);
  }
}

export const carsService = new CarsService()