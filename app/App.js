import { CarsController } from "./controllers/CarsController.js"

class App {

  carsController = new CarsController()
}

window['app'] = new App()


