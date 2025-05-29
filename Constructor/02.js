// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function ex. static keyword, encapsulation, inheritence

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){console.log(this.name)}
}
const p = new Product("milk",300);
p.displayProduct();