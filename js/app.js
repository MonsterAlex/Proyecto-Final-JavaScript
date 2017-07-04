function calculadora(){
    
guardar_num="0"; //guardar número en pantalla
encadenar_ope=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

////////////////Teclado////////////////
////////Numeros////////

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

/////Obtener el numero/////
document.getElementById('0').addEventListener("click", obtener_0);
function obtener_0() 
{
    var cero = document.getElementById('0').getAttribute('id');
    numero(cero);
}

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

/////Obtener el numero/////
document.getElementById('1').addEventListener("click", obtener_1);
function obtener_1() 
{
    var uno = document.getElementById('1').getAttribute('id');
    numero(uno);
}

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

/////Obtener el numero/////
document.getElementById('2').addEventListener("click", obtener_2);
function obtener_2() 
{
    var dos = document.getElementById('2').getAttribute('id');
    numero(dos);
}

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

/////Obtener el numero/////
document.getElementById('3').addEventListener("click", obtener_3);
function obtener_3() 
{
    var tres = document.getElementById('3').getAttribute('id');
    numero(tres);
}

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

/////Obtener el numero/////
document.getElementById('4').addEventListener("click", obtener_4);
function obtener_4() 
{
    var cuatro = document.getElementById('4').getAttribute('id');
    numero(cuatro);
}

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

/////Obtener el numero/////
document.getElementById('5').addEventListener("click", obtener_5);
function obtener_5() 
{
    var cinco = document.getElementById('5').getAttribute('id');
    numero(cinco);
}

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

/////Obtener el numero/////
document.getElementById('6').addEventListener("click", obtener_6);
function obtener_6() 
{
    var seis = document.getElementById('6').getAttribute('id');
    numero(seis);
}

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

/////Obtener el numero/////
document.getElementById('7').addEventListener("click", obtener_7);
function obtener_7() 
{
    var siete = document.getElementById('7').getAttribute('id');
    numero(siete);
}

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

/////Obtener el numero/////
document.getElementById('8').addEventListener("click", obtener_8);
function obtener_8() 
{
    var ocho = document.getElementById('8').getAttribute('id');
    numero(ocho);
}

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

/////Obtener el numero/////
document.getElementById('9').addEventListener("click", obtener_9);
function obtener_9() 
{
    var nueve = document.getElementById('9').getAttribute('id');
    numero(nueve);
}

//////////////////////////////////////////////
////////Funciones, Reiniciar y Decimal////////
/////////////////////////////////////////////

////Tecla ON/C////
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

/////Obtener el Funcion/////
teclaOn.addEventListener("click", function()
{
    borradoTotal();
})

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

/////Obtener el Funcion/////
tecnegativa.addEventListener("click", function()
{
    opuest();
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
/////Obtener el Funcion/////
tecResult.addEventListener("click", function()
{
    resultado();
});

////tecla .////
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
/////Obtener Punto/////
tecpunto.addEventListener("click",function(event)
{
    var Punto_decimal=".";
    numero(Punto_decimal);
});

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

/////Obtener el Funcion/////
tecsuma.addEventListener("click",function(event)
{
    var sumar="+";
    operar(sumar);
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

/////Obtener el Funcion/////
tecresta.addEventListener("click",function(event)
{
    var Resta="-";
    operar(Resta);
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

/////Obtener el Funcion/////
tecmulti.addEventListener("click",function(event)
{
    var Multiplicar="*";
    operar(Multiplicar);
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

/////Obtener el Funcion/////
tecdivicion.addEventListener("click",function(event)
{
    var dividir="/";
    operar(dividir);
});

//operacion raiz//
var tecraiz = document.getElementById('raiz')

//cambio tamaño
tecraiz.addEventListener("mousedown",function()
{
    tecraiz.setAttribute("style", "transform:scale(0.95,0.95)")
});
tecraiz.addEventListener("mouseout",function()
{
    tecraiz.setAttribute("style", "transform:scale(1,1)")
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////Para visualizar los primeros numero////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function numero(xx) 
{  //recoge el número pulsado en el argumento.
    if (guardar_num=="0" || encadenar_ope==1  ) 
    {  // inicializar un número, 
        display.innerHTML=xx; //mostrar en pantalla
        guardar_num=xx; //guardar número;
    }
    else 
    { //continuar un número
        display.innerHTML+=xx; //añadimos y mostramos en pantalla.
        display.innerHTML+=xx; //añadimos y mostramos en pantalla.
        guardar_num+=xx; //añadimos y guardamos
    }
    encadenar_ope=0 //el número está iniciado y podemos ampliarlo.
}

////////////////Para numeros Decimales////////////////
function numero(xx) 
{ //recoge el número pulsado en el argumento.
    if (guardar_num=="0" || encadenar_ope==1  ) 
    { // inicializar un número, 
        display.innerHTML=xx; //mostrar en pantalla
        guardar_num=xx; //guardar número
        if (xx==".") 
        { //si escribimos una coma al principio del número
            display.innerHTML="0."; //escribimos 0.
            guardar_num=xx; //guardar número
            coma=1; //cambiar estado de la coma
        }
    }
    else 
    { //continuar escribiendo un número
        if (xx=="." && coma==0) 
        { //si escribimos una coma decimal pòr primera vez
            display.innerHTML+=xx;
            guardar_num+=xx;
            coma=1; //cambiar el estado de la coma  
        }
        //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
        else if (xx=="." && coma==1) 
        {
            
        } 
        //Resto de casos: escribir un número del 0 al 9: 	 
        else 
        {
            display.innerHTML+=xx;
            guardar_num+=xx
        }
    }
    encadenar_ope=0 //el número está iniciado y podemos ampliarlo.
}

////////////////operaciones con dos numeros////////////////

//Operaciones (+ - * /)//
function operar(s) 
{
    ni=guardar_num //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    encadenar_ope=1; //inicializar pantalla.
}

//resultado//
function resultado() 
{
    if (op=="no") 
    { //no hay ninguna operación pendiente.
        display.innerHTML=guardar_num;	//mostramos el mismo número	
    }
    else 
    { //con operación pendiente resolvemos
        sl=ni+op+guardar_num; // escribimos la operación en una cadena
        sol=eval(sl) //convertimos la cadena a código y resolvemos
        display.innerHTML=sol //mostramos la solución
        guardar_num=sol; //guardamos la solución
        op="no"; //ya no hay operaciones pendientes
        encadenar_ope=1; //se puede reiniciar la pantalla.
    }
/////////////////////Posible idea para consegir que al clickear igual varias veces se encadene el segundo numero mas la operacion asignada mas el resultado de la operacion anterior        
        /*encadena=sol+guardar_num
        display.innerHTML=encadena*/
}

//encadenar funciones//
function operar(s) 
{
         resultado(); //si hay operaciones pendientes se realizan primero
         ni=guardar_num; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         encadenar_ope=1; //inicializar pantalla.
}	

//Numero Negativo//
function opuest() 
{ 
    nx=Number(guardar_num); //convertir en número
    nx=-nx; //cambiar de signo
    guardar_num=String(nx); //volver a convertir a cadena
    display.innerHTML=guardar_num; //mostrar en pantalla.
}

//Tecla De borrado ON/C//
function borradoTotal() 
{
    display.innerHTML=0; //poner pantalla a 0
    guardar_num="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
}

}
calculadora();