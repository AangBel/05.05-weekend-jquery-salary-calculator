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
      <td><button id="delete-btn">❎</button></td
  </tr>
  
  `);
} //add to table end
//---------------------------------------------------------------
function removeTable() {
  $(this).parent().parent().remove();
} //end of remove table

//---------------------------------------------------------------
