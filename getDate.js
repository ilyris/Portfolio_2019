const getDateButton = document.getElementById("getTime");
const dateString = document.getElementById("formatedDateString");

// getDateButton.addEventListener("click", calculateDate, false);

function calculateDate() {
  const dateInput = document.getElementById("getDate").value;
  let userConvertedDateValue;
  let dateArray = [];

  userConvertedDateValue = new Date(1 + dateInput).toDateString();
  dateArray = userConvertedDateValue.split('');
  dateArray.splice(11, 1);
  dateArray = dateArray.join("");
  dateString.innerText = dateArray;
}

if (getDateButton.addEventListener) {
  getDateButton.addEventListener("click", calculateDate, false);
} else if (getDateButton.attachEvent) {
  getDateButton.attachEvent("onclick", calculateDate);
}
