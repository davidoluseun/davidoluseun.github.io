const bodyElement = document.querySelector("body");

const headerContact = bodyElement.querySelector(".header-contact-wrap");

const headerNav = bodyElement.querySelector(".sub-hd-two-wrap");

const searchIcon = headerNav.querySelector(".header-search");
const toggleMenu = headerNav.querySelector(".menu-wrap");

const modalAnimation = headerNav.querySelector(".search-modal-background");
const searchModal = headerNav.querySelector(".search-modal");

const modalInput = searchModal.querySelector("#modal-input");
const closeModal = searchModal.querySelector(".close-modal");

const topNav = headerNav.querySelector(".top-nav");

const mainElement = bodyElement.querySelector("main");

const textareaElement = mainElement.querySelector("textarea");
const keyUpParagraph = mainElement.querySelector("#keypress-para");

const noticeCheckboxLabels = mainElement.querySelectorAll(".label");

const validationCheckbox = mainElement.querySelector("#privacy-checkbox");
const submitBotton = mainElement.querySelector('input[type="submit"]');

const toTopElement = document.querySelector(".to-top");



// Sticky navigation

let hdContactHeight = headerContact.offsetHeight;

function sticky() {

  if (window.pageYOffset > hdContactHeight) {

    headerNav.setAttribute("style", "position: fixed; top: 0; width: 100%");

  } else {

    headerNav.removeAttribute("style");

  }
}

window.addEventListener("scroll", sticky, false);

// Toggle navigation

toggleMenu.onclick = () => topNav.classList.toggle("top-nav-active");

// Modal on and off

searchIcon.onclick = function() {

  modalAnimation.style.cssText = "display: block; transform: scale(70); transition: 0.8s";

  setTimeout(function() {

    searchModal.style.cssText = "display: block;";
    modalInput.focus();

  }, 500);

};

closeModal.onclick = function() {

  modalAnimation.style.cssText = "display: block; transform: scale(0)";

  searchModal.style.cssText = "display: none";
  modalInput.blur();

};

// Keyup event

function keyUpFunction() {

  if (keyUpParagraph.innerHTML == 0 && textareaElement.value.length == 250) {

   textareaElement.style.cssText = "border-color: red; box-shadow: 0 -1px 0 0 red inset";

 } else {

   textareaElement.style = "";

 }
  keyUpParagraph.innerHTML = 250 - textareaElement.value.length;
}

textareaElement.addEventListener("keyup", keyUpFunction, false);

// Toggle checkboxes labels

let noticeCheckboxLength = noticeCheckboxLabels.length;

function changeCheckboxLabel() {

  this.firstElementChild.classList.toggle("far");
  this.firstElementChild.classList.toggle("fa-square");

  this.firstElementChild.classList.toggle("fas");
  this.firstElementChild.classList.toggle("fa-check-square");

}

for (let i = 0; i < noticeCheckboxLength; i++) {

  noticeCheckboxLabels[i].onclick = changeCheckboxLabel;

}

// Form validation

validationCheckbox.onclick = () => setTimeout(checkCheckbox, 10);

function checkCheckbox() {

  if (document.mainForm.privacyCheckbox.checked) {

    submitBotton.removeAttribute("disabled");
    submitBotton.style.cursor = "pointer";

  } else {

    submitBotton.setAttribute("disabled", "disabled");
    submitBotton.style.cursor = "not-allowed";

  }
}

// To the top

function toTop() {

  let quarterHeight = bodyElement.clientHeight/4;

  if (window.pageYOffset > quarterHeight) {

    toTopElement.style.display = "block";

  } else {

    toTopElement.style.display = "none";
  }
}

window.addEventListener("scroll", toTop, false);