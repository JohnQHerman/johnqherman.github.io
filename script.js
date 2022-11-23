var counter = 0;

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

function getUserSync() {
    fetch('https://randomuser.me/api')
        .then(r => r.json())
        .then(RandomUserDataJSON => {
            document.getElementById('json').innerHTML = JSON.stringify(RandomUserDataJSON, null, 2);
            document.getElementById('fullname').innerHTML = RandomUserDataJSON.results[0].name.first + " " + RandomUserDataJSON.results[0].name.last;
            document.getElementById('email').innerHTML = RandomUserDataJSON.results[0].email;
            document.getElementById('picture').src = RandomUserDataJSON.results[0].picture.large;
            document.getElementById('age').innerHTML = "Age " + RandomUserDataJSON.results[0].dob.age;
            document.getElementById('cell').innerHTML = RandomUserDataJSON.results[0].cell;
            document.getElementById('address').innerHTML = RandomUserDataJSON.results[0].location.street.number + " " + RandomUserDataJSON.results[0].location.street.name + ", " + RandomUserDataJSON.results[0].location.city + ", " + RandomUserDataJSON.results[0].location.state + ", " + RandomUserDataJSON.results[0].location.country + " " + RandomUserDataJSON.results[0].location.postcode;
        });
}

window.onload = getUserSync;