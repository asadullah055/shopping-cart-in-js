function updateCaseNumber(product, price, isIncrease) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isIncrease === true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  // update case total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 59, false);
});
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1229, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1229, false);
});
