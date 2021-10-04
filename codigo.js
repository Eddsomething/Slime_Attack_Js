var puntos = 0;
var segundos = 10;

function inicia ()
{
    setTimeout (fin, segundos * 1000);
}

function posicion ()
{
 var enemigo = document.getElementById("enemigo");
 enemigo.style.position ="absolute";
 x = Math.floor ((Math.random()* 350)+ 1);
 y = Math.floor ((Math.random()* 350)+ 1);

 enemigo.style.left = x + "px";
 enemigo.style.top =  y + "px";

  puntos++;
}

function fin (){

    alert("GAME OVER - PUNTOS: " + puntos);
}

function posicionlejana()
{
 var enemigo = document.getElementById("enemigo2");
 enemigo.style.position ="absolute";
 x = Math.floor ((Math.random()* 200)+ 1);
 y = Math.floor ((Math.random()* 200)+ 1);

 enemigo.style.left = x + "px";
 enemigo.style.top =  y + "px";

  puntos+=2;
}

function posicionmuylarga()
{
 var enemigo = document.getElementById("enemigo3");
 enemigo.style.position ="absolute";
 x = Math.floor ((Math.random()* 600)+ 1);
 y = Math.floor ((Math.random()* 600)+ 1);

 enemigo.style.left = x + "px";
 enemigo.style.top =  y + "px";

  puntos+=15;
}