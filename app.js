/**
 * Will Gillette | 9/16/20
 * Adventure Lab | Javascript
 */

window.onload = scriptMain;

// Require the module with the location info
import{
  info
} from './package.js';

/**
 * Clear Buttons Function
 * Removes all of the elements with the button tag
 * @param {*} adjacentLocations
 */

function clearButtons(){
  document.querySelectorAll('button') // select all of the buttons
  .forEach((btnElement) => {
    btnElement.remove(); // remove all the buttons
  });
}

/**
 * Create Button Function
 * Creates a button for a new location and connects a click event
 * @param {*} locationName The name of the location 
 */

function createButton(locationName){
  // create new button elements and connect click events
  var btn = document.createElement("button");
  btn.innerHTML = locationName; // change the text to the location name

  // button styling
  btn.style.backgroundColor = "DarkTurquoise";
  btn.style.border = "Dark Grey 3px Inset";
  btn.style.width = "33.3%";
  btn.style.height = "100%";
  btn.style.font = "30px Trebuchet MS";
  btn.style.color = "LightCyan";
  btn.style.justifyContent = "center";
  btn.style.float = "left";

  // click event
  btn.onclick = function(){ // connect the click event
    this.onclick = null; // disconnect click event to prevent memory leak
    displayInfo(locationName); // recurse
  } 

  var container = document.getElementById("container");

  if (!container){ // check whether the container element exists
    container = document.createElement("div"); // Create the container
    container.id = "container";

    // container styling
    container.style.position = "absolute";
    container.style.left = "20%";
    container.style.top = "50%";
    container.style.height = "30%";
    container.style.width = "55%";
    container.style.border = "SteelBlue 10px inset";
    container.style.backgroundColor = "SlateGrey";
    
    document.body.appendChild(container); // append the container to the body
  }

  container.appendChild(btn); // append the button to the container
}

/**
 * Display Buttons Function
 * Creates a button for each of the adjacent locations
 * @param {*} adjacentLocations An array of adjacent location names that the button will use
 */

function displayButtons(adjacentLocations){
  for (var key in adjacentLocations){
    createButton(adjacentLocations[key]);
  }
}

/**
 * Display Info Function
 * Updates the description and header elements to correspond with the info of the new locaiton
 * Prompts the user to select a new location
 * @param locationName The name of the current location
 */

function displayInfo(locationName){
  clearButtons();
  var entry = info[locationName];

  if (entry && entry.Description){
    locationLabel.innerHTML = locationName;
    descriptionLabel.innerHTML = `Description: ${entry.Description}`;
    
    if (entry.AdjacentLocations)
      displayButtons(entry.AdjacentLocations);
    else
      descriptionLabel.innerHTML = "Thank you for visiting Ursinus College! We hope you enroll!";
  }
}

/**
 * scriptMain Function
 * Executes when the page is loaded
 */

function scriptMain(){
  displayInfo("BWC");
}