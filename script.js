const cashForm = document.querySelector(".form");
const amountInputs = document.querySelectorAll("input");
var myNotes = [2000, 500, 100, 20, 10, 5, 1];
const noteList = document.querySelectorAll(".note");

cashForm.addEventListener("submit", (e) => {
  e.preventDefault();
 
  var billValue = Number(amountInputs[0].value);
  var cashGiven = Number(amountInputs[1].value);

  if (billValue === 0 || cashGiven === 0) {
        blankMess = `<div class="result">Bill and cash field can not blank. </div>`;
        document.querySelector(".output").innerHTML = blankMess;
  }else if (billValue > cashGiven) {
    blankMess = `<div class="result">Given cash is less than bill, Please enter a valid ammount </div>`
    document.querySelector('.output').innerHTML = blankMess;
    }else{
        document.querySelector('.result').style.display = 'none';
    }

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

