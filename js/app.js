/*/////////Oprimiendo Teclado Numerico
function mostrarNumero(event)
{
    var teclaNumeros = event.which || event.keyCode;  
    document.querySelector('.pantalla #display').innerHTML=String.fromCharCode(teclaNumeros);
}
document.onkeypress=mostrarNumero;*/

////////////Modificar Tamaño de Tecla
var btnTecla = document.getElementsByClassName("tecla");

btnTecla.addEventListener("click",function(event)
{
    btnTecla.style.width = "20%";
});

/////////////////////////////////////Tecla ON/C
var teclaOn = document.getElementById('on');

teclaOn.addEventListener("click",function(event)
{
    var mensaje = "Hola";
    document.querySelector('.pantalla #display').innerHTML = mensaje;
});

///////Teclado Numerico
var TeclasNum = document.getElementsByClassName('tecla');

TeclasNum.addEventListener("click",function(event)
{
    var tec1 = document.getElementById('1');
    var tec2 = document.getElementById('2');
    var tec3 = document.getElementById('3');
    var tec4 = document.getElementById('4');
    var tec5 = document.getElementById('5');
    var tec6 = document.getElementById('6');
    var tec7 = document.getElementById('7');
    var tec8 = document.getElementById('8');
    var tec9 = document.getElementById('9');
    var tec0 = document.getElementById('0');
    var MnsTecla1 ="1";
    var MnsTecla2 ="2";
    var MnsTecla3 ="3";
    var MnsTecla4 ="4";
    var MnsTecla5 ="5";
    var MnsTecla6 ="6";
    var MnsTecla7 ="7";
    var MnsTecla8 ="8";
    var MnsTecla9 ="9";
    var MnsTecla0 ="0";
    
    if(TeclasNum == tec1)
    {
        document.querySelector('.pantalla #display').innerHTML = MnsTecla1;
    }
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