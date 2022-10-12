import { Loader } from '@googlemaps/js-api-loader';
import parkLocations from './data/parks_data_geo.csv'

const MAP_OPTIONS = {
    center: {
        lat: 39.50,
        lng: -98.35
    },
    mapTypeId: 'terrain',
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
        addMapMarkers(map)
    })
    .catch(e => {
        // TODO: consider displaying an error 
    });

    const addMapMarkers = (map) => {
        const infoWindow = new google.maps.InfoWindow({
            content: "",
            disableAutoPan: true,
          });

        const markers = parkLocations.map((park) => {
            const position = {
                lat: parseFloat(park.Latitude),
                lng: parseFloat(park.Longitude)
            }
            const content =
                `<h3>${park['Park Name']}</h3>` +
                `<div>Origin Year: ${park['Origin Year']}</div>` +
                `<div>Acres: ${park['Area Acres']}</div>`
            const marker = new google.maps.Marker({
                position,
                map
            })
            marker.addListener("click", () => {
                infoWindow.setContent(content);
                infoWindow.open(map, marker);
            });
            return marker;
        })
    }
}