let billAmountInput = document.querySelector(".bill-amount");
let numberOfPeopleInput = document.querySelector(".number-of-ppl");
let tipPercentBtn = document.querySelectorAll(".tip-btn");
let tipPerPersonOutput = document.querySelector(".tip-total-per-person");
let totalPerPersonOutput = document.querySelector(".total-per-person");
let customPercentValueInput = document.querySelector(".custom-tip")

//float will take decimal values form the input int will not
function calculateTotal() {
   let billAmount = parseFloat(billAmountInput.value);
   let numberOfPeople = parseInt(numberOfPeopleInput.value);
   let selectedTipPercentage = parseFloat(this.textContent) / 100;


   let tipAmount = billAmount * selectedTipPercentage;
   let total = billAmount + tipAmount;
   let tipPerPerson = tipAmount / numberOfPeople;
   let totalPerPerson = total / numberOfPeople;

   tipPerPersonOutput.textContent = "$" + tipPerPerson.toFixed(2);
   totalPerPersonOutput.textContent = "$" + totalPerPerson.toFixed(2);
   

}

function calculateCustomTipPercent(){
    let billAmount = parseFloat(billAmountInput.value);
    let  numberOfPeople = parseInt(numberOfPeopleInput.value);
    let customPercentValue = parseFloat(customPercentValueInput.value) / 100;


    let tipAmount = billAmount * customPercentValue;
    let total = billAmount + tipAmount;
    let tipPerPerson = tipAmount / numberOfPeople;
    let totalPerPerson = total / numberOfPeople;
 
    tipPerPersonOutput.textContent = "$" + tipPerPerson.toFixed(2);
    totalPerPersonOutput.textContent = "$" + totalPerPerson.toFixed(2);   
}

function reset(){
   tipPerPersonOutput.textContent = "$0.00";
   totalPerPersonOutput.textContent = "$0.00";

   billAmountInput.value = "";
   numberOfPeopleInput.value = "";
   customPercentValueInput.value = "";
}

for(let i = 0; i < tipPercentBtn.length; i++){
   tipPercentBtn[i].addEventListener("click", calculateTotal);
}



customPercentValueInput.addEventListener("input", calculateCustomTipPercent);
