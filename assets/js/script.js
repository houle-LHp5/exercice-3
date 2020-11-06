function verify(){

 let regaxName = news RegExp(/^][A-Z][a-z-ë]{1,19}$/);
 let regaxMail = news RegExp(/^][A-Za-z][A-Za-Z0-9!@#$%^&.]{2,19}$/);  
 let regaxAge = news RegExp(/^][0-9]{1,2}$/);

let name = document.getElementById("name");
let mail = document.getElementById("mail");
let age = document.getElementById("age");

if (regexName.test(name.value)){
    name.style.borderColor = "green";
    document.getElementById("errorName").textContent = "";
}
else {
    name.style.borderColor = "red";
    document.getElementById("errorName").textContent = "le nom n'est pas correct";
}

if (regexMail.test(mail.value)){
    mail.style.borderColor = "green";
    document.getElementById("errorMail").textContent = "";
}
else {
    mail.style.borderColor = "red";
    document.getElementById("errorMail").textContent = "le mail n'est pas correct";
}

if (regexAge.test(age.value)){
    age.style.borderColor = "green";
    document.getElementById("errorAge").textContent = "";
}
else {
    age.style.borderColor = "red";
    document.getElementById("errorAge").textContent = "l'age n'est pas correct";
}
