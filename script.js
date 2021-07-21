const cashForm = document.querySelector(".form");
const amountInputs = document.querySelectorAll("input");
var myNotes = [2000, 500, 100, 20, 10, 5, 1];
const noteList = document.querySelectorAll(".note");

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var billValue = Number(amountInputs[0].value);
  var cashGiven = Number(amountInputs[1].value);

  // console.log(billValue, cashGiven)
  calculateNotes(billValue, cashGiven);
});

function calculateNotes(bill, cash) {
  let returnAmount = cash - bill;
  for (i = 0; i < myNotes.length; i++) {
    returnAmount = compare(returnAmount, myNotes[i], i);
  }
}

function compare(rtnAmt, arrayN, idx) {
  if (rtnAmt >= arrayN) {
    let notes = Math.floor(rtnAmt / arrayN);

    rtnAmt = rtnAmt - notes * arrayN;

    noteList[idx].innerHTML = `${notes}`;
  }
  return rtnAmt;
}
