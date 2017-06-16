/////////////////////////////////////Tecla ON/C
var teclaOn = document.getElementById('on');
//Cambio de Tamaño//
teclaOn.addEventListener("mousedown", function()
{
    teclaOn.setAttribute("style","transform:scale(0.95,0.95)")
});

teclaOn.addEventListener("mouseout", function()
{
    teclaOn.setAttribute("style","transform:scale(1,1)")
});
////////
teclaOn.addEventListener("click",function(event)
{
    var mensaje = "Hola";
    document.querySelector('.pantalla #display').innerHTML = mensaje;
});

/////////////////////////////////Teclado Numerico

////Tecla1////
var tec1 = document.getElementById('1');
//Cambio de Tamaño//
tec1.addEventListener("mousedown", function()
{
    tec1.setAttribute("style","transform:scale(0.95,0.95)")
});

tec1.addEventListener("mouseout", function()
{
    tec1.setAttribute("style","transform:scale(1,1)")
});
////////
tec1.addEventListener("click",function(event)
{
    var MnsTecla1 ="1"; 
    document.querySelector('.pantalla #display').innerHTML = MnsTecla1;
});

////Tecla2////
var tec2 = document.getElementById('2');
//Cambio de Tamaño//
tec2.addEventListener("mousedown", function()
{
    tec2.setAttribute("style","transform:scale(0.95,0.95)")
});

tec2.addEventListener("mouseout", function()
{
    tec2.setAttribute("style","transform:scale(1,1)")
});
////////
tec2.addEventListener("click",function(event)
{
    var MnsTecla2 ="2";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla2;
});

////Tecla3////
var tec3 = document.getElementById('3');
//Cambio de Tamaño//
tec3.addEventListener("mousedown", function()
{
    tec3.setAttribute("style","transform:scale(0.95,0.95)")
});

tec3.addEventListener("mouseout", function()
{
    tec3.setAttribute("style","transform:scale(1,1)")
});
////////
tec3.addEventListener("click",function(event)
{
    var MnsTecla3 ="3";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla3;
});

////Tecla4////
var tec4 = document.getElementById('4');
//Cambio de Tamaño//
tec4.addEventListener("mousedown", function()
{
    tec4.setAttribute("style","transform:scale(0.95,0.95)")
});

tec4.addEventListener("mouseout", function()
{
    tec4.setAttribute("style","transform:scale(1,1)")
});
////////
tec4.addEventListener("click",function(event)
{
    var MnsTecla4 ="4";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla4;
});

////Tecla5////
var tec5 = document.getElementById('5');
//Cambio de Tamaño//
tec5.addEventListener("mousedown", function()
{
    tec5.setAttribute("style","transform:scale(0.95,0.95)")
});

tec5.addEventListener("mouseout", function()
{
    tec5.setAttribute("style","transform:scale(1,1)")
});
////////
tec5.addEventListener("click",function(event)
{
    var MnsTecla5 ="5";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla5;
});

////Tecla6////
var tec6 = document.getElementById('6');
//Cambio de Tamaño//
tec6.addEventListener("mousedown", function()
{
    tec6.setAttribute("style","transform:scale(0.95,0.95)")
});

tec6.addEventListener("mouseout", function()
{
    tec6.setAttribute("style","transform:scale(1,1)")
});
////////
tec6.addEventListener("click",function(event)
{
    var MnsTecla6 ="6";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla6;
});

////Tecla7////
var tec7 = document.getElementById('7');
//Cambio de Tamaño//
tec7.addEventListener("mousedown", function()
{
    tec7.setAttribute("style","transform:scale(0.95,0.95)")
});

tec7.addEventListener("mouseout", function()
{
    tec7.setAttribute("style","transform:scale(1,1)")
});
////////
tec7.addEventListener("click",function(event)
{
    var MnsTecla7 ="7";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla7;
});

////Tecla8////
var tec8 = document.getElementById('8');
//Cambio de Tamaño//
tec8.addEventListener("mousedown", function()
{
    tec8.setAttribute("style","transform:scale(0.95,0.95)")
});

tec8.addEventListener("mouseout", function()
{
    tec8.setAttribute("style","transform:scale(1,1)")
});
////////
tec8.addEventListener("click",function(event)
{
    var MnsTecla8 ="8";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla8;
});

////Tecla9////
var tec9 = document.getElementById('9');
//Cambio de Tamaño//
tec9.addEventListener("mousedown", function()
{
    tec9.setAttribute("style","transform:scale(0.95,0.95)")
});

