// Se agregan los marcadores al grupo con las coordenadas y el modal

function addMarkerToGroup(group, coords, html) {
  addingMarkers();

  var marker = new H.map.Marker(coords);

  marker.setData(html);
  group.addObject(marker);
  console.log(marker);

  console.log(Object.entries(group));
}


// Se agrega el modal en el mapa y se crea el grupo en el mapa
function addInfoBubble(map) {
  addingMarkers();



  var group = new H.map.Group();

  console.log(Object.entries(placesList));
  coords = {
    lng: Object.entries(placesList)[1][1],
    lat: Object.entries(placesList)[0][1],
  };
  console.log(coords.lat);

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    var ui = H.ui.UI.createDefault(map, defaultLayers, 'es-ES');
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble = new H.ui.InfoBubble(evt.target.getPosition(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);

  }, false);

  addMarkerToGroup(group, {
      lng: Object.entries(placesList)[1][1],
      lat: Object.entries(placesList)[0][1],
    },
    "<h4>Vienes?</h4>");
  console.log(group);


};