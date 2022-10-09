import parksData from './data/parks_data.csv'
import * as d3 from "d3";

const getImageUrl = (data) => {
    if (!data.Image) {
        return null
    }
    return `url('./images/${data.Image}')`
}

const generateParallax = () => {
    const parkInfo = d3
        .select("#parks-visualization")
        .selectAll("div")
        .data(parksData)
        .join("div")
        .attr("class", "park-image-container")
        .style("background-image", d => getImageUrl(d))
        .append("div")
        .attr("class", "park-info")
    
    parkInfo
        .append("h2")
        .text(d => `${d.Act} (${d.Year})`)
    
    parkInfo
        .append("p")
        .text(d => d["Description Text"])
      
    d3.select("#loading-background")
        .transition()
        .duration(2000)
        .style("opacity", 0)
        .remove()
}
window.addEventListener("DOMContentLoaded", () => {
    generateParallax()
}, false);
