// Author: @Daniel4-scratch

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function login(token) {
    setCookie("token", token, 9999);
}

if (window.location.href == "https://www.postlit.dev/tokenlogin"){
    try{
    var token = prompt("Enter your token");
    login(token);
    window.location.href = "https://www.postlit.dev";
    }catch(err){
        alert("An error occured during the login process. Please try again.");
        console.alert("PostLit Token Login Error: " + err);
    }
}
if (window.location.href == "https://www.postlit.dev/mytoken"){
    document.body.innerHTML = '<div class="navbar"><a href="https://www.postlit.dev/"class="main-title-logo">postLit</a></div><h1>MyToken</h1><textarea readonly>'+getCookie('token')+'</textarea>'
}