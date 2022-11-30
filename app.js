function updateProductNumber(product, price, isAdd) {
  const caseInput = document.getElementById(product + "-number");
  let caseNumber = caseInput.value;
  if (isAdd === true) {
    caseNumber = parseInt(caseInput.value) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseInput.value) - 1;
  }

  caseInput.value = caseNumber;

  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseNumber * price;
  const add = sum();
  const sub = (document.getElementById("sub-total").innerText = add);
  const tax = (document.getElementById("tax-amount").innerText = add / 10);
  document.getElementById("total-price").innerText = sub + tax;
}

function sum() {
  const phoneTotal = document.getElementById("phone-total").innerText;
  const caseTotal = document.getElementById("case-total").innerText;
  const subTotal = parseInt(phoneTotal) + parseInt(caseTotal);
  return subTotal;
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true);
});

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false);
});

document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});
