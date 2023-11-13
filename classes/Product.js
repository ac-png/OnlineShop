class Product {
    // private properties
    #name;
    #creator;
    #genre;
    #price;

    // constructor
    constructor(_name, _creator, _genre, _price) {
        this.#name = _name;
        this.#creator = _creator;
        this.#genre = _genre;
        this.#price = _price;
    }

    // getters and setters
    get name() {
        return this.#name;
    }

    set name(_name) {
        this.#name = _name;
    }

    get creator() {
        return this.#creator;
    }
    
    set creator(_creator) {
        this.#creator = _creator;
    }

    get genre() {
        return this.#genre;
    }

    set genre(_genre) {
        this.#genre = _genre;
    }

    get price() {
        return this.#price;
    }

    set price(_price) {
        this.#price = _price;
    }

    getDetails() {
        return `
            Title: ${this.#name}
            Creator: ${this.#creator}
            Module: ${this.#genre}
            Price: ${this.#price}
        `;
    }
}

export default Product;