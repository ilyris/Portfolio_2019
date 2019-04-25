const submitButton = document.querySelector("form .submit-button");
const selectBoxOptions = document.querySelectorAll('select option');
const selectBox = document.querySelector('select');

for(let i = 0; i < selectBoxOptions.length; i++) {
  selectBoxOptions[i].addEventListener('click', checkOptionValue, false);
}

submitButton.addEventListener("click", checkFormFields, false);


window.onscroll = () => {
  toggleScrolledNavigationBackground();
};

// Toggle navigation bar class / measure the window height
const toggleScrolledNavigationBackground = () => {
  const mainNav = document.getElementById("menuBarWrapper");
  const mainLinks = document.getElementsByClassName("menuLinkAnchors");
  const logo = document.querySelector("#logoContainer .logo");
  mainNav.classList.toggle(
    "scrolled-nav-background",
    mainNav.scrollTop / screen.height > 0.75 ||
      document.documentElement.scrollTop / screen.height > 0.75
  );
  if(mainNav.classList.contains("scrolled-nav-background")) {
    logo.style.color = "#fff";
  } else {
    logo.style.color = "#fff";
    for (let i = 0; i < mainLinks.length; i++) {
      mainLinks[i].style.color = "#fff";
    }
  }
};

// Validate / exception handle my contact form
function checkFormFields() {
    const inputFields = document.querySelectorAll("input");
    const message = document.getElementById("message");
    const textArea = document.querySelector('textarea');
    const selectBox = document.querySelector('select');

    let validEntries = 0;

    for (let i = 0; i < inputFields.length; i++) {
      try {
        if (inputFields[i].value === "" || textArea.value === "" || selectBox.value === "") {
          throw "Please fill out the full form";
        } else if(inputFields[i].value && textArea.value && selectBox.value) {
            validEntries++;
        } if (validEntries === inputFields.length)  {
            throw "Thank you for reaching out to me! I will reply within 24 hours";
        }
      } catch (err) {
        message.innerText = err;
      }
      inputFields[i].value = "";
    }

    textArea.value = "";
    selectBox.value = "";
}
// Add and remove select list options to an array
function checkOptionValue() {
  const typeOfServiceArray = [];
  const createSelectedAttribute = document.createAttribute('selected');

  for(let i = 0; i < selectBoxOptions.length; i++) {
    // selectBoxOptions[i].addEventListener('click', function() {
      if(selectBoxOptions[i].hasAttribute("selected") === false) {
        this.setAttributeNode(createSelectedAttribute);
        console.log('I ran this wil now have the selected attribute');
      }else if(selectBoxOptions[i].hasAttribute('selected') === true) {
        this.removeAttribute("selected");
        console.log('I ran this now does not have the selected atribute');
      }
    // }, false);

  }
}