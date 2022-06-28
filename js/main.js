// Curso Java Script 1er Ejercicio Complementario - Hans gallardo - Camada
/*
var respuesta = "HELSINKI";       // esta es la respuesta correcta
var acierto = false;              //este es un 'marcador' que cambiaremos si acierta la pregunta al valor 'true'
for (var contador = 0; contador < 3 ; contador++) {
     var respUsuario = prompt("Capital de Finlandia: ");
     if (respUsuario.toUpperCase() === respuesta) {   //pasamos la respuesta a mayúsculas para comparar con la respuesta correcta 
         var acierto = true;                 
         document.write("Enhorabuena, has acertado");
         break;
     }
}

if (!acierto) {document.write("Lo sentimos, has consumido tus 3 intentos")};  //(ver nota abajo)        
       
*/
var userName = 'hanseldorf';
var correcto = false;
for (let cont = 0; cont < 3; cont++) {
    let respUser = prompt('Indique su nombre de usuario: ');
    if (respUser === userName) {
        var correcto = true;
        alert('Gracias, su usuario es correcto');
    }
    else if (intento = false){
        alert('Lo sentimos, ha consumido sus 3 intentos');
    }
    
}
