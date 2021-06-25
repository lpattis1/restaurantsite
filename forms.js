// Payment Input Variables
const paymentInputs = document.querySelectorAll(".details-input");
const completeBtn = document.querySelector(".checkout-btn");
const warningText = document.querySelector(".warning-text");
const paymentForm = document.querySelector(".details-form");

// Reg Ex Storage Object
const regExPatterns = {
  fullname: /^([\w]{3,})+\s+([\w\s]{3,})+$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  phone: /^\d{10}$/,
  card: /\b(?:\d{4}[ -]?){3}(?=\d{4}\b)/,
  cvc: /^[0-9]{3}$/,
  zipcode: /^[0-9]{5}$/,
};

// Validation check function
function validateFormInputs(field, regex) {
  if (regex.test(field.value)) {
    field.classList.add("valid");
    field.classList.remove("invalid");
  } else {
    field.classList.remove("valid");
    field.classList.add("invalid");
  }
}

for (let i = 0; i < paymentInputs.length; i++) {
  completeBtn.addEventListener("click", function (e) {
    if (paymentInputs[i].classList.contains("invalid")) {
      warningText.classList.add("show-warning");
    } else {
      warningText.classList.remove("show-warning");
    }

    if (paymentInputs[i].value === "") {
      warningText.classList.add("show-warning");
    } else {
      warningText.classList.remove("show-warning");
    }
  });
}

// Payment input loop
paymentInputs.forEach((input) => {
  input.addEventListener("keyup", function (e) {
    validateFormInputs(e.target, regExPatterns[e.target.attributes.name.value]);
  });
});
