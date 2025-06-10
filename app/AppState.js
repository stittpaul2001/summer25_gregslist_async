import { Car } from './models/Car.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Example[]} */

  /*** @type {Car[]}*/
  cars = []
}

export const AppState = createObservableProxy(new ObservableAppState())