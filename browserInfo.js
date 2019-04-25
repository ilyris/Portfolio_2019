
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