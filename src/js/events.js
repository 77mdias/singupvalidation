const validation = require("validator");
const inpUser = document.querySelector("#userName");
const inpEmail = document.querySelector("#userEmail");
const inpPass = document.querySelector("#password");
const inpForm = document.querySelectorAll(".inpForm");
const erroMSG = document.querySelectorAll(".errorMSG");
const inpDiv = document.querySelectorAll(".input-div");

function setError(index) {
  erroMSG[index].style.display = "flex";
  inpForm[index].style.border = "1px solid red";
  inpDiv[index].style.border = "none";
}

function removeError(index) {
  erroMSG[index].style.display = "none";
  inpForm[index].style.border = "1px solid green";
}

function setErrorPassword(index) {
  erroMSG[index].style.display = "flex";
  inpForm[index].style.border = "1px solid red";
  inpDiv[index].style.border = "none";
}

function removeErrorPassword(index) {
  erroMSG[index].style.display = "none";
  inpForm[index].style.border = "1px solid green";
}

document.querySelector("#userEmail").addEventListener("input", () => {
  if (validation.isEmail(inpEmail.value)) {
    removeError(1);
  } else {
    setError(1);
  }
});

inpPass.addEventListener("input", () => {
  if (validation.isStrongPassword(inpPass.value)) {
    removeError(2);
  } else {
    setError(2);
  }
});

inpUser.addEventListener("input", () => {
  if (inpUser.value.length > 6) {
    removeError(0);
  } else {
    setError(0);
  }
});
