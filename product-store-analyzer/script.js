let products = [
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Phone", price: 30000, category: "Electronics" },
    { name: "Shoes", price: 2500, category: "Fashion" },
    { name: "T-Shirt", price: 800, category: "Fashion" },
    { name: "Headphones", price: 1500, category: "Electronics" }
];

function store(){

    console.log("PRODUCT STORE");
    console.log("----------------------");
    console.log(`Products: ${products.length}`);

    // total price
    const totalPrice = products.reduce((prev, curr) => {
        return prev + curr.price;
    },0);

    console.log(`Total Price: ₹${totalPrice}`);
    
    // Total discount
    const discountedAmount = products.map(elem => {
    let discount = elem.price * 0.1;
    return elem.price - discount;
    })

    const totalDiscount = discountedAmount.reduce((prev, curr) => prev + curr,0);

    console.log(`Discounted Total: ₹${totalDiscount}\n`);

    // Cheap products

    console.log("Cheap Products:");    
    const cheapProds = products.filter(elem => elem.price < 2000);
    cheapProds.forEach(elem => console.log(`- ${elem.name}`));

    // Electronics products

    console.log("\nElectronics:");   
    const electronicProds = products.filter(elem => elem.category === "Electronics");
    electronicProds.forEach(elem => console.log(`- ${elem.name}`));

    // Most Expensive product

    console.log("\nMost Expensive Product:");
    const mostExpensiveProd = products.reduce((prev,curr) => {
        return prev.price < curr.price ? curr : prev; 
    });
    console.log("- " + mostExpensiveProd.name);

    // average

    const averagePrice = totalPrice / products.length;
    console.log(`\nAverage Price: ₹${averagePrice}`);
    
    // Product Names

    console.log("\nProduct Names:");   
    const prodNames = products.map(elem => elem.name);
    console.log(prodNames);
    
    // Electronics Total
    const eleProdTotal = electronicProds.reduce((prev, curr) => prev + curr.price,0);
    console.log(`\nElectronics Total: ₹${eleProdTotal}`);
    
}

store();
