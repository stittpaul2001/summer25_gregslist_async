import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";



class HousesService {
  async createHouse(houseData) {
    const response = await api.post('api/houses', houseData)
    console.log('created House', response.data)

    const newhouse = new House(response.data)
    AppState.houses.push(newhouse)
  }
  async deleteHouse(houseId) {
    const response = await api.delete(`api/houses/${houseId}`)
    console.log('deleted House', response.data)
    const houses = AppState.houses

    const houseIndex = houses.findIndex(house => house.id == houseId)
    houses.splice(houseIndex, 1)
  }

  async getHouses() {
    const response = await api.get('api/houses')
    console.log('get houses', response.data)
    const houses = response.data.map(pojo => new House(pojo))
    AppState.houses = houses
  }


}
export const housesService = new HousesService()