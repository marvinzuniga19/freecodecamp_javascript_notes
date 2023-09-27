/* Escapa secuencias en cadenas
Las comillas no son los únicos caracteres que pueden ser escapados dentro de una cadena. Las secuencias de escape le permiten utilizar caracteres que de otro modo no podrías usar en una cadena.

Código	Resultado
\'	comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\t	tabulador
\r	retorno del carro
\b	retroceso
\f	fuente de formulario
Ten en cuenta que la barra invertida debe escaparse para que aparezca como tal.

Asigna las siguientes tres líneas de texto a la variable única myStr utilizando secuencias de escape.

FirstLine
    \SecondLine
ThirdLine
Deberás utilizar secuencias de escape para insertar correctamente caracteres especiales. También tendrás que seguir el espaciado tal y como se ve arriba, sin espacios entre secuencias de escape o palabras.

Note: La sangría para SecondLine se consigue con el carácter de escape tabulador, no con espacios.
*/

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Cambia esta línea