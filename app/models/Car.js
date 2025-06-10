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
    // this.creatorName = data.creator.name
    this.creator = data.creator
  }

  get listingHTMLTemplate() {
    return `
    <div class="col-md-6">
      <div class="position-relative shadow car-card" style="border-color: #000000;">
        <img
          src="https://images.unsplash.com/photo-1572109085775-689916e1df47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaSUyMHE1fGVufDB8MXwwfHx8Mg%3D%3D"
          alt="2020 audi q5" class="car-img">
        <span class="car-money d-inline-block px-3 py-1 bg-dark text-success fs-2">$100000</span>
        <div class="p-3">
          <h2>2020 audi q5</h2>
          <p class="fs-4 fw-bold">V6 <span class="mdi mdi-engine"></span></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum culpa in velit voluptas facilis
            voluptatibus ut nihil. Libero, perferendis inventore.
          </p>
          <div class="d-flex justify-content-between align-items-end">
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1694626257552-576f66149ca8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVtb258ZW58MHx8MHx8fDA%3D"
                alt="speed demon" class="creator-img">
              <p class="mb-0">Speed demon</p>
            </div>
            <small>Listed on 12/12/2000</small>
          </div>
        </div>
      </div>
    </div>
    `
  }
}