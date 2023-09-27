import './style.css'
import * as Synth from './synth'
import { r as riveCanvas } from './riveObject'
import { EventType } from '@rive-app/canvas'


document.querySelector('#app').innerHTML = `
<h1>Rive + Tone.js</h1>
<p>Hello World example. Click listener on Rive box triggers an event during the 'Raise' animation.</p> 
<p>The event calls tone.js synth function.</p>
`;

function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;

  Synth.noteOn();

  console.log("Event name", eventData);
}

// Add event listener and provide callback to handle Rive Event
riveCanvas.on(EventType.RiveEvent, onRiveEventReceived);

// Can unsubscribe to Rive Events at any time via the off() API like below
// r.off(EventType.RiveEvent, onRiveEventReceived);