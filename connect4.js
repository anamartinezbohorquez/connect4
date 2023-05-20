let tablero;
let caer;
let ficha;
let turno = 1;
let tileDisplay;
let colorDisplay;
let synth;

const notes = ['C4', 'E4', 'G4', 'C5', 'E5', 'G5'];
let index = 0;

function setup() {
  synth = new Tone.Synth().toDestination();
  ficha = { position: { x: 0, y: 0 }, pieza: color('red') };

  const canvas = createCanvas(800, 600);
  canvas.parent('game-container');
  canvas.style('display', 'block');
  canvas.style('margin', 'auto');
  canvas.style('background-color', 'black');

  frameRate(60);

  caer = createQuadrille(7, 1);
  tablero = createQuadrille(7, 6);

  // Start the melody playback
  Tone.Transport.scheduleRepeat((time) => {
    playMelody(time);
  }, '8n');

  // Start the Tone.js Transport
  Tone.Transport.start();
}

function draw() {
  background('blue');

  let params = {
    x: 50,
    y: 150,
    outlineWeight: 5,
    outline: 'grey',
    colorDisplay: circulo,
  };

  drawQuadrille(caer, {
    x: 50,
    y: 10,
    outlineWeight: 5,
    outline: 'grey',
    colorDisplay: circulo,
  });
  drawQuadrille(tablero, params);

  caer.fill(0, ficha.position.x, ficha.pieza);
  controlador();
}

function keyPressed() {
  if (key === 'd') {
    if (ficha.position.x + 1 < 7) {
      caer.clear(0);
      ficha.position.x += 1;
    }
  }

  if (key === 'a') {
    if (ficha.position.x - 1 > -1) {
      caer.clear(0);
      ficha.position.x -= 1;
    }
  }
  if (key === ' ') {
    if (tablero.isEmpty(0, ficha.position.x)) {
      caer.clear(0);
      dro();
      siguiente(turno);
      turno += 1;
      ganador();
    }
  }
}

function controlador() {
  if (ficha.position.x < 0) {
    ficha.position.x = 0;
  }
  if (ficha.position.x > 6) {
    ficha.position.x = 6;
  }
}

function dro() {
  columna = ficha.position.x;
  for (let fil = 0; fil < 6; fil++) {
    if (tablero.isEmpty(fil, columna)) {
      tablero.fill(fil, columna, ficha.pieza);
      ficha.position.y = fil;
      if (fil > 0) {
        tablero.clear(fil - 1, columna);
      }
    }
  }
}

function siguiente(turno) {
  if (turno % 2 === 0) {
    ficha.pieza = color('red');
  } else {
    ficha.pieza = color('yellow');
  }
}

function playMelody(time) {
  let note = notes[index % notes.length];
  synth.triggerAttackRelease(note, '8n', time);
  index++;
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

    if (l1 > 2 || l2 > 2 || l3 > 2 || l4 > 2) console.log('ganador');
  }
}

function mArray(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] != a2[i]) return false;
  }
  return true;
}
