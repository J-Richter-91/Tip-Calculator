let billAmountInput = document.querySelector(".bill-amount");
let numberOfPeopleInput = document.querySelector(".number-of-ppl");
let tipPercentBtn = document.querySelectorAll(".tip-btn");
let tipPerPersonOutput = document.querySelector(".tip-total-per-person");
let totalPerPersonOutput = document.querySelector(".total-per-person");
let customPercentValueInput = document.querySelector(".custom-tip")


function calculateTotal(){
   const billAmount = parseFloat(billAmountInput.value)
   const numPeople = parseInt(numberOfPeopleInput.value)
   const percent = parseInt(this.textContent) / 100
   

   
   const tipAmount =(billAmount * percent).toFixed(2)
   const total = (parseFloat(tipAmount) + billAmount / numPeople).toFixed(2)

   tipPerPersonOutput.textContent = tipAmount
   totalPerPersonOutput.textContent = total
}

tipPercentBtn.forEach(btn => btn.addEventListener("click",calculateTotal) )


function customTipPercent(){
   const billAmount = parseFloat(billAmountInput.value)
   let numPeople = parseInt(numberOfPeopleInput.value)
   const percent = parseFloat(customPercentValueInput.value) / 100

   const tipAmount =(billAmount * percent).toFixed(2)
   const total = (parseFloat(tipAmount) + billAmount / numPeople).toFixed(2)

   tipPerPersonOutput.textContent = tipAmount
   totalPerPersonOutput.textContent = total

   
   console.log(percent)

}

customPercentValueInput.addEventListener("input", customTipPercent)


customPercentValueInput.addEventListener("input", calculateCustomTipPercent);
