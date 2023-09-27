/* Escapa comillas literales en cadenas
Cuando estás definiendo una cadena debes comenzar y terminar con una comilla simple o doble. ¿Qué pasa cuando necesitas una comilla literal: " o ' dentro de tu cadena?

En JavaScript, puedes escapar una comilla de considerarse un final de cadena colocando una barra invertida (\) delante de la comilla.

const sampleStr = "Alan said, \"Peter is learning JavaScript\".";


Esto indica a JavaScript que la siguiente comilla no es el final de la cadena, sino que debería aparecer dentro de la cadena. Así que si imprimieras esto en la consola, obtendrías:

Alan said, "Peter is learning JavaScript".

Usa barras invertidas para asignar una cadena a la variable myStr de modo que si lo imprimieras en la consola, verías:

I am a "double quoted" string inside "double quotes".
*/ 

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr)
