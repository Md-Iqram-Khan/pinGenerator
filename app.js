function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("inputField").value = pin;
}

document.getElementById("generatePin").addEventListener("click", function () {
  generatePin();
});

document
  .getElementById("calculatorBody")
  .addEventListener("click", function (e) {
    const number = e.target.innerText;
    const inputNumber = document.getElementById("inputNumbers");
    if (isNaN(number)) {
      if (number == "C") inputNumber.value = "";
    } else {
      const previousInputNumber = inputNumber.value;
      const newNumber = previousInputNumber + number;
      inputNumber.value = newNumber;
    }
  });

function verifyPin() {
  const generatePin = document.getElementById("inputField").value;
  const typedPin = document.getElementById("inputNumbers").value;
  const successMessage = document.getElementById("success");
  const failError = document.getElementById("fail");

  if (generatePin == typedPin) {
    successMessage.style.display = "block";
    failError.style.display = "none";
  } else {
    failError.style.display = "block";
    successMessage.style.display = "none";
  }
}
