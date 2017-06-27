////////////////Teclado////////////////

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
tec1.onclick="numero('1')";

///////Elementos iniciales al cargar la pagina///////
window.onload = function()
{ //Acciones tras cargar la página
    display=document.querySelector('.pantalla #display'); //elemento pantalla de salida
}
x="0"; //guardar número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

////////////////Para visualizar los primeros numero////////////////
function numero(xx) 
{  //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) 
    {  // inicializar un número, 
        display.innerHTML=xx; //mostrar en pantalla
        x=xx; //guardar número;
    }
    else 
    { //continuar un número
        display.innerHTML+=xx; //añadimos y mostramos en pantalla.
        display.innerHTML+=xx; //añadimos y mostramos en pantalla.
        x+=xx; //añadimos y guardamos
    }
    xi=0 //el número está iniciado y podemos ampliarlo.
}

////////////////Para numeros Decimales////////////////
function numero(xx) 
{ //recoge el número pulsado en el argumento.
    if (x=="0" || xi==1  ) 
    { // inicializar un número, 
        display.innerHTML=xx; //mostrar en pantalla
        x=xx; //guardar número
        if (xx==".") 
        { //si escribimos una coma al principio del número
            display.innerHTML="0."; //escribimos 0.
            x=xx; //guardar número
            coma=1; //cambiar estado de la coma
        }
    }
    else 
    { //continuar escribiendo un número
        if (xx=="." && coma==0) 
        { //si escribimos una coma decimal pòr primera vez
            display.innerHTML+=xx;
            x+=xx;
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
            x+=xx
        }
    }
    xi=0 //el número está iniciado y podemos ampliarlo.
}

////////////////operaciones con dos numeros////////////////

//Operaciones (+ - * /)//
function operar(s) 
{
    ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
    op=s; //guardamos tipo de operación.
    xi=1; //inicializar pantalla.
}

//resta//
function resultado() 
{
    if (op=="no") 
    { //no hay ninguna operación pendiente.
        display.innerHTML=x;	//mostramos el mismo número	
    }
    else 
    { //con operación pendiente resolvemos
        sl=ni+op+x; // escribimos la operación en una cadena
        sol=eval(sl) //convertimos la cadena a código y resolvemos
        display.innerHTML=sol //mostramos la solución
        x=sol; //guardamos la solución
        op="no"; //ya no hay operaciones pendientes
        xi=1; //se puede reiniciar la pantalla.
    }
}

//encadenar funciones//
function operar(s) 
{
         resultado(); //si hay operaciones pendientes se realizan primero
         ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
}	

//Numero Negativo//
function negativo() 
{ 
    nx=Number(x); //convertir en número
    nx=-nx; //cambiar de signo
    x=String(nx); //volver a convertir a cadena
    display.innerHTML=x; //mostrar en pantalla.
}

//Tecla De borrado ON/C//
function borradoTotal() 
{
    display.innerHTML=0; //poner pantalla a 0
    x="0"; //reiniciar número en pantalla
    coma=0; //reiniciar estado coma decimal 
    ni=0 //indicador de número oculto a 0;
    op="no" //borrar operación en curso.
}