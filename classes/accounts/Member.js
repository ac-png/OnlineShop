import Account from "./Account.js";
import Basket from "./Basket.js";
import Product from "../Product.js";

class Member extends Account{
    // private properties
    #basket;

    // constructor
    constructor(_password, _firstName, _lastName) {
        super(_password, _firstName, _lastName);
        this.#basket = new Basket();
    }

    // getters and setters
    get basket() {
        return this.#basket;
    }

    set basket(_basket) {
        this.#basket = _basket;
    }

    // adds product to the member’s basket
    addToBasket(_product) {
        if (_product instanceof Product) {
            this.#products.push(_product);
        } else {
            console.log(`${_product} is not a product`)
        }
    }

    // gets full list of member's basket
    displayBasket() {
        return `
        Basket: ${this.#basket}
        `
    }
}

export default Member;