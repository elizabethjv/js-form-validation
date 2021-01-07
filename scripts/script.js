
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const number = document.getElementById("number");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");

//add event
//syntax element.addEventListener(event{click, submit, mouseover, mouseout}, callback function)
form.addEventListener("submit", function(event){
    event.preventDefault(); /*when the page gets loaded the form gets submitted by default, this method prevents it*/
    validate();  
});

//setting the error message in the html
function setErrorMsg(input, errormsg){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");
    small.innerText = errormsg;
    formcontrol.className = "form-control error"; //adds additional div with this class name to that specific form-control div, enabling the styling for it as well
}

function setSuccessMsg(input){
    const formcontrol = input.parentElement;
    formcontrol.className = "form-control success";
}

//email validate
function isEmail(emailVal){
    var atSymbol = emailVal.indexOf("@"); //indexOf() returns the position of the first occurence of the specified value and returns -1 if it never occurs
    if(atSymbol <1)
        return false;

    var dot =  emailVal.lastIndexOf(".");
    if(dot <= atSymbol+2)
        return false;
    if (dot === emailVal.length-1)
        return false; 
    return true;
}

function sendData(sRate, count){
    if(count === sRate){
        swal("Welcome "+username.value.trim(), "Registration successful", "success");
        // location.href = "page2.html?username=${usernname.value.trim()}"; this didnt work
    }
}

//final validation
function successMsg(){
    let formcontrol = document.getElementsByClassName("form-control"); //since there are multiple form-control divs, all of them will be passed to the variable as an array
    var count = formcontrol.length-1;
    for(var i = 0; i<formcontrol.length; i++){ //formcontrol.length is 5
        if (formcontrol[i].className === "form-control success"){
            var sRate = 0+i;
            console.log(sRate);
            sendData(sRate, count);
        }
        else
            return false;
    }
}

//define the validate()
function validate(){
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const numberVal = number.value.trim();
    const passwordVal = password.value.trim();
    const confirm_passwordVal = confirm_password.value.trim();

    //validate username
    if (usernameVal === ""){
        setErrorMsg(username, "Username cannot be blank");
    }
    else if(usernameVal.length <= 2){
        setErrorMsg(username, "Username requires minimum 3 characters");
    }
    else
        setSuccessMsg(username);

    //validate email
    if (emailVal === ""){
        setErrorMsg(email, "Email cannot be blank");
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, "Email is not valid");
    }
    else
        setSuccessMsg(email);

    //validate phone number
    if (numberVal === ""){
        setErrorMsg(number, "Number cannot be blank");
    }
    else if(numberVal.length != 10){
        setErrorMsg(number, "Phone number must be 10 digits"+numberVal.length);
    }
    else
        setSuccessMsg(number);

    //validate password
    if (passwordVal === ""){
        setErrorMsg(password, "Password cannot be blank");
    }
    else if(passwordVal.length < 5){
        setErrorMsg(password, "Password must have minimum 5 characters");
    }
    else
        setSuccessMsg(password);

    //validate confirm password
    if (confirm_passwordVal === ""){
        setErrorMsg(confirm_password, "Confirm password cannot be blank");
    }
    else if(confirm_passwordVal != passwordVal){
        setErrorMsg(confirm_password, "Password does not match");
    }
    else
        setSuccessMsg(confirm_password);

    successMsg();
}