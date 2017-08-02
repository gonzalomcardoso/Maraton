var fetchPositions = function(output) {
	var positionsi = [];

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var res = xhttp.responseText;
	       var obRes = JSON.parse(res);
           var i = 0;
           obRes.positions.forEach(function(element) {
               var runnerPositions = {
                   runner: element.runner,
                   positions: [],
               };
               element.positions.forEach(function(posicion){
                runnerPositions.positions.push([posicion.lat,posicion.lon]);   
                           });
                
                positionsi.push(runnerPositions);           
           }, this);
	       output(positionsi);
	    }
	};
	xhttp.open("GET", "https://fastspeedster.herokuapp.com/api/positions", true);
	xhttp.send();
}


var fetchTrack = function(output) {
	var track = [];

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var response = xhttp.responseText;
	       var data = JSON.parse(response);
           data.track.coordinates.forEach(function(posicion){
                track.push([posicion.lat,posicion.lon]);   
                           });
                           
	       output(track);

	    }
	};
	xhttp.open("GET", "https://fastspeedster.herokuapp.com/api/tracks/42", true);
	xhttp.send();
}

var fetchRunners = function(output) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var response = xhttp.responseText;
	       var resp = JSON.parse(response);
           ;
	       output(resp.runners);
	    }
	};
	xhttp.open("GET", "https://fastspeedster.herokuapp.com/api/runners", true);
	xhttp.send();
}

var fetchWebCams = function(output){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var response = xhttp.responseText;
	       var resp = JSON.parse(response);
           
	       output(resp.webcams);
	    }
	};
	xhttp.open("GET", "https://fastspeedster.herokuapp.com/api/webcams/42", true);
	xhttp.send();
}
