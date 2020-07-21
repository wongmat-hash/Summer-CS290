document.addEventListener('DOMContentLoaded', postRequest);

function postRequest() //activates any of the buttons for zip or city and country for GET
{
  document.getElementById("Form2Submit").addEventListener('click', function(event)
	{
    var req = new XMLHttpRequest();
    var payload = {USER_INPUT:null};
    payload.USER_INPUT = document.getElementById('USER_INPUT').value;
    req.open('POST', 'http://httpbin.org/post', true);
    req.setRequestHeader('Content-Type', "application/json");
    req.addEventListener("load", function(){
      if (req.status >= 200 && req.status < 400)                  //we only display our results if its within the range of error msg
      {
        var response = JSON.parse(JSON.parse(req.responseText).data)
        printOut(response);
      }
      else
      {
        console.log("error");
      }
    });
    req.send(JSON.stringify(payload));                        //send the request out with stringify
    event.preventDefault();
  });
}

function printOut(response)         //we seperate out the print function to be cleaner
{
  document.getElementById("postReturn").textContent = response.USER_INPUT;
}
