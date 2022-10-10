//gloabl variables
var today = moment();
var currentHour = moment().hours();
var currentMin = moment().minutes();

function displayCurrentDateAndTime() {
  //display current date and time
  $("#currentDay").text(today.format("dddd, MMMM, Do YYYY"));
  $("#currentHH").text(today.format("HH : MM")); //24 Hour clock
}

function displayRowColour() {
  //loop through the row
  $(".row").each(function (index, element) {
    //check the "div" element (child)
    let stringInt = parseInt(element.children[0].textContent); //convert from string to integer
    //get the current hour
    let currentHours = parseInt(currentHour); //convert from string to integer
    //check HH
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
  $("i").click(function (event) {
    let buttonPressedID = parseInt(event.target.id);
    //get element id of textarea
    let textAreaId = "#" + buttonPressedID + "-1";
    //get element id of textarea
    let contentsText = $(textAreaId).val();
    //write to local storage
    localStorage.setItem(buttonPressedID, contentsText);
  });
}
function getContent() {
  //display items when loading the page by reading traversing local storage
  //and displaying it in the relevant textarea element

  $(document).ready(function () {
    //use a loop to count timeblock 09 to 17
    for (e = 9; e <= 17; e++) {
      var textareaElementID = "#" + e + "-1";
      $(textareaElementID).val(localStorage.getItem(e));
    }
  });
}

//main program
displayCurrentDateAndTime();
displayRowColour();
saveContent();
getContent();
// //if the "clear all" button is clicked, then all data stored in local storage deleted.
// $("#clearButton").click(function () {
//   $("textarea").empty();
//   for (e = 9; e <= 17; e++) {
//     var textareaElementID = "#" + e + "-1";
//     //var count = e;
//     $(textareaElementID).val(localStorage.removeItem(e));
//   }
// });
