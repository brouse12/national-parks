import { Loader } from '@googlemaps/js-api-loader';

const park_yellowstone = { lat: 44.429764, lng: -110.58466 };

// const marker = new google.maps.Marker({
//     position: park_yellowstone,
//     map: map,
//   });

const MAP_OPTIONS = {
    center: park_yellowstone,
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