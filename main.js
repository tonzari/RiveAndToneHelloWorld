import './style.css'
import * as Synth from './synth'
import { r as riveCanvas } from './riveObject'
import { EventType } from '@rive-app/canvas'


document.querySelector('#app').innerHTML = `
<h1>Rive + Synth</h1>
`;

function onRiveEventReceived(riveEvent) {
  const eventData = riveEvent.data;

  Synth.noteOn();

  //TODO: add new event in rive file to turn note off
  // Synth.noteOff();
  
  console.log("Event name", eventData);
  
}

// Add event listener and provide callback to handle Rive Event
riveCanvas.on(EventType.RiveEvent, onRiveEventReceived);

// Can unsubscribe to Rive Events at any time via the off() API like below
// r.off(EventType.RiveEvent, onRiveEventReceived);