import Product from "./Product.js";

class Book extends Product {
    // private properties
    #isbn;

    // constructor
    constructor(_name, _creator, _genre, _isbn, _price) {
        super(_name, _creator, _genre, _price);
        this.#isbn =_isbn;
    }

    // getters and setters
    get isbn() {
        return this.#isbn;
    }

    set isbn(_isbn) {
        this.#isbn = _isbn;
    }

    // gets details of product
    getDetails() {
        return `
            Title: ${this.name}
            Author: ${this.creator}
            Genres: ${this.genre}
            ISBN: ${this.#isbn}
            Price: ${this.price}
        `;
    }
}

export default Book;