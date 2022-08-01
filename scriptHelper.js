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
    } else if (isNaN(testInput) === false) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

//write CSS stuff here for colors and such for when the input/parameters are wrong


// Cargo/mass too heavy and also not enough fuel
if (mass > 10000 && fuelLevel < 10000) {
    list.style.visibility= "visible";
    h2.style.color = "rgb(199, 37, 78)"; /*RED*/
    h2.innerHTML = "Shuttle Not Ready for Launch";       
    pilotStatus.innerHTML = 'Pilot ${pilot} is ready for launch';
    copilotStatus.innerHTML = 'Co-pilot ${copilot} is ready for launch';
    fuelStatus.innerHTML = "Fuel level too low for launch";
    massStatus.innerHTML = "Cargo mass too heavy for launch";


 // Fuel level too low but also cargo/mass is good
} else if (fuelLevel < 10000 && mass <= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(199, 37, 78)"; /*RED*/
    h2.innerHTML = "Shuttle Not Ready for Launch";
    fuelStatus.innerHTML = "Fuel level too low for launch";
    pilotStatus.innerHTML = 'Pilot ${pilot} is ready for launch';
    copilotStatus.innerHTML = 'Co-pilot ${copilot} is ready for launch';
    massStatus.innerHTML = "Cargo mass low enough for launch";

// Cargo/mass too heavy but fuel level is good
} else if (mass > 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(199, 37, 78)"; /*RED*/
    h2.innerHTML = "Shuttle Not Ready for Launch";
    pilotStatus.innerHTML = 'Pilot ${pilot} is ready for launch';
    copilotStatus.innerHTML = 'Co-pilot ${copilot} is ready for launch';
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    massStatus.innerHTML = "Cargo mass too heavy for launch";
    
// Shuttle ready for launch with enough fuel and cargo
} else if (mass <= 10000 && fuelLevel >= 10000) {
    list.style.visibility = "visible";
    h2.style.color = "rgb(65, 159, 106)"; /*GREEN*/
    h2.innerHTML = "Shuttle is Ready for Launch";
    pilotStatus.innerHTML = 'Pilot ${pilot} is ready for launch';
    copilotStatus.innerHTML = 'Co-pilot ${copilot} is ready for launch';
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    massStatus.innerHTML = "Cargo mass low enough for launch";
} 


// take/use info from checklist
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let massStatus = document.getElementById("massStatus"); 
    let h2 = document.getElementById("launchStatus");
}


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
    let currentPlanet = planets[randomIndex];
    return currentPlanet;
}


// vvvvv do not touch vvvvv

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
