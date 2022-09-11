const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function calculateSum(Birthdate) {
    Birthdate = Birthdate.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i < Birthdate.length; i++) {
        sum = sum + Number(Birthdate.charAt(i));
    }
    return sum;
}

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your Birthday is Lucky.";
    } else {
        outputBox.innerText = "Your Birthday is not so lucky.";
    }
}

checkNumber.addEventListener("click", function checkBirthdayIsLucky() {
    if (dateOfBirth.value === "" || luckyNumber.value === "") {
        outputBox.innerText = "Please enter values in the fields.";
    } else if (Number(luckyNumber.value) < 0) {
        outputBox.innerText = "Please enter values positive values in fields.";
    } else {
        if (Number(dateOfBirth.value) !== 0 && Number(luckyNumber.value) !== 0) {
            const Birthdate = dateOfBirth.value;
            const sum = calculateSum(Birthdate);
            if (sum && Birthdate) {
                compareValues(sum, luckyNumber.value);
            } else {
                outputBox.innerText = "Please enter both the fields."
            }
        }
        else{
            outputBox.innerText=" values should be greater than 0"
        }
    }
});