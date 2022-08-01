// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   missiontarget = document.getElementById("missionTarget");
   missiontarget.innerHTML = `
            <h2>Mission Destination</h2>
                <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter} </li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src=${imageUrl}>
            `
}


//use NaN for this via instructions in assignment
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (!isNaN(testInput))  {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}



// take/use info from checklist
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus"); 
    let h2 = document.getElementById("launchStatus");
}

let form = document.querySelector("form"); 
    form.addEventListener("submit", function(event) { 
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
        
        if (validateInput(pilot.value) == "Empty" || validateInput(copilot.value) == "Empty" || validateInput(fuelLevel.value) == "Empty" || validateInput(cargoLevel.value) == "Empty") {
            list.style.visibility = "hidden"; 
            alert("Fill out every field, nerd!");
            event.preventDefault();
        } 
        if (validateInput(pilot.value) == "Is a Number" || validateInput(copilot.value) == "Is a Number") {
            list.style.visibility = "hidden"; 
            alert("Names are spelled with letters.");
            event.preventDefault();
        }

        if (validateInput(fuelLevel.value) == "Not a Number" || validateInput(cargoLevel.value) == "Not a Number") {
            list.style.visibility = "hidden"; 
            alert("Fuel Level and Cargo Mass are numbers only.");
            event.preventDefault();
        }
        event.preventDefault();
    
        // Cargo/mass too heavy and also not enough fuel
if (cargoLevel > 10000 && fuelLevel < 10000) {
    list.style.visibility= "visible";
    h2.style.color = "rgb(199, 37, 78)"; //red here
    h2.innerHTML = "Shuttle Not Ready for Launch";       
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";


 // Fuel level too low but also cargo/mass is good
} else if (fuelLevel < 10000 && cargoLevel <= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(199, 37, 78)"; //red here
    h2.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

// Cargo/mass too heavy but fuel level is good
} else if (cargoLevel > 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(199, 37, 78)"; //red here
    h2.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    
// Shuttle ready for launch with enough fuel and cargo
} else if (cargoLevel <= 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(65, 159, 106)"; //green here
    h2.innerHTML = "Shuttle is Ready for Launch";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
} 
    });





// I think this is right, pulled planet list/entry method from previous assignment?
async function myFetch() {
    let planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');
    const data = await planetsReturned.json();
    console.log(data);
    return data;
}

//is this how to math?????

function pickPlanet(planets) {
    let randomIndex = Math.floor(Math.random() * planets.length);
    let plannedPlanet = planets[randomIndex];
    return plannedPlanet;
}


// vvvvv do not touch vvvvv

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
