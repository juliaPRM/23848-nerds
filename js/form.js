var btn = document.querySelector(".js-open-form");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector(".write-form");
var username = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("username");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  if (storage) {
    username.value = storage;
    email.focus();
  } else {
    username.focus();
  }    
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error")
});

form.addEventListener("submit", function(event) {
  if (!username.value || !email.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("username", username.value);
  }
});


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error")
    }
  }
});

var html = document.documentElement;
  html.className = html.className.replace("no-js","js");