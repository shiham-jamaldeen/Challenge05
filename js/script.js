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
for (timeBlock = 9; timeBlock <= 17; timeBlock++) {
  console.log(timeBlock);
  $("textarea").each(function (index, element) {
    //console.log(index);
    //console.log(element);
    if (currentHour == timeBlock) {
      $(element).addClass("present");
      console.log(index);
      console.log(element);
    }
    if (currentHour >= timeBlock) {
      $(element).addClass("future");
      // console.log(index);
      // console.log(element);
    }
    if (currentHour <= timeBlock) {
      $(element).addClass("past");
    }
  });
}

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
