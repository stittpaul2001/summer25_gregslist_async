export class Car {
  constructor(data) {
    this.id = data.id // important to store the id from the API, and not generate our own
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.color = data.color
    this.engineType = data.engineType
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.thatWeirdThingThatJakeKnowsAbout = data.__v
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture || 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D'
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="position-relative shadow car-card" style="border-color: ${this.color};">
        <img src="${this.imgUrl}" alt="${this.year} ${this.make} ${this.model}" class="car-img">
        <span class="car-money d-inline-block px-3 py-1 bg-dark text-success fs-2">$${this.price.toLocaleString()}</span>
        <div class="p-3">
          <h2>${this.year} ${this.make} ${this.model}</h2>
          <p class="fs-4 fw-bold">${this.engineType} <span class="mdi mdi-engine"></span></p>
          <p>${this.description}</p>
          <div class="d-flex justify-content-between align-items-end">
            <div>
              <img src="${this.creatorPicture}" alt="${this.creatorName.replace('<div>', '💩')}" class="creator-img">
              <p class="mb-0">${this.creatorName.replace('<div>', '💩')}</p>
            </div>
            <div>
              <button onclick="app.carsController.confirmCarDelete('${this.id}')" class="btn btn-outline-danger" type="button">Delete car</button>
              <small>Listed on ${this.createdAt.toLocaleDateString()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}