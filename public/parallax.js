const getImageUrl = (data) => {
    if (!data.Image) {
        return null
    }
    return `url('/images/${data.Image}')`
}

const generateParallax = () => {
    if (typeof d3 === 'undefined') {
        console.error("D3 not loaded")
        return
    }

    d3.csv("./data/parks_data.csv").then(data => {
        const parkInfo = d3
            .select("#parks-visualization")
            .selectAll("div")
            .data(data)
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

        d3.select(".loading-background")
            .transition()
            .duration(2000)
            .style("opacity", 0)
            .remove()
    })
    
}

generateParallax()