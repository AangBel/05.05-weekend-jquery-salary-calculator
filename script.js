$(document).ready(onReady);

function onReady() {
  console.log("I got this.");
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
  console.log(inputFirstName, inputLastName, inputID, inputTitle, inputSalary);
  //---------------------------------------------------------------
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


//let totalSalary = 0;
totalSalary = 0;
totalSalary += inputSalary;
let monthlySalary = 0
monthlySalary += Math.round(totalSalary/12);

$("#sum").append(`
// changed from total salary sum or whatever id named it 
//('Employee Totals: ${monthlySalary}');

$("#salary-input").text(monthlySalary);

$("#salary-input").val(""); //this part is important bc its the .val = values entered


`)
document.getElementById("monthlySalary").innerHTML = monthlySalary
}
// We have to take each input and put it somewhere temporarily so as new employees
// are entered it does not overwrite. We can use totalSalary for this.
//Then we let totalSalary divided by 12 = monthlySalary
//Within some logic, you can highlight the over amount in red

// $("#totalSalary") 
//(inputSalary)+= $("#totalSalary");
//$("#totalSalary").text('Total Salary: ${totalSalary}');
//('Employee Totals: ${totalSalary}');


function removeTable() {
    $(this).parent().parent().remove();
  } //end of remove table
  