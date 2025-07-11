
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";



export class HousesController {
  constructor() {

    console.log('House Controller!!')
    this.getHouses()
    AppState.on('houses', this.drawHouses)

    AppState.on('identity', this.drawHouses)
    AppState.on('identity', this.drawHouseForm)
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('cant get houses', error)
      Pop.error(error, 'cant get houses!')
    }
  }

  drawHouses() {
    console.log('House')
    const houses = AppState.houses
    let houseContent = ''
    houses.forEach(house => houseContent += house.houseTemplate)
    const houseElem = document.getElementById('houseListings')
    houseElem.innerHTML = houseContent
  }

  drawHouseForm() {
    const houseFormElem = document.getElementById('house-form')
    houseFormElem.querySelector('h2').classList.add('d-none')
    houseFormElem.querySelector('form').classList.remove('d-none')
  }

  async submitHouse() {
    try {
      event.preventDefault()
      const formElem = event.target
      const houseFormData = getFormData(formElem)

      await housesService.createHouse(houseFormData)
    } catch (error) {
      Pop.error(error, 'could not create your house!')
      console.error('createHouse failed', error)
    }
  }

  async confirmHouseDelete(houseId) {
    const confirmed = await Pop.confirm('Are you super-de-duper that you want to delete this House?', 'Yes, Delete', 'No, i think i want to keep it')
    if (!confirmed) {
      return
    }
    try {
      await housesService.deleteHouse(houseId)
    } catch (error) {
      Pop.error(error, 'can not delete this House')
      console.error('deleteHouse failed', error)
    }
  }

}