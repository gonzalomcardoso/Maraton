function bootstrap() {
  var ungsLocation = [-34.5221554, -58.7000067];
  var map = L.map('mapid').setView(ungsLocation, 17);
  var icons = loadIcons();
  var carrera = [];
  var routes = [];
  var runners = [];
  var cameras = [];

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var correr = function () {
    routes.forEach(function (element) {
      var line = L.polyline(element.positions);
      animatedMarker = L.animatedMarker(line.getLatLngs(), {
        distance: 80,  // meters
        interval: 3000, // milliseconds
        icon: icons.pop(),
      }).bindPopup(getRunnerBy(element.runner).name).openPopup();
      map.addLayer(animatedMarker);
    }, this);
  }

  var getRunnerBy = function (id) {
    for (i = 0; i < runners.length; i++) {
      if (runners[i].id == id) {
        return runners[i];
      }
    }
  }

  var renderCameras = function (camera) {
    camera.forEach(function (element) {
      L.marker([element.coordinate.lat, element.coordinate.lon], { icon: cameraIcon }).addTo(map).bindPopup("Camara: "+element.id);
    });
  }

  var setPositions = function (array) {
    routes = array;
  }

  var setRunners = function (array) {
    runners = array;
  }


  fetchRunners(function (array) {
    setRunners(array);
  });

  fetchTrack(function (carrera) {
    L.polyline(carrera, { color: 'green' }).addTo(map);
    
    L.marker(carrera[carrera.length-1], { icon: finishIcon }).addTo(map);
  });

  fetchWebCams(function (camaras) {
    renderCameras(camaras);
  });

  fetchPositions(function (prueba) {
    setPositions(prueba);
    correr();
  });

}



$(bootstrap);