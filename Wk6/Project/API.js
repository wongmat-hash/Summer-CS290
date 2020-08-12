document.addEventListener('DOMContentLoaded', getRequest);

//function runs when we run any of the Get Requests
function getRequest() //activates our get request
{
	//activate the getZIP button
	document.getElementById("getSubmit").addEventListener('click', function(event)
	{
		var req = new XMLHttpRequest();	//generate a new request
		var baseURL = "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php";	//we can reuse this for later
		//var apiKey = "&appid=34c9ec0561afa094233cac16c2004bfd";									//we can reuse this API key for later

		var firstName = document.getElementById("FIRST_NAME").value;			//stores the name
		//var cityInput = document.getElementByID("CITY_NAME").value;		//store the city_name from html in cityInput
		var lastName = document.getElementById("LAST_NAME").value;	//stores last name
    var e_mail = document.getElementById("email").value;
		var addedToURL = "";
		addedToURL = "?" + "First Name=" + firstName + "&" + "Last Name=" + lastName + "&" + "email=" + e_mail;
		var compiledURL = baseURL + addedToURL //creates our compiled url to send our GET request
		console.log(compiledURL);

		req.open('GET', compiledURL, true);

		window.location.href = compiledURL;

	});
}
