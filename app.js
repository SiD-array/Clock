// Get DOM elements
const hrs = document.querySelector("#hrs");
const mins = document.querySelector("#min");
const secs = document.querySelector("#sec");
const change = document.getElementById("toggle");

// Add leading zero to numbers less than 10
const padZero = (num) => num < 10 ? `0${num}` : num;

// Update clock display
const updateClock = () => {
    const currentTime = new Date();
    
    // Handle hours based on 12/24 hour format
    if (change.checked) {
        // 24-hour format
        hrs.innerHTML = padZero(currentTime.getHours());
    } else {
        // 12-hour format
        let hours = currentTime.getHours();
        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
            hours = 12;
        }
        hrs.innerHTML = padZero(hours);
    }
    
    // Update minutes and seconds
    mins.innerHTML = padZero(currentTime.getMinutes());
    secs.innerHTML = padZero(currentTime.getSeconds());
};

// Update clock every second
setInterval(updateClock, 1000);

// Initial call to avoid delay on page load
updateClock();