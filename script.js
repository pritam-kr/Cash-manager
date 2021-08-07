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

  if (billValue === 0 && cashGiven === 0) {
    blankMess = `<div class="result">Please enter valid amount  </div>`;
    document.querySelector(".output").innerHTML = blankMess;
  } else if (billValue > cashGiven) {
    blankMess = `<div class="result">Given cash can not be less than bill, Please enter a valid ammount </div>`;
    document.querySelector(".output").innerHTML = blankMess;
  } else if (cashGiven > billValue) {
    calculateNotes(billValue, cashGiven);
    document.querySelector(".output").style.display = 'none'
  }
});

function calculateNotes(bill, cash) {
  let returnAmount = cash - bill;

  for (i = 0; i < myNotes.length; i++) {
    returnAmount = compare(returnAmount, myNotes[i], i);
  }
}

function compare(rtnAmt, arrayN, idx) {
  //  console.log(rtnAmt, arrayN);
  //  console.log(rtnAmt >= arrayN)

  if (rtnAmt >= arrayN) {
    let notes = Math.floor(rtnAmt / arrayN);
    rtnAmt = rtnAmt - notes * arrayN;
    noteList[idx].innerHTML = `${notes}`;
   
  }
  return rtnAmt;
}
