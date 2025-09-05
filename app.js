// alert("hola");

let form = document.getElementById("form");
let inputForm = document.getElementById("inputForm");
let error = document.getElementById("error");

window.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    empty();
    valid();
  });

  function empty() {
    if (inputForm.value == "") {
      error.classList.remove("hidden");
    }
  }

  function valid() {
    if (inputForm.checkValidity()) {
      error.classList.add("hidden");
      inputForm.value = "";
    } else {
      error.classList.remove("hidden");
    }
  }
});
