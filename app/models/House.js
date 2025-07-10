import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"


export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = new Date(data.updatedAt)
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.creatorPicture = data.creator.picture
        this.creatorName = data.creatorName

    }

    get houseTemplate() {
        return `
        <div class="col-12">
            <div class="row border border-3 border-success mt-2 mb-2"">
                <div class="col-md-4">
                    <img src="${this.imgUrl}" alt="a picture of a house" class=" border border-2 border-dark house-img">
                </div>
                    <div class="col-md-8">
                        <div class="d-block justify-space-around">
                            <div class="d-flex justify-content-between align-items">
                                <p class="fs-4 text-end fw-bold">Price: <span class="fw-normal">$${this.price}<span> </p>
                                <p class="fs-4 fw-bold">Year: <span class="fw-normal">${this.year}</span></p>
                            </div>
                            <div class="d-flex justify-content-between align-items">
                                <div class="fs-4 fw-bold">Levels: <span class="fw-normal">${this.levels}</span></div>
                                    <p class="fs-4 fw-bold">Bedrooms: <span class="fw-normal">${this.bedrooms}</span></p>
                                    <p class="fs-4 fw-bold">Bathrooms: <span class="fw-normal">${this.bathrooms}</span></p>
                            </div>
                                <hr>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" placeholder="description" id="floatingTextarea2Disabled" style="height: 80px" disabled>${this.description}</textarea>
                                <label for="floatingTextarea2Disabled"></label>
                            </div>
                            <div class="text-end d-flex justify-content-between">
                                <img src="${this.creatorPicture}" alt="${this.creatorName}" class="creator-img-new mb-2">
                                    <div class="text-end">
                                        <small class="text-end fw-bold">Listed on: ${this.createdAt.toLocaleDateString()}</small>
                                        <p class="text-end mt-4">${this.deleteButton}</p>
                                    </div>
                            </div>
                        </div>
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