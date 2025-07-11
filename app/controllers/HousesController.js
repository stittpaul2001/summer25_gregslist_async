
import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";



export class HousesController {
  constructor() {

    console.log('House Controller!!')
    AppState.on('houses', this.drawHouses)
    AppState.on('identity', this.drawHouses)
    AppState.on('identity', this.drawHouseForm)

    this.getHouses()
  }


  async drawHouseForm() {
    const houseFormElem = document.getElementById('houseForm')
    houseFormElem.querySelector('h2').classList.add('d-none')
    houseFormElem.querySelector('form').classList.remove('d-none')
  }



  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error('cant get houses', error)
      Pop.error(error, 'cant get houses!')
    }
  }

  async submitHouse() {
    console.log('submitHouse')
    try {
      event.preventDefault()
      const houseForm = event.target
      const houseData = getFormData(houseForm)

      await housesService.createHouse(houseData)
    } catch (error) {
      Pop.error(error, 'could not create your house!')
      console.error('createHouse failed', error)

    }
  }


  async deleteHouse(houseId) {
    const confirmed = await Pop.confirm('Are you super-de-duper that you want to delete this House?')
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


  drawHouses() {
    console.log('getting houses')
    const houses = AppState.houses
    let houseContent = ''
    houses.forEach(house => houseContent += house.houseTemplate)
    const houseElem = document.getElementById('houseListings')
    houseElem.innerHTML = houseContent
  }



}