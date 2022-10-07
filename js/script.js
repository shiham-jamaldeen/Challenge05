//get current date and time
var today = moment();
var currentHour = moment().hours();
var currentMin = moment().minutes();
//display current date and time
$("#currentDay").text(today.format("dddd, MMMM, Do YYYY"));
$("#currentHH").text(today.format("HH : MM"));

console.log(currentHour + " : " + currentMin);

// if (currentHour) {
//   $("#note-9").addClass("present");
//   console.log(currentHour);
// }

// for (let block = 900; block<= 1700; block+=100) {
//   const now = Date.getHour();
//     if(now >= block && now <= block+100) {
//         timeBlockDiv.append().addClass("now")

//     }
// }
//Loop to go from 0900 to 1700 time slots
// for (timeBlock = 9; timeBlock <= 17; timeBlock++) {
//   console.log(timeBlock);
//   $("textarea").each(function (index, element) {
//     console.log("index of element:" + index);

//     //console.log(element);
//     //console.log("X:" + element(index));
//     if (currentHour > timeBlock) {
//       $(element).addClass("past");
//     } else if (currentHour > timeBlock) {
//       $(element).addClass("future");
//     } else if (currentHour == timeBlock) {
//       $(element).addClass("present");
//     }
//   });
// }

$(".row").each(function (index, element) {
  //retrieve the id of the current textarea
  //blockHour
  // if (blockHour < currentHour) {
  //   //add the past class
  // } else if (blockHour === currentHour) {
  //   //remove the past class
  //   //add the present class
  //   $(this).addClass("present");
  // } else {
  //   //remove the past class
  //   //remove the present class
  //   //add the future class
  // }
  // console.log(index);
  // console.log(element.textContent);
  // console.log("current HH:" + currentHour);
  //convert x=element.textContent to moment object
  //let blockTime = moment(element.textContent, "hh:mm");
  let stringInt = parseInt(element.children[0].textContent);
  let currentHours = parseInt(currentHour);
  console.log("element coverted: " + stringInt);
  console.log("current hour: " + currentHours);
  console.log(element);
  //console.log(element.children[0].textContent);
  if (stringInt < currentHours) {
    $(element.children[1]).addClass("past");
  } else if (stringInt > currentHours) {
    $(element.children[1]).addClass("future");
  } else {
    $(element.children[1]).addClass("present");
  }

  //console.log("Time in block: " + blockTime);
  //compare compare moment obj with currentHour
});
//   console.log("this is the time block before condition: " + timeBlock);
//   //display colour coding as per the time of the day
//   if (currentHour > timeBlock) {
//     //identify description block
//     //$("#900").addClass("past");
//     console.log(timeBlock);
//     //colour code the description block
//   }
//   if (currentHour < timeBlock) {
//     $("#1100").addClass("future");
//     console.log("with cond: " + timeBlock);
//   }
//   if (currentHour == timeBlock) {
//     $("#1100").addClass("present");
//   }
// }
//$("div").css("backgroundColor", "#ff6961");
