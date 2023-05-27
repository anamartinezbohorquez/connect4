# CONNECT N (Raya en N) - OOP
Like Connect4 the game, but better.

## Integrantes:
- Ana Martínez Bohórquez
- Francisco Jose Gutierrez
- Angel David Gomez

## INTRODUCTION
We made a HTML, (a bit of) CSS  and JavaScript program that implements a the boardgame of Connect 4.

## ABOUT THE CODE

### Variable Declarations:
tablero: Represents the game board.
caer: Represents the falling piece.
ficha: Represents the current playing piece.
turno: Represents the current turn.
tileDisplay: Holds the display configuration for quadrille cell contours.
colorDisplay: Holds the display configuration for quadrille color cells.
synth: Represents a Tone.js synthesizer for generating sounds.

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


## TOOLS USED:
- HTML
- CSS
- JSON
- JavaScript
- p5.js library
- Tone.js library
- p5.js quadrille library 
