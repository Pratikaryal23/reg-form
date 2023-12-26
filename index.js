
function okey(){
    // alert('ds')
let a=document.getElementById('name');
let b=document.getElementById('contact');
let c=document.getElementById('pass');
let d=document.getElementById('confi');
let nameError=document.getElementById('nameError');
let contactError=document.getElementById('contactError');
let PasswordError=document.getElementById('PasswordError')
let shows=document.getElementById('shows');


if(a.value=="" || b.value==""){

    nameError.innerHTML='name is required !'
    // alert('no blanks values are allowed');
    return false;
}
else if(b.value.length<10||b.value.length>10){
    contactError.innerHTML="contact must contain 10 letters !"
    // alert('ennter 10 digites number');
    return false;
}
else if(isNaN(b)===false){
    // alert("characters are not alowed");
    contactError.innerHTML="contact mustnot contain characters"
    return false;
}
else if(c.value<8){
    PasswordError.innerHTML="password must contain 8 letters"
    // alert("password must contain 8 leters");
    return false;
}
else if(c.value!=d.value){
    PasswordError.innerHTML="password must contain 8 letters"
    // alert("password doesn't match");
    return false;
}
else{

    alert('ds')
    shows.innerHTML=`${a.value} ${b.value} $`
    return true;
}
}

