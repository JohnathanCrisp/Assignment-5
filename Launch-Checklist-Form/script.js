// Write your JavaScript code here!
window.addEventListener("load", init);

function init() {
   let form = document.querySelector("form")
   event.preventDefault()
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let pilotName = pilotNameInput.value;
      event.preventDefault()

      let coPilotNameInput = document.querySelector("input[name=copilotName]");
      let coPilotName = coPilotNameInput.value;
      event.preventDefault()

      let fuelLevelInput = document.querySelector("input[name=fuelLevel]")
      let fuelLevel = fuelLevelInput.value;
      event.preventDefault()
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMass = cargoMassInput.value;
      event.preventDefault()

      if (pilotName === "" || coPilotName === "" || fuelLevel === "" || cargoMass === "") {
         alert("All fields are required");
         event.preventDefault()
         throw Error("All fields are required")
      }

      if (isNaN(fuelLevel) || isNaN(cargoMass)) {
         alert("Please enter a valid input for Fuel level and Cargo Mass")
         event.preventDefault()
         throw Error("Please enter a valud input for Fuel level and Cargo Mass")
      }
      
      for(i=0;i<pilotName.length;i++) {
         if (!isNaN(pilotName[i])) {
            alert("Please enter a Valid Pilot Name")
            event.preventDefault()
            throw Error("Enter valid Pilot Name")
         }
      }
      for(i=0;i<coPilotName.length;i++) {
         if (!isNaN(coPilotName[i])) {
            alert("Please enter a Valid Co-Pilot Name")
            event.preventDefault()
            throw Error("Enter valid Co-Pilot Name")
         }
      }
      
      
     
      let pilotStatus = document.getElementById("pilotStatus")
      pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`
      
      let copilotStatus = document.getElementById("copilotStatus")
      copilotStatus.innerHTML = `Co-Pilot ${coPilotName} is ready for launch`


      if(cargoMass > 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off"
      }

      if(fuelLevel < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch"
         document.getElementById("launchStatus").style.color = "red"
         document.getElementById("fuelStatus").innerHTML = "Fuel level is not high enough for launch"
      }else if(cargoMass <= 10000 || fuelLevel >= 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch"
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch"
         document.getElementById("faultyItems").style.visibility = "visible"
         document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
         document.getElementById("launchStatus").style.color = "green"
      }
   })
}

function getRando(max) {
   return Math.floor(Math.random() * Math.floor(max))
}
let randomDestination = getRando(5)
fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        
   response.json().then( function(data) {
      let spaceEle =  document.getElementById("missionTarget");
      spaceEle.innerHTML = `
      <h2>Mission Destination</h2>
      <ol>
      <li>Name: ${data[randomDestination].name}</li>
      <li>Diameter: ${data[randomDestination].diameter}</li?>
      <li>Star: ${data[randomDestination].star}</li>
      <li>Distance from Earth: ${data[randomDestination].distance}</li>
      <li>Number of Moons: ${data[randomDestination].moons}</li>
      </ol>
      <img src="${data[randomDestination].image}">
      `;
   })
})



