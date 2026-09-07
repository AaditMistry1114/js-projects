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

    console.log(seats);

}

function displaySeats(){

    // main seat container
    const seatContainer = document.getElementById("seat-container");


    for(let row of rows){

        
        // child element of container
        const rowDiv = document.createElement("div");

        rowDiv.classList.add("seat-row");
        // uniquely give each row identification like an index
        // it looks like data-row = "A"
        rowDiv.dataset.row = row;

        seatContainer.appendChild(rowDiv);

    }

    seats.forEach(elem => {

        const individualSeat = document.createElement("button");
        individualSeat.textContent = elem.id;
        individualSeat.classList.add("seat");
        individualSeat.dataset.seatId = elem.id;
                
        const rowElement = document.querySelector(`[data-row="${elem.row}"]`);

        rowElement.appendChild(individualSeat);

        // console.log(rowElement);

});

}