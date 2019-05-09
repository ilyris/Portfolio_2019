
window.onload = () => {
    grabBrowserInfo();
}

function grabBrowserInfo() {
    const applicationName = document.querySelector('.navigationInformation.appName');
    const applicationVersion = document.querySelector('.navigationInformation.appVersion');
    const geoLocator = document.querySelector('.navigationInformation.geoLocation');
    const navOnline = document.querySelector('.navigationInformation.onLine');
    const whatPlatform = document.querySelector('.navigationInformation.platform');
    const availableMonitorWidth = document.querySelector('.navigationInformation.availWidth');

    applicationName.innerText = `Name of your web browser: ${navigator.appName}`;
    applicationVersion.innerText = `Version of your web browser: ${navigator.appVersion}`;
    geoLocator.innerText = `Your current location(will only work if your location is on): ${navigator.geoLocation}`;
    navOnline.innerText = `Are you online: ${navigator.onLine}`;
    whatPlatform.innerText = `What OS system are you using: ${navigator.platform}`;
    availableMonitorWidth.innerText = `what is the width of your monitor? ${screen.availWidth}px`;

}
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