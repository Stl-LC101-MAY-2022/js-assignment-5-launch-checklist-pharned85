// make a form below

// entered text for the pilot's name, the co-pilot's name, the fuel levels, and the mass of the cargo.
window.addEventListener("load", function() {
    const document = window.document
    const pilot = document.querySelector("input[name=pilotName]").value.trim();
    const copilot = document.querySelector("input[name=copilotName]").value.trim();
    const fuelLevel = document.querySelector("input[name=fuelLevel]").value.trim();
    const cargoLevel = document.querySelector("input[name=cargoMass]").value.trim();
    const list = document.getElementById("faultyItems");

    list.style.visibility = "hidden";   

// read or not ready w/validation VVVVVVV
// Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.
 
let form = document.querySelector("form"); 

formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);


// Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fRom the list of planets and add that information to your destination.
    })
    let pickedPlanet = pickPlanet(listedPlanets);
 
         addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
    


});


 