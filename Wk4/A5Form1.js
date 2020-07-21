document.addEventListener('DOMContentLoaded', getRequest);

//function runs when we run any of the Get Requests
function getRequest() //activates any of the buttons for zip or city and country for GET
{
	//activate the getZIP button
	document.getElementById("getZipSubmitA").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();	//generate a new request
		var baseURL = "http://api.openweathermap.org/data/2.5/weather?";	//we can reuse this for later
		var apiKey = "&appid=34c9ec0561afa094233cac16c2004bfd";									//we can reuse this API key for later

		var zipInput = document.getElementById("ZIP_CODE").value;				//store the zip_code from HTML in zipInput
		//var cityInput = document.getElementByID("CITY_NAME").value;		//store the city_name from html in cityInput
		var country = document.getElementById("COUNTRY_CODE").value;	//store the country value
		var addedToURL = "";
		addedToURL = "zip=" + zipInput;		//we add this to the part of the URL as part of the GET request
		var compiledURL = baseURL + addedToURL + ',' + country + apiKey;			//creates a final URL that we will send to the open weather map API server
		//console.log(compiledURL);

		req.open('GET', compiledURL, true);
		req.addEventListener('load', function()
		{
			if(req.status >= 200 && req.status < 400)	//check if its in valid range of error pages
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				printMsg(response)

			}
			else
			{
				//console.log("Error1: " + req.statusText);
				var errMsg = "Error something went wrong " + response.statusText;
				console.log(errMsg);
				//console.log("error1");
			}
		});
		req.send(compiledURL);
		event.preventDefault();
	});
		//activate the getCITY button
	document.getElementById("getCitySubmitB").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();	//generate a new request
		var baseURL = "http://api.openweathermap.org/data/2.5/weather?";	//we can reuse this for later
		var apiKey = "&appid=34c9ec0561afa094233cac16c2004bfd";									//we can reuse this API key for later

		//var zipInput = document.getElementById("ZIP_CODE").value;				//store the zip_code from HTML in zipInput
		var cityInput = document.getElementById("CITY_NAME").value;		//store the city_name from html in cityInput
		var country = document.getElementById("COUNTRY_CODE").value;	//store the country value
		var addedToURL = "";
		addedToURL = "q=" + cityInput;	//we add this part of the URL to as part of the GET request
		var compiledURL = baseURL + addedToURL + ',' + country + apiKey;			//creates a final URL that we will send to the open weather map API server

		req.open('GET', compiledURL, true);
		req.addEventListener('load', function()
		{
			if(req.status >= 200 && req.status < 400)	//check if its in valid range of error pages
			{
				var response = JSON.parse(req.responseText);
				console.log(response);
				printMsg(response)

			}
			else
			{
				var errMsg = "Error something went wrong " + response.statusText;
				console.log(errMsg);
				//console.log("error2");
			}
		});
		req.send(compiledURL);
		event.preventDefault();
	});
}
function printMsg(response)
{
	document.getElementById('cityFound').textContent = response.name;
	document.getElementById('forecast').textContent = response.weather[0].main;
	document.getElementById('temp').textContent = response.main.temp;
}
