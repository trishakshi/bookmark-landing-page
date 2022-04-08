let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal");
let modal = document.getElementById("modal");

openModal.onclick = () => {
  modal.classList.add("open");
};

closeModal.onclick = () => {
  modal.classList.remove("open");
};

let accordions = document.querySelectorAll("#accordion");

accordions.forEach((accordion) => {
  accordion.onclick = () => {
    accordion.children[1].classList.toggle("toggle-answer");
    accordion.children[0].children[1].classList.toggle("rotate");
  };
});

let panels = document.getElementsByClassName("panel");

let tabs = document.getElementsByClassName("tab");
tabs[0].onclick = () => {
  panels[0].classList.add("active");
  panels[1].classList.remove("active");
  panels[2].classList.remove("active");
};
tabs[1].onclick = () => {
  panels[0].classList.remove("active");
  panels[1].classList.add("active");
  panels[2].classList.remove("active");
};
tabs[2].onclick = () => {
  panels[0].classList.remove("active");
  panels[1].classList.remove("active");
  panels[2].classList.add("active");
};

let contactBtn = document.getElementById("contact-btn");
let email = document.getElementById("email");
let errorMsg = document.getElementById("error-msg");
let errorIcon = document.getElementById("error-icon");
let input = document.getElementById("input");
const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

contactBtn.onclick = () => {
  if (email.value == "") {
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email.";
    errorMsg.style.display = "block";
    input.classList.add("error__mode");
    errorIcon.style.visibility = "visible";
    input.style.borderBottomLeftRadius = "0";
    input.style.borderBottomRightRadius = "0";
  } else if (!email.value.match(regx)) {
    errorMsg.innerHTML = "Please provide a valid email address.";
    errorMsg.style.display = "block";
    input.classList.add("error__mode");
    errorIcon.style.visibility = "visible";
    input.style.borderBottomLeftRadius = "0";
    input.style.borderBottomRightRadius = "0";
  } else {
    errorMsg.innerHTML = "You've successfully joined the community.";
    errorMsg.style.display = "block";
    errorMsg.style.backgroundColor = "green";
    input.style.border = "2px green solid";
    input.classList.remove("error__mode");
    errorIcon.style.visibility = "hidden";
    input.style.borderBottomLeftRadius = "0";
    input.style.borderBottomRightRadius = "0";
  }
};
