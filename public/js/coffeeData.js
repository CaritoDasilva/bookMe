// Se mockean marcadores
coffeeMarkers = [{
    nombre: "Café Bacán", //Pedro de Valdivia 7023
    libro: "Cien años de Soledad",
    autor: "Gabriel García Marquez",
    lat: -33.4886194,
    lng: -70.6063449
  },
  {
    nombre: "Café Choris", //Pedro de Valdivia 5023
    libro: "Eloquent JavaScript",
    autor: "Anónimo",
    lat: -33.4756613,
    lng: -70.6063725,
  },
  {
    nombre: "Café del Panita",
    libro: "Rayuela",
    autor: "Julio Cortazar",
    lat: -33.4746844,
    lng: -70.6064394
  },

  { //Providencia
    nombre: "Café Guayoyo",
    libro: "harry potter y la piedra filosofal",
    autor: "jk rowling",
    lat: -33.43638,
    lng: -70.61488
  },
  {
    nombre: "Papelón con limón",
    libro: "El ocaso de los ídolos o cómo se filosofa a martillazos",
    autor: "Nietzsche",
    lat: -33.4342108,
    lng: -70.6151838
  },

  {
    nombre: "Cefetería Al tiro",
    libro: "harry potter y la piedra filosofal",
    autor: "jk rowling",
    lat: -33.4342108,
    lng: -70.6151838
  },
  { //Recoleta
    nombre: "Cefetería del Pato",
    libro: "DIARIOS AMOROSOS",
    autor: "ANAÏS NIN",
    lat: -33.41913,
    lng: -70.64185
  },

  {
    nombre: "Las sabrosonas",
    libro: "Trópico de Cáncer",
    autor: "Henry Miller",
    lat: -30.48875,
    lng: -71.15639
  },
  {
    nombre: "Aki se come Yico",
    libro: "HISTORIAS DE CRONOPIOS Y DE FAMAS",
    autor: "Julio Cortazar",
    lat: -33.4191791,
    lng: -70.6416367
  },
  { //Talagante
    nombre: "Tengo de Toddy",
    libro: "El nombre del viento",
    autor: "Patrick Rothfuss",
    lat: -33.66664,
    lng: -70.91623
  },

  {
    nombre: "Come y Calla",
    libro: "The Southern Vampire Mysteries",
    autor: " Charlaine Harris",
    lat: -33.6671447,
    lng: -70.9170176
  },

  {
    nombre: "Cafetería Ando con Hambre",
    libro: "Casas Muertas",
    autor: "Miguel Otero Silva",
    lat: -33.74562,
    lng: -70.91204
  },

]

var coffeeIconUrl = '../img/Group 2.1.png';

var coffeeIconOptions = {
  // The icon's size in pixel:
  size: new H.math.Size(26, 34),
  // The anchorage point in pixel, 
  // defaults to bottom-center
  anchor: new H.math.Point(14, 34)
};

// Características del ícono del marcador

var coffeeMarkerOptions = {
  icon: new H.map.Icon(coffeeIconUrl, coffeeIconOptions)
};

// function addingCofeeMarkers() {
//   coffeeCoords = {
//     lng: coffee.lng,
//     lat: coffee.lat,
//   };
//   console.log(coffee);
//   var coffeeMarker = new H.map.Marker(coffeeCoords, markerOptions);
//   map.addObject(coffeeMarker);
//   map.removeObjects(coffeeMarker); // remueve marcadores cuando cambias de geolocalización

// };

function addCoffeeMarkerToGroup(group, coffeeCoords, html) {
  addingMarkers();

  var coffeeMarker = new H.map.Marker(coffeeCoords);

  coffeeMarker.setData(html);
  group.addObject(coffeeMarker);
  console.log(coffeeMarker);

  console.log(Object.entries(group));
}


// Se agrega el modal en el mapa y se crea el grupo en el mapa
function addCoffeeInfoBubble(map) {
  addingMarkers();

  coffeeMarkers.forEach(coffee => {


    var group = new H.map.Group();

    console.log(Object.entries(placesList));
    coffeeCoords = {
      lng: coffee.lng,
      lat: coffee.lat,
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

    addCoffeeMarkerToGroup(group, {

        lng: coffee.lng,
        lat: coffee.lat,

      },
      `<h4>${coffee.libro}${coffee.autor}</h4>`);
  });



};