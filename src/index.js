import { generateParallax } from './parallax'
import { generateMap } from './map'

window.addEventListener("DOMContentLoaded", () => {
    generateMap()
    generateParallax()
}, false);
