import * as Tone from 'tone'

console.clear();

const synth = new Tone.synth();
synth.oscillator().type = 'sine'
synth.toMaster();

gain.toMaster();


const notes = ['C4', 'E4', 'G4', 'C5', 'E5', 'G5'];

var index = 0;


Tone.Transport.scheduleRepeat(time => {
    REPEAT(time);
}, '8n');

function repeat(time){
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '8n', time);
    index++;
}

Tone.Transport.start();

setTimeout(() => {
    Tone.Transport.stop();
}, 5000);





