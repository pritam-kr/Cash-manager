const cashForm = document.querySelector(".form");
const amountInputs = document.querySelectorAll("input");
var myNotes = [2000, 500, 100, 20, 10, 5, 1];
const noteList = document.querySelectorAll(".note");
const btnNext = document.querySelector(".btn-next");

// Show cash given field and remove next button

btnNext.addEventListener("click", (el) => {
  el.preventDefault();
  if (amountInputs[0].value > 0) {
    document.querySelector(".cash-input").style.display = "block";
    btnNext.style.display = "none";
  }
});

// add event listener to button check

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // store bill amount and cash given in a variable
  let billValue = Number(amountInputs[0].value);
  let cashGiven = Number(amountInputs[1].value);

  if (billValue == cashGiven) {
    showMessage("No loss, No pain");
    document.querySelector(".output").style.display = "flex";

  } else if (billValue > cashGiven) {
    showMessage("Given cash can not be less than bill, Please enter a valid ammount");
    document.querySelector(".output").style.display = "flex";
    
  } else if (cashGiven >= billValue) {
    calculateNotes(billValue, cashGiven);
    document.querySelector(".output").style.display = "none";
  }
});

function calculateNotes(bill, cash) {
  const returnAmount = cash - bill;
  calculateTheChage(returnAmount);
}

function calculateTheChage(retnAmt) {
  for (i = 0; i < myNotes.length; i++) {
    const numberOfNotes = Math.trunc(retnAmt / myNotes[i]);
    retnAmt %= myNotes[i];
    noteList[i].innerText = numberOfNotes;
  }
}


// Show message
function showMessage(mess) {
  var blankMess = `<div class="result">${mess}</div>`;
  document.querySelector(".output").innerHTML = blankMess;
}
