import { carsService } from "../services/CarsService.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS READY 🏎️');
    this.getCars()
  }

  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error, 'UH OH!', '<b>Could not get those cars!</b>')
    }
  }
}