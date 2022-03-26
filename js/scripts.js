// start of booktour contact form

const isvalidEmail = (email) => {
  let emFilter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emFilter.test(String(email).toLocaleLowerCase());
};
const isvalidPhone = (phone) => {
  let phFilter = /[0-9 -()+]+$/;
  return phFilter.test(String(phone).toLocaleLowerCase());
};
let form = document.querySelector(".main-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let locationInput = document.querySelector("#location");
let messageInput = document.querySelector("#message");
let thanks = document.querySelector(".thanks");

let inputs = [nameInput, emailInput, phoneInput, locationInput, messageInput]; //put the inputs gotten from the DOM in an array===helps in calling adding eventlisteners to each element.

let isFormValid = false;

const resetElm = (elm) => {
  //   elm.classList.add("invalid");
  elm.nextElementSibling.classList.add("please");
};
const inValidateElm = (elm) => {
  //   elm.classList.remove("invalid");
  elm.nextElementSibling.classList.remove("please");
};
//validating inputs
let validateInputs = () => {
  isFormValid = true;

  resetElm(nameInput);
  resetElm(emailInput);
  resetElm(phoneInput);
  resetElm(locationInput);
  resetElm(messageInput);

  if (!nameInput.value) {
    inValidateElm(nameInput);
    isFormValid = false;
  }
  if (!isvalidEmail(emailInput.value)) {
    inValidateElm(emailInput);
    isFormValid = false;
  }
  if (!isvalidPhone(phoneInput.value)) {
    inValidateElm(phoneInput);
    isFormValid = false;
  }
  if (!locationInput.value) {
    inValidateElm(locationInput);
    isFormValid = false;
  }
  if (!messageInput.value || messageInput <= 10) {
    inValidateElm(messageInput);
    isFormValid = false;
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thanks.classList.remove("thanks");
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateInputs();
  });
});

// end of booktour contact form
