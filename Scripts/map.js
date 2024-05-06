function initMap() {
  const center = { lat: 30.0444, lng: 31.2357 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: center,
  });

  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Marker Title",
  });

  function updateMap(markerPosition) {
    map.setCenter(markerPosition);
  }
  google.maps.event.addListener(map, "click", function (event) {
    const newMarkerPosition = event.latLng;
    marker.setPosition(newMarkerPosition);
    updateMap(newMarkerPosition);
  });
}
