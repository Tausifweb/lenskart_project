let signUp = document.getElementById("sign-up");
let signIn = document.getElementById("sign-in");
var elements = document.getElementsByTagName("*");

function signup() {
    signUp.style.display = "flex";
    signIn.style.display = "none";
}

function signin() {
    signUp.style.display = "none";
    signIn.style.display = "flex";
}

function closeOption() {
    signUp.style.display = "none";
    signIn.style.display = "none";
}