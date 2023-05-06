let map;
let markers = [];

function initMap() {
  const mapCenter = { lat: 37.7749, lng: -122.4194 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: mapCenter,
  });

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      populateLocationSelect(data.locations);
      addMarkers(data.locations);
    });
}

function populateLocation
