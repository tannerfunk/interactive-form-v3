console.log("test")

const userName = document.getElementById("name"); // grab the element and focus it when the page loads
userName.focus()

const userJobRole = document.getElementById("title"); //grab these other elements
const userJobRoleOther = document.getElementById("other-job-role");

console.log(userJobRole); 
console.log(userJobRoleOther);

userJobRoleOther.style.display = 'none'; //use javascript to hide it!

userJobRole.addEventListener("change", (e) => {
    if (e.target.value === 'other') {
        userJobRoleOther.style.display = 'block';
    } else {
        userJobRoleOther.style.display = 'none';
    }
    console.log(e.target.value)
});

const userDesign = document.getElementById("design");
const userColor = document.getElementById("color");

//console.log(userDesign);
//console.log(userColor);
//console.log(userColor.children[1]);
userColor.disabled = true

userDesign.addEventListener("change", (event) => {
    userColor.disabled = false;
    for (let i = 1; i < userColor.children.length; ++i) {
        const eVal = event.target.value;
        const userTheme = userColor.children[i].getAttribute("data-theme");
        //console.log(eVal);
        //console.log(userTheme);
        if (eVal === userTheme) {
            userColor.children[i].hidden = false;
            userColor.children[i].setAttribute.select = true;
        } else {
            userColor.children[i].hidden = true;
            userColor.children[i].setAttribute.select = false;
        }
    }
});

const registerElement = document.getElementById("activities");
console.log(registerElement);
const totalCostElement = document.getElementById("activities-cost");
console.log(totalCostElement);

let totalCost = 0;

registerElement.addEventListener("change", (e) => {
    const dataCostRef = e.target.getAttribute("data-cost")
    //console.log(+dataCostRef);
    //console.log(typeof +dataCostRef)
    if (e.target.checked) {
        totalCost = totalCost + +dataCostRef;
    } else {
        totalCost = totalCost - +dataCostRef;
    }
    totalCostElement.innerHTML = 'Total: $' + totalCost
});


const payHow = document.getElementById("payment");
console.log(payHow);
const credit = document.getElementById("credit-card"); //grabbing allll that's related to the credit card
console.log(credit);
const pal = document.getElementById("paypal");
console.log(pal);
const bit = document.getElementById("bitcoin")
console.log(bit);

pal.style.display = "none";
bit.style.display = "none";

payHow.children[2].setAttribute.select = true; //confused about this???!!!
console.log(payHow.children[2].value)

payHow.addEventListener("change", (e) => {
   if (e.target.value == pal.id ) {
       credit.style.display = "none";
       pal.style.display = "block";
       bit.style.display = "none";
  } else if (e.target.value == bit.id ) {
    credit.style.display = "none";
    pal.style.display = "none";
    bit.style.display = "block";
  } else if (e.target.value == credit.id ) {
    credit.style.display = "block";
    pal.style.display = "none";
    bit.style.display = "none";
  }
});


// Name element ----> userName
const userEmail = document.getElementById("email");
// Register element ----> registerElement
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const CVV = document.getElementById("cvv");
const form1 = document.getElementsByTagName("form")[0];
console.log(form1);
const activities = document.querySelectorAll('input[type = "checkbox"]');

form1.addEventListener("submit", (e) => {
    const userNameValue = userName.value;
    let isBadUsername = /^$|\s+/i.test(userNameValue);
    if (isBadUsername) {
        e.preventDefault();
    }
    const userEmailValue = userEmail.value;
    let isGoodEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmailValue);
    console.log(isGoodEmail);
    console.log(userEmail.value);
    if (!isGoodEmail) {
        e.preventDefault();
    }
    let counter = 0;
    for (let i = 0; i < activities.length; ++i) {
        if (activities[i].checked) {
            counter = ++counter;
        }
    }
    if (counter < 1) {
        e.preventDefault();
    }
    if (credit.style.display == "block") {
        const cardNumberValue = cardNumber.value;
        let isGoodCardNumber = /[0-9]{13,16}/.test(cardNumberValue);
        if (!isGoodCardNumber) {
            e.preventDefault();
            console.log(cardNumberValue);
        }
        const zipCodeValue = zipCode.value;
        let isGoodZip = /^(\d{5})?$/.test(zipCodeValue);
        if (!isGoodZip) {
            e.preventDefault();
            console.log(zipCodeValue);
        }
    }

});