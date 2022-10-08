//gloabl variables
var today = moment();
var currentHour = moment().hours();
var currentMin = moment().minutes();

function displayCurrentDateAndTime() {
  //display current date and time
  $("#currentDay").text(today.format("dddd, MMMM, Do YYYY"));
  $("#currentHH").text(today.format("HH : MM"));
  console.log(currentHour + " : " + currentMin);
}

function displayRowColour() {
  //loop through the row
  $(".row").each(function (index, element) {
    //check the "div" element (child)
    let stringInt = parseInt(element.children[0].textContent); //convert from string to integer
    //get the current hour
    let currentHours = parseInt(currentHour); //convert from string to integer
    // console.log("element coverted: " + stringInt);
    //console.log("current hour: " + currentHours);
    // console.log(element);
    //console.log(element.children[0].textContent);

    //condition to check the current hour and display the colour, in the child "textarea"
    if (stringInt < currentHours) {
      $(element.children[1]).addClass("past");
    } else if (stringInt > currentHours) {
      $(element.children[1]).addClass("future");
    } else {
      $(element.children[1]).addClass("present");
    }
  });
}

function saveContent() {
  $(".row").click(function (event) {
    console.log(event.target.id);
    //get id of button pressed
    let buttonPressedID = parseInt(event.target.id);
    //get element id of textarea
    var textAreaId = "#" + buttonPressedID + "-1";
    //get element id of textarea
    let contentsText = $(textAreaId).val();
    //store value of textarea
    localStorage.setItem(buttonPressedID, contentsText);
    console.log("button pressed: " + buttonPressedID);
    console.log("context: " + contentsText);
  });
}
function getContent() {
  //select the row
  //
}
//main program
displayCurrentDateAndTime();
displayRowColour();
saveContent();
getContent();
