//sample code from lectures
var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);
//end sample code


//app.get Route with function
//when the user enters URL ex) http://flip1.engr.oregonstate.edu:3001/?Simon%20Guo=Guonade&Tim%20Shan=timboslice
//the URL values should pass through and create a list using an array on the page
app.get('/', function(req,res)
{                                 //we set up the GET
  var inputParam = [];           //create a var called params and make it an empty array
  for(var i in req.query)       //use a for loop copied from forms-demo sample code
  {
    inputParam.push({'name':i, 'value':req.query[i]});    //use stack to push the key value pairs into our input array
  }
  var newVal = {};                   //copied from sample code forms-demo.js creating a var called context
  newVal.dataList = inputParam;      //copied from lecture but setting dataList to the array we created
  res.render('GET', newVal);     //pass input Param through dataList to render on the GET handlebar page
});

//to build something that can handle BOTH POST and GET we first check for query in POST using .query then we check the .body and use the system stack
//app.Post route with function
//when the user uses a third party app and submits a POST key-value pair it should display on the page
app.post("/", function(req, res)                            //Post request code
{
	var firstPost = [];                  //same as above we create an empty array
	for (var a in req.query)           //we push all the values from the query in (this allows us to first check if the URL has GET requests)
  {                                 //use the loop and push evrything into our array
		firstPost.push({"name": a, "value": req.query[a]});   //Push all the paramters into the table (query and body)
	}
  var secondPost = [];            //now since we want the POST to handle GET and POST we check for body requests for POST
	for (var b in req.body)            //use another loop and instead of checking for the .query we check for the .body
  {
		secondPost.push({"name": b, "value": req.body[b]});     //same as above push into the stack
	}
	var postForm = {};                       //create a var like above and we use it to pass it to our handlebars page
	postForm.queryList = firstPost;          //set the .queryList
  postForm.bodyList = secondPost;          //set the body list
	res.render("POST", postForm);             //pass the render to our POST page to display the table
});

//sample code from lecture for 404 page
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

//sample code from lecture for 500 page
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

//sample code from lecture for console.log the server
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

//works cited:
//github repo that helped a lot to understand processing both post + GET requests: https://github.com/TylerC10/CS290-Web-Development/blob/master/GET%20and%20POST%20Checker/getPost.js
//
