import { Identity } from './Auth/Identity.js'
import { Car } from './models/Car.js'
import { House } from './models/House.js'
import { Job } from './models/Job.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // NOTE if you want intellisense for the logged in user, make sure to include the identity here (exactly like this)
  /*** @type {Identity}*/
  identity = null





  /*** @type {Car[]}*/
  cars = []

  /**@type {House[]} */
  houses = []

  /**@type {Job[]} */
  jobs = []
}

export const AppState = createObservableProxy(new ObservableAppState())