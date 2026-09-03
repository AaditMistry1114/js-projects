const addBtn = document.getElementById("addExpense");
const clearBtn = document.getElementById("clear-btn");
const customCategory = document.getElementById("custom-category");
const addCustomBtn = document.getElementById("add-category-btn");
const result = document.getElementById("result");
const totalAmt = document.getElementById("total");
const filterCategory = document.getElementById("filter-category");
let editingIndex = null;

// Get saved expenses from localStorage.
// If no expenses exist, use an empty array.
const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
const categories = JSON.parse(localStorage.getItem("categories")) || [
    "food",
    "travel",
    "shopping",
    "entertainment"
];

category.innerHTML = "";
filterCategory.innerHTML = '<option value="all">All</option>';

categories.forEach((categoryName) => {

    const newOption = document.createElement("option");

    newOption.value = categoryName;
    newOption.textContent = categoryName;

    category.appendChild(newOption);


    const filterOption = document.createElement("option");

    filterOption.value = categoryName;
    filterOption.textContent = categoryName;

    filterCategory.appendChild(filterOption);
});

addBtn.addEventListener("click", () => {

    const description = document.getElementById("description").value;

    const amount = Number(document.getElementById("amount").value);

    const categoryItem = document.getElementById("category").value;

    // regex is applied here
    // ^ = from start of string.
    // $ = till end of string.
    // [accepted chars]
    // + = atleast one character is needed  
    const regex = /^[A-Za-z ]+$/;

    // description cannot be empty
    if(description.trim() === ""){
        window.alert("Add a Description.");
        return;
    }


    if(!regex.test(description)){
        window.alert("Description cannot contain number or special character");
        return;
    }

    if(amount === 0){
        window.alert("Add an amount.");
        return;
    }

    if(amount < 0){
        window.alert("Amount cannot be negative.");
        return;
    }

    const expenseItem = {
        description : description,
        amount : amount,
        category : categoryItem 
    }

    // is editingIndex is null we are just adding expense

    // if editingIndex has index we are in editing mode.

    if(editingIndex === null){
        expenses.push(expenseItem);
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }
    else{
        // reaching array element , and replacing with new element.
        expenses[editingIndex] = expenseItem;
        localStorage.setItem("expenses", JSON.stringify(expenses));
        editingIndex = null;
        addBtn.textContent = "Add Expense";
        clearBtn.textContent = "Clear";
    }

    // after pushing values 
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";


    displayExpenses(expenses);

});

function displayExpenses(expenseList){

    // this html var is a string which will hold all p tags and then replace content inside div
    let html = "";
    expenseList.forEach((item,index) => {

            html += `
            <p>
            ${item.description}|${item.category}|₹${item.amount}
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
            </p>`;

        }
    );

    result.innerHTML = html;

    setupDeleteButtons();
    setupEditButtons();
    calculateTotal();
}

function calculateTotal(){

    const finalAmount = expenses.reduce((prev,curr) => {
        return prev + curr.amount;
    },0);

    totalAmt.textContent = finalAmount;
}


function setupDeleteButtons(){

    // window.confirm("Are you sure ?");
    // you have to apply event listner on all buttons 
    const deleteBtn = document.querySelectorAll(".delete-btn");
    deleteBtn.forEach(element => {
        element.addEventListener("click", () => {
           let elemToDelete = Number(element.dataset.index);

           // confirm() if OK -> true = delete
           // confirm() if CANCEL -> false = no delete

           if(confirm("Are you sure you want to delete expense?")){
                // splice to remove array element, return string so typecast it into Number
                expenses.splice(elemToDelete, 1); //splice(index, elemsToRemove)
                localStorage.setItem("expenses", JSON.stringify(expenses));
                displayExpenses(expenses);
           }

        });
    });
}


function setupEditButtons(){
    const editBtn = document.querySelectorAll(".edit-btn");
    editBtn.forEach(element => {
        element.addEventListener("click", () => {
        
            addBtn.textContent = "Update Expense";

            clearBtn.textContent = "Cancel";

            editingIndex = Number(element.dataset.index);

            let elemToEdit = expenses[Number(element.dataset.index)];

            document.getElementById("description").value = elemToEdit.description;

            document.getElementById("amount").value = elemToEdit.amount;

            document.getElementById("category").value = elemToEdit.category;
        });
    });
}


clearBtn.addEventListener("click", () =>{

    editingIndex = null;

    document.getElementById("description").value = "";

    document.getElementById("amount").value = "";

    addBtn.textContent = "Add Expense";

    clearBtn.textContent = "Clear";

    displayExpenses(expenses);

});

filterCategory.addEventListener("change", () =>{

    let filteredExpenses;
    const selectCategory = filterCategory.value;

    if(selectCategory === "all"){
        filteredExpenses = expenses;
    }
    else{
        filteredExpenses = expenses.filter((elem) => elem.category === selectCategory);
    }

    displayExpenses(filteredExpenses);
});

addCustomBtn.addEventListener("click", () => {

    const categoryName = customCategory.value.trim();

    if (categoryName === "") {
        alert("Enter a category name.");
        return;
    }

    if(categories.includes(categoryName)){
        alert("Category already exists.");
        return;
    }

    // Create option for expense category dropdown
    const newOption = document.createElement("option");

    newOption.value = categoryName;
    newOption.textContent = categoryName;

    category.appendChild(newOption);


    // Create option for filter dropdown
    const filterOption = document.createElement("option");

    filterOption.value = categoryName;
    filterOption.textContent = categoryName;

    filterCategory.appendChild(filterOption);


    // Add category to array
    categories.push(categoryName);

    // Save categories
    localStorage.setItem("categories", JSON.stringify(categories));

    // Clear input
    customCategory.value = "";

    alert("New category added successfully!");
});

// call when page reloads immediately 
displayExpenses(expenses);


