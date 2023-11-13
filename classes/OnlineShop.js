import Product from "./Product.js";

class OnlineShop {
    // private properties
    #name;
    
    // constructor
    constructor(_name) {
        this.name = _name;

        this.products = [];
    }

    // getters and setters
    get name() {
        return this.#name;
    }

    set name(_name) {
        this.#name = _name;
    }

    // gets full list of products
    getProductList() {
        return this.products;
    }

    // adds new product to list
    addNewProduct(_product) {
        if (_product instanceof Product) {
            this.products.push(_product);
        }
        else {
            console.error(`${_product} is not a product`)
        }
    }

    // searches for specific product by name
    search(_term) {
        let result = this.products.filter(product => product.name === _term);
        return result;
    }
}

export default OnlineShop;