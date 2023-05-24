let tablero;
  let caer;
  let ficha;
  let turno = 1;
  let tileDisplay;// (all) quadrille cell contours
  let colorDisplay;// quadrille color cell
  let synth ;

  function setup() {
    //Configuraciones de las piezas "Objeto literal"
    synth = new Tone.Synth().toDestination();
    //Configuraciones de las piezas "Objeto literal"
    ficha = {position:{x:0,y:0}, pieza:color('red')}
    frameRate(60)
    createCanvas(8* Quadrille.CELL_LENGTH, 8 * Quadrille.CELL_LENGTH);
    // quadrille object initialization

    circulo = ({ cell: cell, cellLength: cellLength }) => {
      noStroke();
      fill(cell);
      ellipseMode(CORNER);
      ellipse(0, 0, cellLength, cellLength);
    }

    // Start the melody playback
  Tone.Transport.scheduleRepeat((time) => {
    playMelody(time);
  }, '8n');

  // Start the Tone.js Transport
  Tone.Transport.start();

    caer = createQuadrille(7,1);
    tablero = createQuadrille(7, 6);
  }

  function draw() {
    background('blue');
    // to display the quadrille a call to drawQuadrille is needed

    let params = {x:50,
                  y:150,
                  outlineWeight:5,
                  outline:'grey',
                  colorDisplay: circulo,
                 }

    drawQuadrille(caer,{x:50,y:10,outlineWeight:5,outline:'grey',
                       colorDisplay: circulo });
    drawQuadrille(tablero,params);

    caer.fill(0,ficha.position.x,ficha.pieza)
    controlador()
  }

  function keyPressed(){
    if(key === 'd'){
      if(ficha.position.x + 1<7){
        caer.clear(0)
        ficha.position.x += 1
        }
    }

    if(key === 'a'){
      if(ficha.position.x -1 >-1){
        caer.clear(0)
        ficha.position.x -= 1
      }
    }
    if(key === ' '){
      if(tablero.isEmpty(0,ficha.position.x)){
        caer.clear(0)
        dro()
        siguiente(turno)
        turno+=1
        ganador()
      }
    }
  }
  function controlador(){
    if(ficha.position.x < 0){
      ficha.position.x = 0
    }
    if(ficha.position.x > 6){
      ficha.position.x = 6
    }
  }
  function dro(){
    let columna = ficha.position.x
    for(let fil = 0;fil <6;fil++){
      if(tablero.isEmpty(fil,columna)){
        tablero.fill(fil,columna,ficha.pieza)
        ficha.position.y=fil
        if(fil>0){
          tablero.clear(fil-1,columna);
        }
      }
    }
  }
  function siguiente(turno){
    if (turno%2 === 0){
      ficha.pieza = color('red');
      synth.triggerAttackRelease("C4", "8n");
    }else{
      ficha.pieza = color('yellow')
      synth.triggerAttackRelease("G4", "8n");
    }
  }



function mArray(a1,a2){
for (let i = 0; i < a1.length; i++) {
    if(a1[i]!=a2[i])
        return false
}
    return true

}


function ganador() {
  fila = ficha.position.y;
  colum = ficha.position.x;

  tipo = tablero.read(fila, colum).levels;
  console.log(tablero.read(fila, colum).levels);

  let l1 = 0,
    l2 = 0,
    l3 = 0,
    l4 = 0;
  for (i = 1; i < 4; i++) {
    if (tablero.read(fila + i, colum) != null)
      if (mArray(tablero.read(fila + i, colum).levels, tipo)) l1 += 1;

    if (tablero.read(fila - i, colum) != null)
      if (mArray(tablero.read(fila - i, colum).levels, tipo)) l1 += 1;

    if (tablero.read(fila, colum + i) != null)
      if (mArray(tablero.read(fila, colum + i).levels, tipo)) l2 += 1;

    if (tablero.read(fila, colum - i) != null)
      if (mArray(tablero.read(fila, colum - i).levels, tipo)) l2 += 1;

    if (tablero.read(fila + i, colum + i) != null)
      if (mArray(tablero.read(fila + i, colum + i).levels, tipo)) l3 += 1;

    if (tablero.read(fila - i, colum - i) != null)
      if (mArray(tablero.read(fila - i, colum - i).levels, tipo)) l3 += 1;

    if (tablero.read(fila + i, colum - i) != null)
      if (mArray(tablero.read(fila + i, colum - i).levels, tipo)) l4 += 1;

    if (tablero.read(fila - i, colum + i) != null)
      if (mArray(tablero.read(fila - i, colum + i).levels, tipo)) l4 += 1;

    if (l1 > 2 || l2 > 2 || l3 > 2 || l4 > 2) {
      // Player wins
      
      if (turno%2 === 0){
        window.alert(`El jugador ${'ROJO'} gana!`);
      }else{
        window.alert(`El jugador ${'AMARILLO'} gana!`);
      }
      tablero = createQuadrille(7, 6);
      break;
    }
  }
}

const notes = ['A3', 'D4', 'E4', 'F5', 'D5', 'E4', 'C4', 'D4', 'A3', 'A3'];
let index = 0;

function playMelody(time) {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  index++;
}