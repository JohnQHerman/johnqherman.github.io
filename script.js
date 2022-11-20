var counter = 0;

// increment counter by 1 when button is clicked
function incrementCounter() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
    
    if (counter == 20) {
        alert("You Win!");
        resetCounter();
    }
}

function resetCounter() {
    counter = 0;
    document.getElementById('counter').innerHTML = counter;
}