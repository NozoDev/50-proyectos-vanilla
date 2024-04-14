const bill = document.getElementById("bill");
const tip = document.getElementById("tip");
const total = document.getElementById("total");
const totalCalculate = document.getElementById("calculate");

function calculate() {
  const billValue = bill.value;
  const tipValue = tip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  total.innerText = totalValue.toFixed(2);
}

totalCalculate.addEventListener("click", calculate);
