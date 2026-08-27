function updateClock() {

    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    const clock = document.getElementById("clock");
    clock.textContent = timeString;

}

updateClock();

// continuously calls function with delayes time in milliseconds;.

setInterval(updateClock, 1000);