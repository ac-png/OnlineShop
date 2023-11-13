import Product from "../Product.js";

class Basket {
    // private properties
    #products;

    // constructor
    constructor() {
        this.#products = [];
    }

    // getters and setters
    get products() {
        return this.#products;
    }

    set products(_products) {
        this.#products = _products;
    }

    // adds new product to basket
    addProduct(_product) {
        if (_product instanceof Product) {
            if (this.#products.length > 5) {
                console.log("Only 5 items allowed in basket!");
            } else {
                this.#products.push(_product);
            }
        } else {
            console.log(`${_product} cannot be added to basket.`)
        }
    }

    // gets full list of basket contents
    getContents() {
        return `
        Products: ${this.#products}
        `;
    }
}

export default Basket;