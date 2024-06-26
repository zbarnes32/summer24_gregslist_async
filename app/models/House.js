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
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
        this.creator = data.creator
    }

    get houseCardTemplate() {
        return `
        <div class="col-12 mb-3">
          <div class="shadow house-card mb-3">
            <div class="row">
              <div class="col-12 col-md-4 ">
                <img class="img-fluid bg-dark house-image" src="${this.imgUrl}" alt="Image of house">
              </div>
              <div class="col-12 col-md-8">
                <div class="p-3">
                  <h2>$${this.price.toLocaleString()}</h2>
                  <h3>Bedroom(s): ${this.bedrooms} | Bathroom(s): ${this.bathrooms} | Level(s): ${this.levels}</h3>
                  <h4>Build in ${this.year}</h4>
                  <h5>Description: ${this.description}</h5>
                  <h5>List Date: ${this.createdAt.toLocaleString()}</h5>
                  <h6>Listed by: ${this.creator.name}</h6>
                  <div class="text-end">
                    <button onclick="" class="btn btn-outline-danger" type="button">Delete House</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        `
    }
}

// const rawHouseData = {
//     "_id": "645d60f381faf24223ae886b",
//     "bedrooms": 3,
//     "bathrooms": 2,
//     "levels": 2,
//     "imgUrl": "https://floorcentral.com/wp-content/uploads/2014/07/sick-house-syndrome.jpg",
//     "year": 2003,
//     "price": 230000,
//     "description": "Super sick house",
//     "creatorId": "63f7d6202d1cf882287f12e2",
//     "createdAt": "2023-05-11T21:41:07.979Z",
//     "updatedAt": "2023-05-11T21:41:07.979Z",
//     "__v": 0,
//     "creator": {
//         "_id": "63f7d6202d1cf882287f12e2",
//         "name": "Charles Francis Xavier",
//         "picture": "https://media.tumblr.com/73b6bbb5a253780cfa957f4afd8d9e86/tumblr_inline_mqe0j8cDgp1qz4rgp.gif",
//         "id": "63f7d6202d1cf882287f12e2"
//     },
//     "id": "645d60f381faf24223ae886b"
// }