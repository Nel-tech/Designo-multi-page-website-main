let btn = document.querySelector(".ham-burger");
let mobilenav = document.querySelector(".nav-list");
let errorImage = document.querySelectorAll(".error-form");

mobilenav.style.left = "-100%";

btn.onclick = function () {
  if (mobilenav.style.left == "-100%") {
    mobilenav.style.left = "100%";
    btn.src = "svg/icon-close.svg";
  } else {
    mobilenav.style.left = "-100%";
    btn.src = "svg/icon-hamburger.svg";
  }
};

let form = document.querySelector(".form");
let holderName = document.getElementById("HOLDER-NAME");
let holderEmail = document.getElementById("HOLDER-EMAIL");
let holderNumber = document.getElementById("HOLDER-NUMBER");
let holderMessage = document.querySelector(".HOLDER-MESSAGE");
form.addEventListener("submit", (e) => {
  if (holderName.value === "") {
    checkInputs();
  } else if (holderName.value === "0") {
    checkInputs();
  } else if (holderEmail.value === "") {
    checkInputs();
  } else if (holderNumber.value === "") {
    checkInputs();
  } else if (holderNumber.value !== 16) {
    checkInputs();
  } else if (holderMessage.value === "") {
    checkInputs();
  }
  e.preventDefault();
});

function checkInputs() {
  if (holderName.value === "") {
    setErrorFor(holderName, `Can't be blank`);
  } else {
    setSuccessFor(holderName);
  }

  if (holderEmail.value === "") {
    setErrorFor(holderEmail, "Can't be blank");
  } else {
    setSuccessFor(holderEmail);
  }

  if (holderNumber.value === "") {
    setErrorFor(holderNumber, "Can't be blank");
  } else {
    setSuccessFor(holderNumber);
  }

  if (holderMessage.value === "") {
    setErrorFor(holderMessage, "Can't be blank");
  } else {
    setSuccessFor(holderMessage);
  }
}

function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector("small");
  inputContainer.className = "input-container error";

  small.textContent = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "input-container success";
}

function setSuccessFor(textarea) {
  const inputContainer = textarea.parentElement;
  inputContainer.className = "input-container success textarea";
}
