import { Identity } from './Auth/Identity.js'
import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /*** @type {Identity}*/
  identity = null

  /*** @type {Car[]}*/
  cars = []
}

export const AppState = createObservableProxy(new ObservableAppState())