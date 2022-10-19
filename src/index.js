import { generateParallax } from './parallax'
import { generateMap } from './map'
import { setInitialTreemap, showTreemapVisits, showTreemapArea, showTreemapSpending } from './treemaps'

window.addEventListener("DOMContentLoaded", () => {
    generateMap();
    generateParallax();
    setInitialTreemap("parks-area");
    document.getElementById("parks-area-button").addEventListener('click', showTreemapArea);
    document.getElementById("parks-visitation-button").addEventListener('click', showTreemapVisits);
    document.getElementById("parks-spending-button").addEventListener('click', showTreemapSpending);

}, false);
