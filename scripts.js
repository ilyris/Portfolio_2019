const submitButton = document.querySelector("form .submit-button");
const selectBoxOptions = document.querySelectorAll("select option");
const selectBox = document.querySelector("select");
const theBody = $('body');

submitButton.addEventListener("click", checkFormFields, false);
// getDateButton.addEventListener('click', calculateDate, false);

window.onscroll = () => {
  toggleScrolledNavigationBackground();
};

// Toggle navigation bar class / measure the window height
const toggleScrolledNavigationBackground = () => {
  // const mainNav = document.getElementById("menuBarWrapper");
  // const mainLinks = document.getElementsByClassName("menuLinkAnchors");
  // const logo = document.querySelector("#logoContainer .logo");

  const mainNav = $('#menuBarWrapper');
  const mainLinks = $('.menuLinkAnchors');
  const logo = $('#logoContainer .logo a');
  

  // mainNav.classList.toggle(
    mainNav.toggleClass("scrolled-nav-background",mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75
  );
  // if (mainNav.classList.contains("scrolled-nav-background")) {
  //   logo.style.color = "#fff";
  // } else {
    if (mainNav.hasClass("scrolled-nav-background")) {
      logo.css("color", "#311B92");
    //   for (let i = 0; i < mainLinks.length; i++) {
      //     mainLinks[i].style.color = "#fff";
    //   }
    mainLinks.each(function() {
      $(this).css('color', '#311B92');
    });
    } else {
  //   logo.style.color = "#fff";
        logo.css("color", "#fff");
        mainLinks.each(function() {
          $(this).css('color', '#fff');
        });
  // }
  }
};

// Validate / exception handle my contact form
function checkFormFields() {
  let fullNameInputVaule = document.getElementById("fullName").value;
  let subjectInputValue = document.getElementById("subject").value;
  let emailInputValue = document.getElementById("email").value;

  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const message = document.getElementById("message");
  const textArea = document.querySelector("textarea");
  const selectBox = document.querySelector("select");
  const warningMessageContainer = document.getElementById(
    "fieldMessageWarningUl"
  );
  const errorMessageLIs = document.querySelectorAll(
    "#fieldMessageWarningUl li"
  );

  let validEntries = 0;
  // Regex Patterns to check for persons name and their email
  const emailPattern = /^[_a-zA-Z0-9\\-]+(.[_a-zA-z0-9\\-]+)*@[a-zA-Z0-9\\-]+([a-zA-Z0-9\\-]+)*(\.[a-z]{2,6})$/;
  const fullNamePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

  //Create LIs of error messages if the address field or name field is not entered
  if (emailPattern.test(emailInputValue) === false) {
    let emailLiNode = document.createElement("LI");
    let emailErrorText = document.createTextNode(
      "Your email address is not valid"
    );
    emailLiNode.appendChild(emailErrorText);
    warningMessageContainer.appendChild(emailLiNode);
  }
  if (fullNamePattern.test(fullNameInputVaule) === false) {
    let nameLiNode = document.createElement("LI");
    let nameErrorText = document.createTextNode(
      "Please use alphabetical characters only for your name"
    );
    nameLiNode.appendChild(nameErrorText);
    warningMessageContainer.appendChild(nameLiNode);
  }
  try {
    // All input fields must have values, if they do not. an error message will be thrown.
    if (
      subjectInputValue === "" ||
      textArea.value === "" ||
      selectBox.value === "" ||
      fullNamePattern.test(fullNameInputVaule) === false ||
      emailPattern.test(emailInputValue) === false
    ) {
      throw "Please fill out the full form";
      // If all fields have a value, the counter for valid enteries goes up.
    } else if (
      subjectInputValue &&
      fullNamePattern.test(fullNameInputVaule) &&
      textArea.value &&
      selectBox.value &&
      emailPattern.test(emailInputValue)
    ) {
      validEntries++;
    }
    // compared the valid entery is 1, if it is thrown a success message
    if (validEntries === 1) {
      throw "Thank you for reaching out to me! I will reply within 24 hours";
    }
  } catch (err) {
    message.innerText = err;

    //Clear the LIs based on the address or name field that has not been filled out.
    for (let i = 0; i < 2; i++) {
      if (errorMessageLIs.length >= 1) {
        errorMessageLIs[i].remove();
      }
    }
  }
// clear all input fields
  emailInput.value = "";
  subjectInput.value = "";
  fullNameInput.value = "";
  textArea.value = "";
  selectBox.value = "";
}

// Add and remove select list options to an array
const checkOptionValue = () => {
  typeOfServiceArray = Array.from(selectBox.selectedOptions).map(
    element => element.value
  );
};
