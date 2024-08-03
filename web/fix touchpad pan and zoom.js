import { app } from "../../../scripts/app.js";

app.registerExtension({
  name: "ComfyUI-Mac-Trackpad",
  async setup(app) {
    app.canvas.canvas.removeEventListener("mousewheel");
    app.canvas.canvas.addEventListener("wheel", processWheel.bind(app.canvas), false);
  }
});

/**
 * Smooth scrolling for touchpad
 */
function processWheel(/** @type {WheelEvent}*/ event) {
  if (!this.graph || !this.allow_dragcanvas) return

  const { clientX: x, clientY: y } = event
  if (this.viewport) {
    const [viewportX, viewportY, width, height] = this.viewport
    const isInsideX = x >= viewportX && x < viewportX + width
    const isInsideY = y >= viewportY && y < viewportY + height
    if (!(isInsideX && isInsideY)) return
  }

  let scale = this.ds.scale
  let { deltaX, deltaY } = event

  if (event.metaKey || event.ctrlKey) {
    let SCALE = event.ctrlKey ? 150 : 100
    if (event.metaKey) SCALE *= -1 / 0.5
    this.ds.changeScale(scale - deltaY / SCALE, [event.clientX, event.clientY])
  } else {
    this.ds.mouseDrag(-deltaX, -deltaY)
  }
  this.graph.change()

  event.preventDefault()
  return false // prevent default
}