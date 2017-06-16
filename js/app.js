/////////////////////////////////////Tecla ON/C
//Cambio de Tamaño//
document.getElementById('on').addEventListener("mousedown", mouseDowni);
document.getElementById('on').addEventListener("mouseup", mouseUpi);

function mouseDowni()
{
    document.getElementById('on').style.width="21%";
}
function mouseUpi()
{
    document.getElementById('on').style.width="22%";
}
////
var teclaOn = document.getElementById('on');

teclaOn.addEventListener("click",function(event)
{
    var mensaje = "Hola";
    document.querySelector('.pantalla #display').innerHTML = mensaje;
});

/////////////////////////////////Teclado Numerico

////Tecla1////
//Cambio de Tamaño//
document.getElementById('1').addEventListener("mousedown", mouseDowno);
document.getElementById('1').addEventListener("mouseup", mouseUpo);

function mouseDowno()
{
    document.getElementById('1').style.width="21%";
}
function mouseUpo()
{
    document.getElementById('1').style.width="22%";
}
////
var tec1 = document.getElementById('1');
tec1.addEventListener("click",function(event)
{
    var MnsTecla1 ="1";
    document.getElementById('1').onclick=ReducirTamaño;
    document.getElementById('1').onmouseout=tamañoNormal; 
    document.querySelector('.pantalla #display').innerHTML = MnsTecla1;
});

////Tecla2////
//Cambio de Tamaño//
document.getElementById('2').addEventListener("mousedown", mouseDowna);
document.getElementById('2').addEventListener("mouseup", mouseUpa);

function mouseDowna()
{
    document.getElementById('2').style.width="21%";
}
function mouseUpa()
{
    document.getElementById('2').style.width="22%";
}
////
var tec2 = document.getElementById('2');
tec2.addEventListener("click",function(event)
{
    var MnsTecla2 ="2";
    tec2.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla2;
});

////Tecla3////
//Cambio de Tamaño//
document.getElementById('3').addEventListener("mousedown", mousePress);
document.getElementById('3').addEventListener("mouseup", mousedesPress);

function mousePress()
{
    document.getElementById('3').style.width="21%";
}
function mousedesPress()
{
    document.getElementById('3').style.width="22%";
}
////
var tec3 = document.getElementById('3');
tec3.addEventListener("click",function(event)
{
    var MnsTecla3 ="3";
    tec3.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla3;
});

////Tecla4////
//Cambio de Tamaño//
document.getElementById('4').addEventListener("mousedown", numPress);
document.getElementById('4').addEventListener("mouseup", NumdesPress);

function numPress()
{
    document.getElementById('4').style.width="21%";
}
function NumdesPress()
{
    document.getElementById('4').style.width="22%";
}
////
var tec4 = document.getElementById('4');
tec4.addEventListener("click",function(event)
{
    var MnsTecla4 ="4";
    tec4.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla4;
});

////Tecla5////
//Cambio de Tamaño//
document.getElementById('5').addEventListener("mousedown", botPress);
document.getElementById('5').addEventListener("mouseup", botdesPress);

function botPress()
{
    document.getElementById('5').style.width="21%";
}
function botdesPress()
{
    document.getElementById('5').style.width="22%";
}
////
var tec5 = document.getElementById('5');
tec5.addEventListener("click",function(event)
{
    var MnsTecla5 ="5";
    tec5.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla5;
});

////Tecla6////
//Cambio de Tamaño//
document.getElementById('6').addEventListener("mousedown", botoPress);
document.getElementById('6').addEventListener("mouseup", botodesPress);

function botoPress()
{
    document.getElementById('6').style.width="21%";
}
function botodesPress()
{
    document.getElementById('6').style.width="22%";
}
////
var tec6 = document.getElementById('6');
tec6.addEventListener("click",function(event)
{
    var MnsTecla6 ="6";
    tec6.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla6;
});

////Tecla7////
//Cambio de Tamaño//
document.getElementById('7').addEventListener("mousedown", botonPress);
document.getElementById('7').addEventListener("mouseup", botondesPress);

function botonPress()
{
    document.getElementById('7').style.width="21%";
}
function botondesPress()
{
    document.getElementById('7').style.width="22%";
}
////
var tec7 = document.getElementById('7');
tec7.addEventListener("click",function(event)
{
    var MnsTecla7 ="7";
    tec7.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla7;
});

////Tecla8////
//Cambio de Tamaño//
document.getElementById('8').addEventListener("mousedown", numePress);
document.getElementById('8').addEventListener("mouseup", numedesPress);

function numePress()
{
    document.getElementById('8').style.width="21%";
}
function numedesPress()
{
    document.getElementById('8').style.width="22%";
}
////
var tec8 = document.getElementById('8');
tec8.addEventListener("click",function(event)
{
    var MnsTecla8 ="8";
    tec8.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla8;
});

