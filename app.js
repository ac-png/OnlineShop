import Product from "./classes/Product.js";
import OnlineShop from "./classes/OnlineShop.js";
// import Member from "./classes/accounts/Member.js";

import Book from "./classes/Book.js";
import Movie from "./classes/Movie.js";
import Album from "./classes/Album.js";
import Basket from "./classes/accounts/Basket.js";

let book = new Book ('The Book Thief','Markus Zusak', ['Novel', 'Historical fiction', 'Bildungsroman'], 9780307475732, 7.37);
let movie = new Movie ('Avatar','James Cameron', ['Fantasy', 'Sci-Fi', 'Adventure', 'Action'], ['Sam Worthington', 'Zoe Saldana'], 9.99)
let album = new Album ('24K Magic','Bruno Mars', ['R&B', 'Funk', 'Pop', 'New Jack Swing'], 'Atlantic', 7.43);
let book2 = new Book ('The Hobbit', 'J.R.R. Tolkien', ['Novel', 'Fantasy Fiction', 'Epic'], 9780007525508, 6.55);
let movie2 = new Movie ('Titanic', 'James Cameron', ['Romance', 'Disaster', 'Drama', 'Historical Drama'], ['Kate Winslet', 'Leonardo DiCaprio'], 6.32)
let album2 = new Album ('=', 'Ed Sheeran', 'Pop', ['Asylum', 'Atlantic'], 7.29);
let book3 = new Book ('The Great Gatsby', 'F.Scott Fitzgerald', ['Historical Fiction', 'Tragedy'], 9780333791035, 6.65);
let movie3 = new Movie ('Waterworld', 'Kevin Reynolds', ['Action', 'Sci-Fi', 'Adventure'],  ['Kevin Costner', 'Jeanne Tripplehorn'], 9.88)
let album3 = new Album ('Love Goes', 'Sam Smith', ['Pop', 'Dance-Pop'], 'Captiol', 6.99);

let onlineshop = new OnlineShop('Online Shop');

onlineshop.addNewProduct(book);
onlineshop.addNewProduct(movie);
onlineshop.addNewProduct(album);
onlineshop.addNewProduct(book2);
onlineshop.addNewProduct(movie2);
onlineshop.addNewProduct(album2);
onlineshop.addNewProduct(book3);
onlineshop.addNewProduct(movie3);
onlineshop.addNewProduct(album3);

console.log(onlineshop.getProductList());

onlineshop.getProductList().forEach((product) => {
    console.log(product.getDetails());
});

console.log(onlineshop.search("="));

console.log(`Is The Book Thief a Product: ${book instanceof Product}`);
console.log(`Is Avatar a Product: ${movie instanceof Product}`);
console.log(`Is 24K Magic a Product: ${album instanceof Product}`);

let basket = new Basket();
basket.addProduct(book);
console.log(basket.getContents());