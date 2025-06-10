import { AppState } from "../AppState.js";
import { carsService } from "../services/CarsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class CarsController {
  constructor() {
    console.log('CARS CONTROLLER IS READY 🏎️');
    AppState.on('cars', this.drawCars)
    // NOTE after the user logs in
    AppState.on('identity', this.drawCars)
    // NOTE good idea to hide the form until the user logs in
    AppState.on('identity', this.drawCarForm)
    this.getCars()
  }
  drawCars() {
    const cars = AppState.cars
    let carsContent = ''
    cars.forEach(car => carsContent += car.listingHTMLTemplate)
    const carListingsElem = document.getElementById('car-listings')
    carListingsElem.innerHTML = carsContent
  }
  drawCarForm() {
    const carFormElem = document.getElementById('car-form-column')
    carFormElem.querySelector('h2').classList.add('d-none')
    carFormElem.querySelector('form').classList.remove('d-none')
  }
  async getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error, 'UH OH!', '<b>Could not get those cars!</b>')
      console.error('getCars failed', error);
    }
  }

  async submitCar() {
    try {
      event.preventDefault() // do not refresh page
      const formElem = event.target // get the form that submitted
      const carFormData = getFormData(formElem) // get the data out of the form
      // console.log('submitted car form', carFormData);
      await carsService.createCar(carFormData)
    } catch (error) {
      Pop.error(error, 'UH OH', 'could not create that car')
      console.error('createCar failed', error);
    }
  }

  async confirmCarDelete(carId) {
    // NOTE make sure you `await` Pop.confirm 
    const confirmed = await Pop.confirm('Are you sure you want to delete this car?', 'It will be gone forever', 'Yes I am sure', 'No I have changed my mind')

    if (!confirmed) {
      return
    }

    try {
      // console.log('deleting car!', carId);
      await carsService.deleteCar(carId)
    } catch (error) {
      Pop.error(error, 'UH OH', 'could not delete that car')
      console.error('deleteCar failed', error);
    }
  }

}