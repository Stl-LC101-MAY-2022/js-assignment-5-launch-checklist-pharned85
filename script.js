// Write your JavaScript code here!

// make a form below


// entered text for the pilot's name, the co-pilot's name, the fuel levels, and the mass of the cargo.
window.addEventListener("load", function() {
    const document = window.document
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilot]");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const mass = document.querySelector("input[name=mass]");

// read or not ready w/validation

<script>
   window.addEventListener("load", function() {
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         let usernameInput = document.querySelector("input[name=username]");
         let teamName = document.querySelector("input[name=team]");
         if (usernameInput.value === "" || teamName.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }
      });
   });
</script>


// Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.
// Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed



event.preventDefault();

// below is planets list stuff

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
   
});

