console.log("test")

const userName = document.getElementById("name"); // grab the element and focus it when the page loads
userName.focus()
console.log(userName);

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

