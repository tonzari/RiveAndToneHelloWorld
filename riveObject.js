import * as rive from '@rive-app/canvas'

const riveCanvas = document.getElementById("rive-canvas")

export const r = new rive.Rive({
  src: "ClickBoxTest.riv",
  artboard: "TestArtboard",
  autoplay: true,
  canvas: riveCanvas,
  stateMachines: "State Machine 1",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
