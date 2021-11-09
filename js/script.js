

// grab the element and focus it when the page loads
const userName = document.getElementById("name"); 
userName.focus()

//grab these other elements
const userJobRole = document.getElementById("title"); 
const userJobRoleOther = document.getElementById("other-job-role");


//use javascript to hide the other job role entry field
userJobRoleOther.style.display = 'none'; 

//show it if necessary
userJobRole.addEventListener("change", (e) => {
    if (e.target.value === 'other') {
        userJobRoleOther.style.display = 'block';
    } else {
        userJobRoleOther.style.display = 'none';
    }
});

const userDesign = document.getElementById("design");
const userColor = document.getElementById("color");

userColor.disabled = true

//listening to see if choosing a color is necessary
userDesign.addEventListener("change", (event) => {
    userColor.disabled = false;
    for (let i = 1; i < userColor.children.length; ++i) {
        const eVal = event.target.value;
        const userTheme = userColor.children[i].getAttribute("data-theme");
    
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
const totalCostElement = document.getElementById("activities-cost");

let totalCost = 0;
//figure out the total number that should be displayed
registerElement.addEventListener("change", (e) => {
    const dataCostRef = e.target.getAttribute("data-cost")

    if (e.target.checked) {
        totalCost = totalCost + +dataCostRef;
    } else {
        totalCost = totalCost - +dataCostRef;
    }
    totalCostElement.innerHTML = 'Total: $' + totalCost
});


const payHow = document.getElementById("payment");
//grabbing allll that's related to the credit card
const credit = document.getElementById("credit-card"); 
const pal = document.getElementById("paypal");
const bit = document.getElementById("bitcoin")

pal.style.display = "none";
bit.style.display = "none";
//setting default credit card options
payHow.children[1].setAttribute('selected', true);
let creditCheck = payHow.children[1].getAttribute('selected');
//changing the payment options depending on what's clicked
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


// getting ready to deal with all of the following elements
const userEmail = document.getElementById("email");
const cardNumber = document.getElementById("cc-num");
const zipCode = document.getElementById("zip");
const CVV = document.getElementById("cvv");
const form1 = document.getElementsByTagName("form")[0];
const activities = document.querySelectorAll('input[type = "checkbox"]');

let counter = 0;

//multiple functions checking if the aspects of the form are good
function isGoodUsername(){
    const userNameValue = userName.value;
    let isBadUsername = /^$|\s+/i.test(userNameValue);
    if (!isBadUsername) {
        showValid(userName);
        return true;
    } else {
        showInvalid(userName);
        return false;
    }
};

function isGoodEmail(){
    const userEmailValue = userEmail.value;
    let isGoodEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmailValue);
    
    if (isGoodEmail) {
        showValid(userEmail);
        return true;
    } else {
        showInvalid(userEmail);
        return false;
    }
}

const reggy = document.querySelector(".reggy");

function isGoodTotal(){
    for (let i = 0; i < activities.length; ++i) {
        if (activities[i].checked) {
            counter = ++counter;
        }
    }
    if (counter >= 1) {
        showValid(reggy);
        return true;
    } else {
        showInvalid(reggy);
        return false;
    }
}

function isGoodCredit(){
    const cardNumberValue = cardNumber.value;
        let isGoodCardNumber = /^[0-9]{13,16}$/.test(cardNumberValue);
        if (isGoodCardNumber) {
            showValid(cardNumber);
            return true;
        } else {
            showInvalid(cardNumber);
            return false;
        }

}

function isGoodZip(){
    const zipCodeValue = zipCode.value;
        let isGoodZip = /^\d{5}?$/.test(zipCodeValue);
        if (isGoodZip) {
            showValid(zipCode);
            return true;
        } else {
            showInvalid(zipCode);
            return false;
        }
}

function isGoodCVV(){
    const cvvValue = CVV.value;
        let isGoodCVV = /^\d{3}?$/.test(cvvValue);
        if (isGoodCVV) {
            showValid(CVV);
            return true;
        } else {
            showInvalid(CVV);
            return false;
        }
}

// a function summarizing the card info
function isGoodCard(){
    if (pal.style.display === "block" || bit.style.display === "block") {
        return true
    } else {
        const creditChecker = isGoodCredit();
        const zipChecker = isGoodZip();
        const cvvChecker = isGoodCVV();
        return creditChecker && zipChecker && cvvChecker;
    }
}

// a function summarizing ALL the info
function isFormGood(){
    const nameChecker = isGoodUsername();
    const emailChecker = isGoodEmail();
    const totalChecker = isGoodTotal();
    const cardChecker = isGoodCard();
    return nameChecker && emailChecker && totalChecker && cardChecker;

} 
//checking if it's okay to submit
form1.addEventListener("submit", (e) => {
    if (isFormGood()) {
        //RUN
    } else {
        e.preventDefault();
    }
});

const activitiesElements = document.getElementsByTagName("input");

// form validation
for (let i = 1; i < activitiesElements.length; ++i) {
    activitiesElements[i].addEventListener("focus", (e) => {
        activitiesElements[i].parentElement.classList.add("focus");
    })
    activitiesElements[i].addEventListener("blur", (e) => {
        activitiesElements[i].parentElement.classList.remove("focus");
    })
}

const butt = document.querySelector("button");
//showing or not showing hints to the user upon submission
function showValid(element) {
    element.parentElement.classList.add('valid');
    element.parentElement.classList.remove('not-valid');
    element.parentElement.lastElementChild.style.display = 'none';
    butt.style.display = "block";
}

function showInvalid(element){
    element.parentElement.classList.add('not-valid');
    element.parentElement.classList.remove('valid');
    element.parentElement.lastElementChild.style.display = 'block';
}

