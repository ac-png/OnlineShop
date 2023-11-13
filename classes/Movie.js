import Product from "./Product.js";

class Movie extends Product {
    // private properties
    #star;

    // constructor
    constructor(_name, _creator, _genre, _star, _price) {
        super(_name, _creator, _genre, _price);
        this.#star = _star;
    }

    // getters and setters
    get star() {
        return this.#star;
    }

    set star(_star) {
        this.#star = _star;
    }

    // gets details of product
    getDetails() {
        return `
            Title: ${this.name}
            Director: ${this.creator}
            Genres: ${this.genre}
            Starring: ${this.#star}
            Price: ${this.price}
        `;
    }
}

export default Movie;