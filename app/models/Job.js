import { AppState } from "../AppState.js"


export class Job {
  constructor(data) {
    this.id = data.id
    this.company = data.company
    this.location = data.location
    this.rate = data.rate
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
    this.creatorName = data.creatorName
    this.creatorId = data.creatorId
    this.creatorPicture = data.creator.picture

  }


  get jobListingTemplate() {
    return `
    <div class="col-md-6 mb-3 p-2">
      <div class="d-block justify-space-between shadow border border-3 border-danger text-info bg-dark">
        <div class="d-flex justify-content-around mt-4">
          <p class="fs-4 fw-bold">Company: <span class="fw-normal">${this.company}</span></p>
          <p class="fs-4 text-center fw-bold">Located: <span class="fw-normal">${this.location}</span> </p>
        </div>
          <hr>
            <p class="fs-4 fw-bold text-center">Job Title: <span class="fw-normal">${this.jobTitle}</span></p>
        <div class="d-flex justify-content-around">
                <p class="fs-4 fw-bold">Hours: <span class="fw-normal">${this.hours} hrs</span></p>
                <p class="fs-4 fw-bold">Pay: <span class="fw-normal">$${this.rate}</span></p>
        </div>
            <hr>
              <p class="fs-5 text-center mb-4">Description: ${this.description} </p>
        <div class="text-center">
            <img src="${this.creatorPicture}" alt="${this.creatorName}" class="creator-img-new">
        </div>
        <div class="d-flex justify-content-around">
            <p class="text-start">Listed on: ${this.createdAt.toLocaleDateString()}</p>
                <p class="text-end">${this.deleteButton}</p>
        </div>
      </div>
    </div>
    `
  }

  get deleteButton() {
    const identity = AppState.identity

    if (identity == null) {
      return ''
    }
    return `
    <button onclick="app.carsController.confirmHouseDelete('${this.id}')" class="btn btn-outline-danger btn-dark" type="button">Delete house</button>`
  }

}