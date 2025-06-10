import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS READY 🏎️');
    AppState.on('cars', this.drawCars)
    this.getCars()
  }
  drawCars() {
    const cars = AppState.cars
    let carsContent = ''
    cars.forEach(car => carsContent += car.listingHTMLTemplate)
    const carListingsElem = document.getElementById('car-listings')
    carListingsElem.innerHTML = carsContent
  }
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error, 'UH OH!', '<b>Could not get those cars!</b>')
    }
  }


}