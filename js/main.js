var h2=document.getElementById("form-signin-heading");
h2.innerHTML="Por favor inicia sesión";

var mail=document.getElementById("inputEmail");
mail.placeholder="Correo Electrónico";
var pass=document.getElementById("inputPassword");
pass.placeholder="Contraseña";

var recuerdame=document.getElementsByTagName("span")[0];
recuerdame.innerHTML="Recordar datos";

var boton=document.getElementsByTagName("button")[0];
boton.innerHTML="Iniciar Sesión";