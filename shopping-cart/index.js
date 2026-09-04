// contains all products 
const products = [
    {id : 1, name:"Laptop", price : 75000, category : "Electronics"},
    {id : 2, name:"Book", price : 500, category : "Education"},
    {id : 3, name:"Sofa", price : 35000, category : "Appliences"},
    {id : 4, name:"T-Shirt", price : 1000, category : "Clothes"}
];

const cart = [];

const productsContainer = document.getElementById("products-container");

function displayProducts(){

    products.forEach((product) => {

        // child element container
        const productDiv = document.createElement("div");

        // add each property of product by creating element and appending in child element.
        const prodName = document.createElement("p");
        prodName.textContent = product.name;

        const prodPrice = document.createElement("p");
        prodPrice.textContent = product.price;

        const prodCategory = document.createElement("p");
        prodCategory.textContent = product.category;

        const addToCartBtn = document.createElement("button");
        addToCartBtn.textContent = "Add to Cart";
        addToCartBtn.addEventListener("click", () => {
            cart.push(product);
            console.log(cart);
        });

        productDiv.appendChild(prodName);
        productDiv.appendChild(prodPrice);
        productDiv.appendChild(prodCategory);
        productDiv.appendChild(addToCartBtn);

        // adding child container to parent container
        productsContainer.appendChild(productDiv);
    });
}


displayProducts();