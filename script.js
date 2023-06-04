const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");
const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");
const Data = {
  base: "USD",
  date: "1-09-15",
  time_last_update: 15530922232,
  rates: {
    USD: 1,
    AUD: 1.408403,
    CAD: 1.329501,
    CHF: 1.329501,
    CLP: 1.329501,
    CNY: 1.329501,
    COP: 1.329501,
    CZK: 1.329501,
    DKK: 1.329501,
    GBP: 1.329501,
    BSD: 1.329501,
    HRK: 1.329501,
  },
};
// Fetch exchange and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  const rate = Data.rates[currency_two];
  rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
}
currencyEl_one.addEventListener("change", calculate);
amountEl_one.addEventListener("input", calculate);
currencyEl_two.addEventListener("change", calculate);
amountEl_two.addEventListener("input", calculate);
swap.addEventListener("click", () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

// fetch("items.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     const rate = data.rates[currency_two];
//     rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
//   });

// Event listeners

calculate();
