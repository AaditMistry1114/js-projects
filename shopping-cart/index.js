// contains all products 
const products = [
    {id : 1, name:"Laptop", price : 75000, category : "Electronics"},
    {id : 2, name:"Book", price : 500, category : "Education"},
    {id : 3, name:"Sofa", price : 35000, category : "Appliences"},
    {id : 4, name:"T-Shirt", price : 1000, category : "Clothes"}
];

const cart = [];

const productsContainer = document.getElementById("products-container");

const cartContainer = document.getElementById("cart-container");


displayProducts();



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
       

        // find() returns first element which matches condition 
        const existingItem = cart.find((elem) =>{
            return elem.id === product.id;
        });
        
        if(existingItem){
            existingItem.quantity++;
            displayCart();
        }
        else{
            // create a copy of product
            const cartItem = { ...product };
            cartItem.quantity = 1;
            cart.push(cartItem);
            displayCart();
        }

        });

        productDiv.appendChild(prodName);
        productDiv.appendChild(prodPrice);
        productDiv.appendChild(prodCategory);
        productDiv.appendChild(addToCartBtn);

        // adding child container to parent container
        productsContainer.appendChild(productDiv);
    });
}

function displayCart(){
    
    cartContainer.innerHTML = ""; 

    cart.forEach((cartItem) => {

        // cart child element
        const cartDiv = document.createElement("div");

        const cartItemName = document.createElement("p");
        cartItemName.textContent = cartItem.name + " x " + cartItem.quantity;

        const addQuantityBtn = document.createElement("button");
        addQuantityBtn.textContent = "+";
        addQuantityBtn.addEventListener("click", () =>{
            
            cartItem.quantity++;
            displayCart();

        });

        const subQuantityBtn = document.createElement("button");
        subQuantityBtn.textContent = "-";
        subQuantityBtn.addEventListener("click", () =>{
            
            // if quantity is 1 and button is clicked item gets removed
            if(cartItem.quantity === 1){
                
                // returns index of element which matches condition
                const index = cart.findIndex(elem => elem.id === cartItem.id)
                cart.splice(index, 1);
                displayCart();
            }
            else{
                cartItem.quantity--;
                displayCart();
            }

        });

        cartDiv.appendChild(cartItemName);
        cartDiv.appendChild(addQuantityBtn);
        cartDiv.appendChild(subQuantityBtn);

        // adding child container to parent container
        cartContainer.appendChild(cartDiv);

    });

}

