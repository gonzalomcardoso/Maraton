

var query0 = function(url, output) {
	

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       var res = xhttp.responseText;
	       output(res);
	       var obRes = JSON.parse(res);
	       output(obRes);
	       //document.getElementById("data").innerHTML = "<h1>"+ obRes.runner.name + "</h1>";
	    }
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}
var url2 = "https://fastspeedster.herokuapp.com/api/runners/780";
query0(url2, function(data){console.log(data)});