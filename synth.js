import * as Tone from 'tone';

document.querySelector('#app').addEventListener('click', async () => {
    await Tone.start();
    console.log("tone.start should have called")
    console.log(Tone.context.state)
  })

const synth = new Tone.Synth({
    envelope: {
        attack: 0.005,
        decay: 0.04,
        sustain: 0,
        release: 0.4,
      }}
).toDestination(0);


Tone.start();

export function noteOn() {
    const now = Tone.now();
    console.log("note on!");
    synth.triggerAttackRelease("E4","8n",now);
    synth.triggerAttackRelease("C4","8n",now + 0.04);
}

export function noteOff() {
    console.log("note off!")
    // to do!
}