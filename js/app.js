/////////////////////////////////////Tecla ON/C
var teclaOn = document.getElementById('on');

teclaOn.addEventListener("click",function(event)
{
    var mensaje = "Hola";
    document.querySelector('.pantalla #display').innerHTML = mensaje;
});

/////////////////////////////////Teclado Numerico

//Tecla1//
var tec1 = document.getElementById('1');
tec1.addEventListener("click",function(event)
{
    var MnsTecla1 ="1";
    tec1.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla1;
});

//Tecla2//
var tec2 = document.getElementById('2');
tec2.addEventListener("click",function(event)
{
    var MnsTecla2 ="2";
    tec2.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla2;
});

//Tecla3//
var tec3 = document.getElementById('3');
tec3.addEventListener("click",function(event)
{
    var MnsTecla3 ="3";
    tec3.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla3;
});

//Tecla4//
var tec4 = document.getElementById('4');
tec4.addEventListener("click",function(event)
{
    var MnsTecla4 ="4";
    tec4.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla4;
});

//Tecla5//
var tec5 = document.getElementById('5');
tec5.addEventListener("click",function(event)
{
    var MnsTecla5 ="5";
    tec5.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla5;
});

//Tecla6//
var tec6 = document.getElementById('6');
tec6.addEventListener("click",function(event)
{
    var MnsTecla6 ="6";
    tec6.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla6;
});

//Tecla7//
var tec7 = document.getElementById('7');
tec7.addEventListener("click",function(event)
{
    var MnsTecla7 ="7";
    tec7.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla7;
});

//Tecla8//
var tec8 = document.getElementById('8');
tec8.addEventListener("click",function(event)
{
    var MnsTecla8 ="8";
    tec8.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla8;
});

//Tecla9//
var tec9 = document.getElementById('9');
tec9.addEventListener("click",function(event)
{
    var MnsTecla9 ="9";
    tec9.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla9;
});

//Tecla0//
var tec0 = document.getElementById('0');
tec0.addEventListener("click",function(event)
{
    var MnsTecla0 ="0";
    tec0.style.width = "20%";
    document.querySelector('.pantalla #display').innerHTML = MnsTecla0;
});

//tecla.//
var tecpunto = document.getElementById('punto')
tecpunto.addEventListener("click",function(event)
{
    var MnsPunto=".";
    tecpunto.style.width ="20%";
    document.querySelector('.pantalla #diplay').innerHTML = MnsPunto;
});
//////////////////////Operaciones Basicas
var Sumar = document.getElementById('mas');
var Restar = document.getElementById('menos');
var Multiplicar = document.getElementById('por');
var Divicion = document.getElementById('dividido');

var num1 = "";
var num2 = "";
var result="";
var newResult="";

var suma = num1 + num2;
var resta = num1 - num2;
var multiplicacion = num1 * num2;
var divicion = num1 / num2; 

function Operaciones_Basicas()
{
    if(Sumar)
    {
        document.querySelector('.pantalla #display').innerHTML=String.fromCharCode(suma);
    }else if(Restar){
                document.querySelector('.pantalla #display').innerHTML=String.fromCharCode(resta);

             }else if(Multiplicar){
                document.querySelector('.pantalla #display').innerHTML=String.fromCharCode(multiplicacion);
             }else if(Divicion){
                 document.querySelector('.pantalla #display').innerHTML=String.fromCharCode(divicion);
             }
}

//class . id #