tec9.addEventListener("mouseout", function()
{
    tec9.setAttribute("style","transform:scale(1,1)")
});
////////
tec9.addEventListener("click",function(event)
{
    var MnsTecla9 ="9";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla9;
});

////Tecla0////
var tec0 = document.getElementById('0');
//Cambio de Tamaño//
tec0.addEventListener("mousedown", function()
{
    tec0.setAttribute("style","transform:scale(0.95,0.95)")
});

tec0.addEventListener("mouseout", function()
{
    tec0.setAttribute("style","transform:scale(1,1)")
});
//////
tec0.addEventListener("click",function(event)
{
    var MnsTecla0 ="0";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla0;
});

////tecla.////
var tecpunto = document.getElementById('punto')
//Cambio de Tamaño//
tecpunto.addEventListener("mousedown", function()
{
    tecpunto.setAttribute("style","transform:scale(0.95,0.95)")
});

tecpunto.addEventListener("mouseout", function()
{
    tecpunto.setAttribute("style","transform:scale(1,1)")
});
/////////
tecpunto.addEventListener("click",function(event)
{
    var MnsPunto=".";
    document.querySelector('.pantalla #diplay').innerHTML = MnsPunto;
});
/////////////////////////////////Teclas de operacion

////operacion Suma////
var tecsuma = document.getElementById('mas')
//Cambio de Tamaño//
tecsuma.addEventListener("mousedown", function()
{
    tecsuma.setAttribute("style","transform:scale(0.95,0.95)")
});

tecsuma.addEventListener("mouseout", function()
{
    tecsuma.setAttribute("style","transform:scale(1,1)")
});
///////
tecsuma.addEventListener("click",function(event)
{
    var mensaje1="+";
    document.querySelector('.pantalla #display').innerHTML = mensaje1;
});

////operacion Resta////
var tecresta = document.getElementById('menos')
//Cambio de Tamaño//
tecresta.addEventListener("mousedown", function()
{
    tecresta.setAttribute("style","transform:scale(0.95,0.95)")
});

tecresta.addEventListener("mouseout", function()
{
    tecresta.setAttribute("style","transform:scale(1,1)")
});
////////
tecresta.addEventListener("click",function(event)
{
    var mensaje2="-";
    document.querySelector('.pantalla #display').innerHTML = mensaje2;
});

////operacion Multiplicacion////
var tecmulti = document.getElementById('por')
//Cambio de Tamaño//
tecmulti.addEventListener("mousedown", function()
{
    tecmulti.setAttribute("style","transform:scale(0.95,0.95)")
});

tecmulti.addEventListener("mouseout", function()
{
    tecmulti.setAttribute("style","transform:scale(1,1)")
});
////////
tecmulti.addEventListener("click",function(event)
{
    var mensaje3="*";
    document.querySelector('.pantalla #display').innerHTML = mensaje3;
});

////operacion divicion////
var tecdivicion = document.getElementById('dividido')
//Cambio de Tamaño//
tecdivicion.addEventListener("mousedown", function()
{
    tecdivicion.setAttribute("style","transform:scale(0.95,0.95)")
});

tecdivicion.addEventListener("mouseout", function()
{
    tecdivicion.setAttribute("style","transform:scale(1,1)")
});
////////
tecdivicion.addEventListener("click",function(event)
{
    var mensaje4="/";
    document.querySelector('.pantalla #display').innerHTML = mensaje4;
});

////Signo negativo////
var tecnegativa = document.getElementById('sign')
//Cambio de Tamaño//
tecnegativa.addEventListener("mousedown", function()
{
    tecnegativa.setAttribute("style","transform:scale(0.95,0.95)")
});

tecnegativa.addEventListener("mouseout", function()
{
    tecnegativa.setAttribute("style","transform:scale(1,1)")
});
////////
tecnegativa.addEventListener("click",function(event)
{
    var signNegativo="-";
    document.querySelector('.pantalla #display').innerHTML = signNegativo;
});

////Resultados y Consecutivos////
var tecResult = document.getElementById('igual')
//Cambio de Tamaño//
tecResult.addEventListener("mousedown", function()
{
    tecResult.setAttribute("style","transform:scale(0.95,0.95)")
});

tecResult.addEventListener("mouseout", function()
{
    tecResult.setAttribute("style","transform:scale(1,1)")
});
////////
tecResult.addEventListener("click",function(event)
{
    var mensaje5="=";
    document.querySelector('.pantalla #display').innerHTML = mensaje5;
});

/////////////////////////////////asignar Valores
function retornaValores(num)
{
    var anterior = document.querySelector('.pantalla #display').value;
    
    document.getElementById("display").value = anterior + num;
}