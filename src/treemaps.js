let selectedButtonId = "";

const BUTTON_SUFFIX = "-button";

export function setInitialTreemap(treemapId) {
    const targetButtonId = treemapId + BUTTON_SUFFIX;
    const selectedButton = document.getElementById(targetButtonId)
    const targetTreemap = document.getElementById(treemapId);
    if (selectedButton && targetTreemap) {
        selectedButtonId = targetButtonId;
        selectedButton.classList.add("treemap-button-selected");
        targetTreemap.classList.remove("treemap-hidden");
    }
}

export function showTreemapVisits() {
    showTreemap("parks-visitation");
}

export function showTreemapSpending() {
    showTreemap("parks-spending");
}

export function showTreemapArea() {
    showTreemap("parks-area");
}

function showTreemap(id) {
    const newTreemapButtonId = id + BUTTON_SUFFIX;
    if (newTreemapButtonId === selectedButtonId) {
        return;
    }
    const treemapElement = document.getElementById(id);
    const newTreemapButtonElement = document.getElementById(newTreemapButtonId);
    if (
        treemapElement && newTreemapButtonElement
    ) {
        const oldTreemapButtonElement = selectedButtonId
            ? document.getElementById(selectedButtonId)
            : null;
        const oldTreemapElement = selectedButtonId
            ? document.getElementById(selectedButtonId.slice(0, -BUTTON_SUFFIX.length))
            : null;
        selectedButtonId = newTreemapButtonId
        newTreemapButtonElement.classList.add("treemap-button-selected");
        if (oldTreemapButtonElement) {
            oldTreemapButtonElement.classList.remove("treemap-button-selected");
        }
        treemapElement.classList.remove("treemap-hidden")
        if (oldTreemapElement) {
            oldTreemapElement.classList.add("treemap-hidden");
        }
    }
}

