import { AuthController } from "./Auth/AuthController.js"
import { CarsController } from "./controllers/CarsController.js"
import { HousesController } from "./controllers/HousesController.js"
import { JobsController } from "./controllers/JobsController.js"

class App {
  // NOTE the spelling here is very important for the authController we are adding to the app class. Feel free to copy/paste this into your own app class
  authController = new AuthController()
  carsController = new CarsController()

  housesController = new HousesController()
  jobsController = new JobsController()
}

window['app'] = new App()


