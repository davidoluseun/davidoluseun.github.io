const bodyElem = document.querySelector("body");

const headerContact = bodyElem.querySelector(".header-contact-wrap");
const headerNav = bodyElem.querySelector(".sub-hd-two-wrap");

const searchBotton = headerNav.querySelector(".header-search-botton");
const menuBotton = headerNav.querySelector(".menu-botton");

const modalAnimation = headerNav.querySelector(".search-modal-background");
const searchModal = headerNav.querySelector(".search-modal");

const modalInput = searchModal.querySelector("#modal-search");
const closeModal = searchModal.querySelector(".close-modal");

const topNav = headerNav.querySelector(".top-nav");
const topNavFirstElem = topNav.querySelector("a");

const mainElem = bodyElem.querySelector("main");

const textareaElem = mainElem.querySelector("textarea");
const keyUpElem = mainElem.querySelector(".keyup-count");

const noticeCheckboxes = mainElem.querySelectorAll('input[name="notice-period"]');

const validationCheckbox = mainElem.querySelector("#privacy-checkbox");
const submitBotton = mainElem.querySelector('input[type="submit"]');

const toTopElem = document.querySelector(".to-top");


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

menuBotton.onclick = () => {

  topNav.classList.toggle("top-nav-active");

  topNavFirstElem.focus();
};

// Modal on and off

searchBotton.onclick = function() {

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

function keyUpEvent() {


  if (keyUpElem.innerHTML == 0 && textareaElem.value.length == 250) {

   textareaElem.style.cssText = "border-color: red; box-shadow: 0 -1px 0 0 red inset";

 } else {

   textareaElem.style = "";
   keyUpElem.innerHTML = 250 - textareaElem.value.length;
 }

}

textareaElem.addEventListener("keyup", keyUpEvent, false);

// Notice period

// Makes checkboxes behave like radio buttons

let checkboxesLength = noticeCheckboxes.length;

function checkNoticeCheckbox() {
  const noticeCheckboxes = mainElem.querySelectorAll(".notice-period-wrap input");
  let checkboxesLength = noticeCheckboxes.length;

  if (this.checked) {
    for (let i = 0; i < checkboxesLength; i++) {

      noticeCheckboxes[i].checked = false;
      this.checked = true;
    }
  }

}

for (let i = 0; i < checkboxesLength; i++) {

  noticeCheckboxes[i].onclick = checkNoticeCheckbox;
}

// Form validation

validationCheckbox.onclick = () => setTimeout(checkPrivacyCheckbox, 10);

function checkPrivacyCheckbox() {

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

  let quarterHeight = bodyElem.clientHeight/4;

  if (window.pageYOffset > quarterHeight) {

    toTopElem.style.display = "block";

  } else {

    toTopElem.style.display = "none";
  }
}

window.addEventListener("scroll", toTop, false);
