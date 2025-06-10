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
}

const carReference = {
  "_id": "67c750a685d6f1c2c2f48c3a",
  "id": "67c750a685d6f1c2c2f48c3a",
  "make": "Audi",
  "model": "Q5",
  "imgUrl": "https://images.unsplash.com/photo-1572109085775-689916e1df47?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXVkaSUyMHE1fGVufDB8MXwwfHx8Mg%3D%3D",
  "year": 2020,
  "price": 10,
  "description": "WHAT A CAR",
  "color": "#131111",
  "engineType": "v6",
  "creatorId": "67c7497b9d0ebdf64186d8d6",
  "createdAt": "2025-03-04T19:12:38.517Z",
  "updatedAt": "2025-03-04T19:12:38.517Z",
  "__v": 0,
  "creator": {
    "_id": "67c7497b9d0ebdf64186d8d6",
    "name": "SPEED DEMON 💖💓😍😻",
    "picture": "https://plus.unsplash.com/premium_photo-1694626257552-576f66149ca8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVtb258ZW58MHx8MHx8fDA%3D",
    "id": "67c7497b9d0ebdf64186d8d6"
  },
}