$(document).ready(onReady);

function onReady() {
  console.log("I got this.");
  //   $("#fire-btn").on("click", createFire);
  //   $("#ice-btn").on("click", createIce);
  $("#tableBody").on("click", "#delete-btn", removeTable);
  $("#submit-btn").on("click", addToTable);
} //end of onReady
//---------------------------------------------------------------
function addToTable(event) {
  let inputFirstName = $("#first-name-input").val();
  let inputLastName = $("#last-name-input").val();
  let inputID = $("#id-input").val();
  let inputTitle = $("#title-input").val();
  let inputSalary = $("#salary-input").val();
  console.log(inputFirstName,inputLastName, inputID, inputTitle, inputSalary);
  event.preventDefault();
  $("#tableBody").append(`      
  <tr>
      <td>${inputFirstName}</td>
      <td>${inputLastName}</td>
      <td>${inputID}</td>
      <td>${inputTitle}</td>
      <td>${inputSalary}</td>
      <td><button id="delete-btn">Delete</button></td>
  </tr>
  
  `);
} //add to table end
//---------------------------------------------------------------
function removeTable() {
  $(this).parent().parent().remove();
} //end of remove table

//---------------------------------------------------------------
function calculateSalaryCosts(){
    for( let i = 0; i < inputSalary; i++ ){

    }
    //would i have to also do sum = 0 - what does this do again? 
    //it holds a placeholder for the numbers to go in 
};//end of calculate Salary Costs


//const inputSalary = number => {
    //const sum = inputOne + inputTwo + inputThree;
    //return sum;

//};//end of inputSalary //should i name it like sumSalary instead to dist.?

//what i want to do is to take the input of salary to add to the other salary 
//input salary and to get a sum and then take that sum and 
//have it display there at the bottom of the table 