// Write your JavaScript code here!

// make a form below


// entered text for the pilot's name, the co-pilot's name, the fuel levels, and the level of the cargo.
window.addEventListener("load", function() {
    const document = window.document
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilot]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoLevel]");
    const list = document.getElementById("faultyItems"); 

    list.style.visibility = "hidden";   

// read or not ready w/validation VVVVVVV

  
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
    }) 


// Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.
// Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed





// below is planets list stuff

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   let pickedPlanet = pickPlanet(listedPlanets);

        addDestinationInfo(window.document, pickedPlanet.name, pickedPlanet.diameter, pickedPlanet.star, pickedPlanet.distance, pickedPlanet.moons, pickedPlanet.image);
   
})

});
