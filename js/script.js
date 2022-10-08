//get current date and time
var today = moment();
var currentHour = moment().hours();
var currentMin = moment().minutes();

//display current date and time
$("#currentDay").text(today.format("dddd, MMMM, Do YYYY"));
$("#currentHH").text(today.format("HH : MM"));

console.log(currentHour + " : " + currentMin);

//this code removes the placeholder for all items!

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
//disable text and button for past time **IMPROVEMENT**

//check keypress

$(".row").click(function (event) {
  //window.alert("I was clicked");
  console.log(event.target.id);
  let buttonPressedID = parseInt(event.target.id);
  if (buttonPressedID == 9) {
    //read the value from the
    let contentsText = $("$9-1").val();
    console.log(contentsText);
    localStorage.setItem("key-9-1", contentsText);
  }
});
