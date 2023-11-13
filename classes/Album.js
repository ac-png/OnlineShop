import Product from "./Product.js";

class Album extends Product {
    // private properties
    #label;

    constructor(_name, _creator, _genre, _label, _price) {
        super(_name, _creator, _genre, _price);
        this.#label = _label;
    }

    // getters and setters
    get label() {
        return this.#label;
    }

    set label(_label) {
        this.#label = _label;
    }

    getDetails() {
        return `
            Title: ${this.name}
            Artist: ${this.creator}
            Genres: ${this.genre}
            Label: ${this.#label}
            Price: ${this.price}
        `;
    }
}

export default Album;