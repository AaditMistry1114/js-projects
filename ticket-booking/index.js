const rows = ["A", "B", "C", "D"];
const seatsPerRow = 5;
const price = 200;
const selectedSeatsList = document.getElementById("selected-seats-list");
const ticketCount = document.getElementById("ticket-count");
const totalPrice = document.getElementById("total-price");
const bookBtn = document.getElementById("book-btn");

const seats = [];

generateSeats();
displaySeats();
selectedSeats();

bookBtn.addEventListener("click", handleBooking);

function generateSeats(){

    for(let row of rows){
        for(let rowNo = 1; rowNo <= seatsPerRow; rowNo++){
            const seat = {
                id : row + rowNo,
                row : row,
                seatNo : rowNo,
                price : price,
                status : "available"
            }
            seats.push(seat);
        }
    }
}

function displaySeats(){

    // main seat container
    const seatContainer = document.getElementById("seat-container");

    // row generation
    for(let row of rows){

        
        // child element of container
        const rowDiv = document.createElement("div");

        rowDiv.classList.add("seat-row");
        // uniquely give each row identification like an index
        // it looks like data-row = "A"
        rowDiv.dataset.row = row;

        seatContainer.appendChild(rowDiv);

    }

    // individual seat generation
    seats.forEach(elem => {

        const individualSeat = document.createElement("button");
        individualSeat.textContent = elem.id;
        individualSeat.classList.add("seat");
        individualSeat.dataset.seatId = elem.id;
        individualSeat.dataset.status = elem.status;   
        
        individualSeat.addEventListener("click",handleSeatClick);
    
        // search which row seat belongs to
        const rowElement = document.querySelector(`[data-row="${elem.row}"]`);

        rowElement.appendChild(individualSeat);
    });
    
}

function handleSeatClick(event){

    // actul element from DOM
    const clickedSeat = event.currentTarget;

    // JS object
    let currentSeat = seats.find( elem => elem.id === clickedSeat.dataset.seatId );

    if(currentSeat.status === "booked"){
        return;
    }
    else if(currentSeat.status === "selected"){
        // update object
        currentSeat.status = "available";
        // update actual DOM element
        event.currentTarget.dataset.status = "available";
    }else{
        // update object
        currentSeat.status = "selected";
        // update actual DOM element
        event.currentTarget.dataset.status = "selected";
    }
    selectedSeats();
}

// To get all selected seats
function selectedSeats(){

    const allSelectedSeats = seats.filter( elem => {
        return elem.status === "selected";
    });

    // all selected seats count
    ticketCount.textContent =  `Tickets:${allSelectedSeats.length}`;

    // all selected tickets price
    totalPrice.textContent =  `Total: ₹${calculateTotalPrice(allSelectedSeats)}`;

    const selectedSeatsIDs = allSelectedSeats.map( elem => {
        return elem.id;
    });

    if( selectedSeatsIDs.length === 0 ){
        selectedSeatsList.textContent = "no seats selected";
    }else{
        selectedSeatsList.textContent = selectedSeatsIDs.join(", ");
    }

}

function calculateTotalPrice(allSelectedSeats){
    return allSelectedSeats.reduce((prev, curr) =>{
        return prev + curr.price;
    },0);
}

function validateBooking(){

    const validSelectedSeats = seats.filter( elem => {
        return elem.status === "selected";
    });

    // if length > 0 -> true
    // if length <= 0 -> false
    return validSelectedSeats.length > 0;
}

function handleBooking(){
    
    if(validateBooking()){
        console.log("Booking can proceed");
    }
    else{
        alert("Please select at least one seat");
    }
}

