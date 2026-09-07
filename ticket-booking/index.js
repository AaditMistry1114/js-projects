const rows = ["A", "B", "C", "D"];
const seatsPerRow = 5;
const price = 200;

const seats = [];

generateSeats();
displaySeats();

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
        

}