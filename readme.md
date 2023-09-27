Live demo: https://rive-event-test002.vercel.app/

Built with Vite.
Uses Rive and tone.js.

The Rive file has one object: a square.
The square has a listener for a click down.
Once click down is detected, the state machine enters the 'Raise' animation.
The 'Raise' animation has an event that triggers on start of animation.

The JS side is listening for Rive events.
When the event is received, a tone.js synth note is triggered to play.

Super bare bones example, BUT just a reminder and starting template to build more elaborate Rive and Tone.js projects! 