const getDateButton = document.getElementById("getTime");
const dateString = document.getElementById("formatedDateString");

getDateButton.addEventListener("click", calculateDate, false);

function calculateDate() {
  const dateInput = document.getElementById("getDate").value;
  let userConvertedDateValue;
  let dateArray = [];
  let manipulatedDate;

  userConvertedDateValue = new Date(1 + dateInput).toDateString();
  dateString.innerText = userConvertedDateValue;
  for (let i = 0; i < userConvertedDateValue.length; i++) {
    dateArray = userConvertedDateValue.charAt(i).splice(10, 1);
    console.log(dateArray);
  }


  manipulatedDate = dateArray;
  console.log(manipulatedDate);
}
