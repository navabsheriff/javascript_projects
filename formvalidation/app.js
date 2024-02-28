const form=document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
    e.preventDefault();

    };
})
function validateInputs(){
    const usernameval=username.value.trim()
    const emailval=email.value.trim()
    const passwordval=password.value.trim()
    const cpasswordval=cpassword.value.trim()
    let success=true;
    if(usernameval==='')
    {
     success=false;

    seterror(username,'username is required')
}
else
{

setsuccess(username)
}
if(emailval===''){
    success=false;

    seterror(email,'email is required')

}
else if(!validateEmail(emailval)){
     success=false;

seterror(email,'please enter valid email')}
else{
    setsuccess(email)
}
if(passwordval===''){
    success=false;

    seterror(password,'password required')
}
else if(passwordval.length<8){
     success=false;

    seterror(password,'8 characters required')
}
else {
    setsuccess(password)
}
if(cpasswordval===''){
    success=false;

    seterror(cpassword,'confirm password required')
}
else if(!cpasswordval==passwordval){
 success=false;

seterror(cpassword,'passwored not matched')}
else{
setsuccess(password)}
return success
}
function setsuccess(element){
    const inputGroup=element.parentElement;
const errorElemnt=inputGroup.querySelector('.error')
errorElemnt.innerText='';
inputGroup.classList.add('success')
inputGroup.classList.remove('error')    
    
}
function seterror(element,message){
    const inputGroup=element.parentElement;
const errorElemnt=inputGroup.querySelector('.error')
errorElemnt.innerText=message;

inputGroup.classList.add('error')
inputGroup.classList.remove('success')  }
const validateEmail =(email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/)    

}