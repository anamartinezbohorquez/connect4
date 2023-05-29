# ENGLISH VERSION
# CONNECT N - OOP
Like Connect4 the game, but better.

## MADE BY:
- Ana Martínez Bohórquez
- Francisco Jose Gutierrez
- Angel David Gomez

## INTRODUCTION
We made a program using HTML, (a bit of) CSS  and JavaScript that implements the boardgame of Connect 4.

## ABOUT THE CODE

### Variable Declarations:
tablero: Represents the game board.
caer: Represents the falling piece.
ficha: Represents the current playing piece.
turno: Represents the current turn.
tileDisplay: Holds the display configuration for quadrille cell contours.
colorDisplay: Holds the display configuration for quadrille color cells.
synth: Represents a Tone.js synthesizer for generating sounds.
numero: Represents the n on CONNECT N

### Setup Function:
Initializes the Tone.js synthesizer (synth).
Creates the canvas for drawing the game board.
Initializes the caer and tablero quadrilles (game boards).

### Draw Function:
Draws the game board and falling piece on the canvas.
Updates the position and color of the falling piece.
Calls the controlador function to handle piece movement restrictions.
Calls the ganador function to check if a player has won.
Plays a melody using the Tone.js synthesizer.

### KeyPressed Function:
Handles keyboard input.
Moves the falling piece horizontally ('d' and 'a' keys).
Drops the piece onto the game board (' ' key).
Updates the turn and triggers a sound.

### Controlador Function:
Restricts the horizontal movement of the falling piece within the game board.

### Dro Function:
Drops the falling piece onto the game board at the appropriate position.
Clears the previously occupied cell (if any).

### Siguiente Function:
Updates the color of the falling piece and triggers a sound based on the current turn.

### MArray Function:
Compares two arrays and returns true if they are equal, false otherwise.

### Ganador Function:
Checks for a winning condition in the game.
Counts the number of consecutive pieces in four different directions.
If a player has four consecutive pieces in any direction, it declares the winner and resets the game board.

### PlayMelody Function:
Plays a melody using the Tone.js synthesizer.
Uses an array of predefined notes and triggers them sequentially.


## OUTCOMES & CONCLUSIONS


## WHAT WE LEARNT?
We learned how to use the basics of JavaScript, aswell as the different uses for the JSON file.
Also the importance of an API that connects the user to the main program, an easier way for different people who are not into programming, could get some use of the different resources that it give to us.
As we continue to develop the program, we learned the use of some other libraries of JavaScript that offer some other shortcuts to do complicated things.


## TOOLS USED:
- HTML
- CSS
- JSON
- JavaScript
- p5.js library
- Tone.js library
- p5.js quadrille library 

# VERSION EN ESPAÑOL
# RAYA EN N - POO
Basado en el juego raya en 4, pero mejor.

## HECHO POR:
- Ana Martínez Bohórquez
- Francisco Jose Gutierrez
- Angel David Gomez

## INTRODUCCION: 
Creamos un codigo basado en la idea del juego de mesa Raya en 4, para el cual usamos los lenguajes de HTML, (Un poco de) CSS y JavaScript.

## ACERCA DEL CODIGO:

### DECLARACION DE VARIABLES:
tablero: Representa el tablero del juego
caer: Representa el lugar donde va a caer la siguiente pieza
ficha: Representa la ficha del jugador actual
turno: Contabiliza el turno actual
tileDisplay: Mantiene la configuracion para la visualizacion del contorno de las casillas
colorDisplay: Mantiene la configuracion para la visualizacion de los colores de la cuadrilla.
synth: Representa el synthesizer de Tone.js para generar los sonidos.
numero: Representa la n en Raya en N

### Funcion Setup:
Inicializa el synthesizer de Tone JS.
Crea el canvas para dibujar el tablero.
Inicializa las cuadrillas caer y tablero. (tableros de Juego)

### Funcion Draw:

Dibuja el tablero de juego y la pieza que cae sobre el canvas.
Actualiza la posición y el color de la pieza que cae.
Llama a la función de controlador para manejar las restricciones de movimiento de las piezas.
Llama a la función ganador para comprobar si un jugador ha ganado.
Reproduce una melodía usando el synthesizer de Tone.js.

### Funcion KeyPressed:
Maneja las teclas presionadas.
Mueve Horizontalmente las piezas (teclas 'd' y 'a' ).
Deja caer la pieza en el tablero de juego (tecla ' ' ).
Actualiza el turno y activa los sonidos.

### Funcion Controlador:
Restringe el movimiento horizontal de la pieza.

### Funcion Dro:
Suelta la pieza en el tablero de juego, en la posicion apropiada.
Limpia la celda ocupada anteriormente(si es necesario)

### Funcion Siguiente:
Actualiza el color de la pieza que cae y activa el sonido basado en el turno actual.

### Funcion MArray:
Compara dos arrays y retorna verdadero si son iguales, en caso contrario falso.

### Funcion Ganador:
Comprueba si hay algun ganador en el juego.
Cuenta el numero de las piezas consecutivas en las cuatro direcciones diferentes.
Si un jugador tiene cuatro piezas consecutivos en cualquier direccion, lo declara ganador y limpia el tablero.

### Funcion PlayMelody :
Toca una melodia usando Tone.Js synthesizer.
Usa un array de notas predefinidas y las activa secuencialmente.


## RESULTADOS Y CONCLUSIONES


## QUE APRENDIMOS?
Aprendimos a como usar lo basico de JavaScript, asi como algunos usos para el archivo JSON.
Tambien la importancia del API que conecta al usuario con el programa principal, una forma facil para que las personas que no conocen el mundo de la programacion puedan sacar uso de los diferentes recursos que nos ofrece.
Mientras desarrollabamos el programa, aprendimos el uso de otras librerias de JavaScript que ofrece otros atajos para hacer cosas complicadas.


## HERRAMIENTAS UTILIZADAS:
- HTML
- CSS
- JSON
- JavaScript
- Libreria p5.js 
- Libreria Tone.js
- Libreria p5.js quadrille
