"use strict";
let userNameInput=document.getElementById("userNameInput"),
    emailInput=document.getElementById("emailInput"),
    PasswordInput=document.getElementById("PasswordInput"),
    inputEmail=document.getElementById("inputEmail"),
    inputPass=document.getElementById("inputPass"),
    btnSignUp=document.getElementById("SignUp"),
    btnLogin=document.getElementById("Login"),
    homePage=document.getElementById("welcomScreen"),
    signUpScreen=document.getElementById("signUpScreen"),
    messOfInValidName=document.getElementById("messOfInValidName"),
    messOfInValidPass=document.getElementById("messOfInValidPass"),
    messOfInValidEmail=document.getElementById("messOfInValidEmail"),
    incorrectEmail=document.getElementById("incorrectEmail"),
    invalidLogin=document.getElementById("invalidLogin"),
    existEmail=document.getElementById("existEmail"),
    AllInfo=[];
/******************************localStorage******************************/
function setlocalStorage(){
    localStorage.setItem("login",JSON.stringify(AllInfo));
}
function getLocalStorage(){
    return JSON.parse(localStorage.getItem("login"));
}
if(getLocalStorage()==null){
    setlocalStorage();
}else{AllInfo=getLocalStorage();}
/********************************Sign Up****************************/

function Sign(){
let Data={name:userNameInput.value,email:emailInput.value,password:PasswordInput.value};
let flag=false;
for (let i = 0; i < AllInfo.length; i++) {
    if(AllInfo[i].email==Data.email){
        existEmail.classList.remove("d-none");
        flag=true;
    }
    }
    if(flag==false){
AllInfo.push(Data);
setlocalStorage();
signUpScreen.innerHTML=`

<p class="text-center fa-1x my-4 text-light col-12">Congratulations
Your accout has been created successfully
You can log in to your accont now</P>
<a href="signIn.html" class="btn btn-info w-100 text-light mt-3">Go To Login Page </a>
`
    }
}


/********************************Login****************************/

function Login(){
let data={email2:inputEmail.value,password2:inputPass.value};
let flag=false;
for (let i = 0; i < AllInfo.length; i++) {
    if(AllInfo[i].email==data.email2 && AllInfo[i].password==data.password2){
        homePage.innerHTML=`
        <a class="btn btn-lg fixed-top bg-info text-light p-3" href="index.html">Log Out</a>
        <p class=" text-center fa-2x my-4 text-light">welcom ${AllInfo[i].name}</P>`;
   flag= true;
    } 
    }
   if(flag==false){
    invalidLogin.classList.remove("d-none");
   }
}

    
// btnLogin.addEventListener('click',Login)
   

/********************************Start Validation****************************/
function checkNameSignUp(){
    let regName=/^[A-Z][a-z]{3,8}$/
    return regName.test(userNameInput.value);}
    
function checkPassSignUp(){
     let regpass=/[a-zA-Z1-9]{5,10}$/
     return regpass.test(PasswordInput.value);}

 function checkEmailSignUp(){
        let regpass=/^[a-z]+@[A-z]+.(com|org|edu)$/
        return regpass.test(emailInput.value);
    }

/********************************Name Validation****************************/

function userNameValidation(){
        if(checkNameSignUp()&& checkEmailSignUp()&& checkPassSignUp()){
            btnSignUp.removeAttribute('disabled');
        }
        else{btnSignUp.setAttribute('disabled','true')}
        if (checkNameSignUp()) {
            userNameInput.classList.add('is-valid');
            userNameInput.classList.remove('is-invalid');
            messOfInValidName.classList.add('d-none');
        }
        else if (checkNameSignUp() == false) {
            userNameInput.classList.remove('is-valid');
            messOfInValidName.classList.remove('d-none');
            userNameInput.classList.add('is-invalid');
        }
        if (userNameInput.value == '') {
            userNameInput.classList.remove('is-valid');
            userNameInput.classList.remove('is-invalid');
            messOfInValidName.classList.add('d-none');
        }
    }
    userNameInput.addEventListener('keyup', userNameValidation);

/********************************Email Validation****************************/

    function userEmailValidation(){
        if(checkNameSignUp()&& checkEmailSignUp()&& checkPassSignUp()){
            btnSignUp.removeAttribute('disabled')
        }
        else{btnSignUp.setAttribute('disabled','true')}
        if (checkEmailSignUp()) {
            emailInput.classList.add('is-valid');
            emailInput.classList.remove('is-invalid');
            messOfInValidEmail.classList.add('d-none');
        }
        else if (checkEmailSignUp() == false) {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
            messOfInValidEmail.classList.remove('d-none');
        }
        if (emailInput.value == '') {
            emailInput.classList.remove('is-valid');
            emailInput.classList.remove('is-invalid');
            messOfInValidEmail.classList.add('d-none');
        }
        
    }
    emailInput.addEventListener('keyup', userEmailValidation);

/********************************Password Validation****************************/

    function userPasswordValidation(){
        if(checkNameSignUp()&& checkEmailSignUp()&& checkPassSignUp()){
            btnSignUp.removeAttribute('disabled');
        }
        else{btnSignUp.setAttribute('disabled','true')}
        if (checkPassSignUp()) {
            PasswordInput.classList.add('is-valid');
            PasswordInput.classList.remove('is-invalid');
            messOfInValidPass.classList.add('d-none');
        }
        else if (checkPassSignUp() == false) {
            PasswordInput.classList.remove('is-valid');
            PasswordInput.classList.add('is-invalid');
            messOfInValidPass.classList.remove('d-none')
        }
        if (PasswordInput.value == '') {
            PasswordInput.classList.remove('is-valid');
            PasswordInput.classList.remove('is-invalid');
            messOfInValidPass.classList.add('d-none');
        }

    }
    PasswordInput.addEventListener('keyup', userPasswordValidation);
   
/********************************End Validation****************************/


