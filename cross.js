const bcRatioInput = document.querySelector("#bc_ratio");
const usdInput = document.querySelector("#usd_input");
const totalField = document.querySelector("#total_amount");

let bcRatioValue;
let usdAmount;
let totalAmount;

const ratioCalculator = function (usdAmount, bitCoin) {
  totalAmount = usdAmount / bitCoin;
};

bcRatioInput.addEventListener("input", (e) => {
  bcRatioValue = e.target.value;

  if (usdAmount > 0) {
    ratioCalculator(usdAmount, bcRatioValue);
    totalField.textContent = totalAmount;
  } else totalField.textContent = 0;
});

usdInput.addEventListener("input", (e) => {
  usdAmount = e.target.value;

  if (bcRatioValue > 0) {
    ratioCalculator(usdAmount, bcRatioValue);
    totalField.textContent = totalAmount;
  } else totalField.textContent = 0;
});
