const inputMail = document.querySelector('#mail');
const regex = /[A-Z]/g;

function verifyMail () {
  if ((inputMail.value.match(regex)) != null) {
    inputMail.setCustomValidity("You are not aloud to use capital letters in your email!");
    } else {
      inputMail.setCustomValidity("");
    }
  }
  inputMail.addEventListener('input', verifyMail);
