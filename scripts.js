const submitButton = document.querySelector("form .submit-button");
submitButton.addEventListener("click", checkInputFields, false);

window.onscroll = () => {
  toggleScrolledNavigationBackground();
};
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

function checkInputFields() {
  const inputFields = document.querySelectorAll("input");
  const message = document.getElementById("message");
  const textArea = document.querySelector('textarea');

  for (let i = 0; i < inputFields.length; i++) {
    try {
        console.log("this is input: " +inputFields[i].value);
        console.log("this is textArea: " +textArea.value);
      if (inputFields[i].value === "" || textArea.value === "") {
        throw "Please fill out the full form";
      } else if(inputFields[i].value > 0 && inputFields[i].value.length > 0 && textArea.value > 0 && textArea.value.length > 0) {
          throw "Thank you for reaching out to me! I will reply within 24 hours";
      }
    } catch (err) {
      message.innerText = err;
    }
  }
  for(let i = 0; i < inputFields.length; i++) {
    inputFields[i].value = "";
  }
  textArea.value = "";
};

