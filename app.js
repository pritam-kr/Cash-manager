const form = document.querySelector('.form')
const amountInputs = document.querySelectorAll('input')
var myNotes = [];

form.addEventListener('submit', (e) =>{
    e.preventDefault()

    var billValue = Number(amountInputs[0].value);
    var cashGiven = Number(amountInputs[1].value);
    
    calculateNotes(billValue, cashGiven)

    // console.log(billValue, cashGiven)
    var blankMess = '';

    if(billValue === 0 || cashGiven === 0){
       blankMess = `<div class="result">Bill and cash field can not blank. </div>`
        document.querySelector('.output').innerHTML = blankMess;
    }else if(billValue > cashGiven){
        blankMess = `<div class="result">Given cash is less than bill, Please enter a valid ammount </div>`
        document.querySelector('.output').innerHTML = blankMess;
     }else if(cashGiven > billValue){
        document.querySelector('.result').style.display = 'none';
     }
    
})

// count notes

function calculateNotes(bill, cash){
    var amountReturn = cash-bill;

     console.log(amountReturn)
    var mess = ''
    if(amountReturn == 0){
        mess = `<div class="result"> No amount would be returned </div>`
        document.querySelector('.output').innerHTML = mess;
    }
}