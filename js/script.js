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


