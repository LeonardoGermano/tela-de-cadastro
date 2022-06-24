const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
} )
function checkInput(){
const usernameValue = username.value ;
const emailValue = email.value;
const passwordValue = password.value;
const passwordConfirmationValue = passwordConfirmation.value;

if(usernameValue == ''){
    setErrorFor(username, "campo obrigatorio");
}
else{
    setSuccesFor(username);
}

if (emailValue == ''){
    setErrorFor(email, 'campo obrigatorio');
}else if (!checkEmail(emailValue)){
    setErrorFor( email, "por favor, insira um email valido");

}else{
    setSuccesFor(email);
}
if(passwordValue == ''){
    setErrorFor(password, " campo Obrigatorio");

}else if( passwordValue.length < 8){
    setErrorFor(password, " a senha deve ter no minimo 8 caracteres");
} else{
    setSuccesFor(password);
}if(passwordConfirmationValue == ''){
    setErrorFor(passwordConfirmation,"campo obrigatorio");
}else if( passwordConfirmationValue != passwordValue){
    setErrorFor(passwordConfirmation,"as senhas são diferentes");
}else {
    setSuccesFor(passwordConfirmation);
}
}
function setErrorFor( input , message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    //adição menssagem de erro
    small.innerText = message;
    //adição da classe de erro
    formControl.className = 'form-control error';
}

function setSuccesFor( input){
    const formControl = input.parentElement;

    // adição da classe de sucesso
    formControl.className = "form-control success";
    // função para checar se o email é valido
    
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );}