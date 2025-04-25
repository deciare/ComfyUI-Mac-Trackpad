# ComfyUI extension

## Touchpad two-finger gesture support for macOS

fixes https://github.com/comfyanonymous/ComfyUI/issues/2059

- two-finger scrolling (vertical and horizontal) to pan the canvas
- two-finger pinch to zoom in and out
- command-scroll up and down to zoom in and out


### Installation

The ComfyUI frontend is now distributed as a pip package called `comfyui_frontend_package`.

1. Put this folder into the `static/extensions` subdirectory of the `comfyui_frontend_package`. The exact location of the pip package depends on where the `site-packages` folder is for your Python environment.
2. Restart ComfyUI.
3. Reload the UI.
4. Enjoy!
