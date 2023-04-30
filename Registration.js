function myfun(){
    var name=document.getElementById("fullName").value;
    var mail=document.getElementById("emai").value;
    let letters=/^[A-Za-z]+$/;
    let mailfind=/^([a-zA-z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name==""){
        alert("please fill you name");
    }
    if(name.match(letters)){
        return true;
    }
    else{
        alert("Usename Must be In Alphabatic Only");
    }
    if(mail.match(mailfind)){
        return true;

    }
    else{
        alert("Please enter Valid Email Address");
    }

}