////Tecla9////
//Cambio de Tamaño//
document.getElementById('9').addEventListener("mousedown", Presionandobnt);
document.getElementById('9').addEventListener("mouseup", desprecionandobtn);

function Presionandobnt()
{
    document.getElementById('9').style.width="21%";
}
function desprecionandobtn()
{
    document.getElementById('9').style.width="22%";
}
////
var tec9 = document.getElementById('9');
tec9.addEventListener("click",function(event)
{
    var MnsTecla9 ="9";
    tec9.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla9;
});

////Tecla0////
//Cambio de Tamaño//
document.getElementById('0').addEventListener("mousedown", PressBtn);
document.getElementById('0').addEventListener("mouseup", DesPress);

function PressBtn()
{
    document.getElementById('0').style.width="21%";
}
function DesPress()
{
    document.getElementById('0').style.width="22%";
}
////
var tec0 = document.getElementById('0');
tec0.addEventListener("click",function(event)
{
    var MnsTecla0 ="0";
    tec0.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla0;
});

////tecla.////
//Cambio de Tamaño//
document.getElementById('punto').addEventListener("mousedown", PuntoPress);
document.getElementById('punto').addEventListener("mouseup", PuntoDesPress);

function PuntoPress()
{
    document.getElementById('punto').style.width="21%";
}
function PuntoDesPress()
{
    document.getElementById('punto').style.width="22%";
}
////
var tecpunto = document.getElementById('punto')
tecpunto.addEventListener("click",function(event)
{
    var MnsPunto=".";
    tecpunto.style.width ="20%";
    document.querySelector('.pantalla #diplay').innerHTML = MnsPunto;
});
/////////////////////////////////Teclas de operacion

////operacion Suma////
//Cambio de Tamaño//
document.getElementById('mas').addEventListener("mousedown", SumaPress);
document.getElementById('mas').addEventListener("mouseup", SumaDesPress);

function SumaPress()
{
    document.getElementById('mas').style.width="21%";
}
function SumaDesPress()
{
    document.getElementById('mas').style.width="22%";
}
////
var tecsuma = document.getElementById('mas')
tecsuma.addEventListener("click",function(event)
{
    var mensaje1="+";
    document.querySelector('.pantalla #display').innerHTML = mensaje1;
});

////operacion Resta////
//Cambio de Tamaño//
document.getElementById('menos').addEventListener("mousedown", RestaPress);
document.getElementById('menos').addEventListener("mouseup", RestaDesPress);

function RestaPress()
{
    document.getElementById('menos').style.width="21%";
}
function RestaDesPress()
{
    document.getElementById('menos').style.width="22%";
}
////
var tecresta = document.getElementById('menos')
tecresta.addEventListener("click",function(event)
{
    var mensaje2="-";
    document.querySelector('.pantalla #display').innerHTML = mensaje2;
});

////operacion Multiplicacion////
//Cambio de Tamaño//
document.getElementById('por').addEventListener("mousedown", PorPress);
document.getElementById('por').addEventListener("mouseup", PorDesPress);

function PorPress()
{
    document.getElementById('por').style.width="21%";
}
function PorDesPress()
{
    document.getElementById('por').style.width="22%";
}
////
var tecmulti = document.getElementById('por')
tecmulti.addEventListener("click",function(event)
{
    var mensaje3="*";
    document.querySelector('.pantalla #display').innerHTML = mensaje3;
});

////operacion divicion////
//Cambio de Tamaño//
document.getElementById('dividido').addEventListener("mousedown", DividirPress);
document.getElementById('dividido').addEventListener("mouseup", DividirDesPress);

function DividirPress()
{
    document.getElementById('dividido').style.width="21%";
}
function DividirDesPress()
{
    document.getElementById('dividido').style.width="22%";
}
////
var tecdivicion = document.getElementById('dividido')
tecdivicion.addEventListener("click",function(event)
{
    var mensaje4="/";
    document.querySelector('.pantalla #display').innerHTML = mensaje4;
});

////Signo negativo////
//Cambio de Tamaño//
document.getElementById('sign').addEventListener("mousedown", SignoPress);
document.getElementById('sign').addEventListener("mouseup", SignoDesPress);

function SignoPress()
{
    document.getElementById('sign').style.width="21%";
}
function SignoDesPress()
{
    document.getElementById('sign').style.width="22%";
}
////
var tecnegativa = document.getElementById('sign')
tecnegativa.addEventListener("click",function(event)
{
    var signNegativo="-";
    document.querySelector('.pantalla #display').innerHTML = signNegativo;
});

////Resultados y Consecutivos////
//Cambio de Tamaño//
document.getElementById('igual').addEventListener("mousedown", IgualPress);
document.getElementById('igual').addEventListener("mouseup", IgualDesPress);

function IgualPress()
{
    document.getElementById('igual').style.width="21%"; 
}
function IgualDesPress()
{
    document.getElementById('igual').style.width="22%";
}
////
var tecResult = document.getElementById('igual')
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