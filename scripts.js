const submitButton = document.querySelector("form .submit-button");


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
  if (mainNav.classList.contains("scrolled-nav-background")) {
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
    let validEntries = 0;

    for (let i = 0; i < inputFields.length; i++) {
      try {
        if (inputFields[i].value === "" || textArea.value === "") {
          throw "Please fill out the full form";
        } else if(inputFields[i].value && textArea.value) {
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
}

submitButton.addEventListener("click", checkFormFields, false);