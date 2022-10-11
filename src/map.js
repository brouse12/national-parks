import { Loader } from '@googlemaps/js-api-loader';

const MAP_OPTIONS = {
    center: {
        lat: 39.50,
        lng: -98.35
    },
    zoom: 5
  };

export const generateMap = () => {
    if (!process?.env?.MAPS_API_KEY) {
        return
    }

    const loader = new Loader({
        apiKey: process.env.MAPS_API_KEY,
        version: "weekly"
    });

    const mapElement = document.getElementById("park-map")
      
    loader.load().then((google) => {
        const map = new google.maps.Map(mapElement, MAP_OPTIONS);
    })
    .catch(e => {
        // TODO: consider displaying an error 
    });
}