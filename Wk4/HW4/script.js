function Table_init()
{
  //create a var and set it to the document body itself we will refer back to this constantly
  var pageBody = document.body;
  //now we will create another var and set it as the table on the body
  var tableItself = document.createElement('table');
  //set its attributes with the setAttribute call
  tableItself.setAttribute("id", "theTable"); //set the ID to theTable
  //set the width to 100px
  tableItself.style.width = '100px';
  //set the border of the table to 1px
  tableItself.style.border = '1px solid black';
  //now we create a var to refer to the table rows and we begin insertion
  var tableRow = tableItself.insertRow();
  //we will use a for loop to 4 to populate the header it should be a 1x4 so only i > 4 should work
  for (var i = 0; i < 4; i++)
  {
    //create a var and we will store the header inside and use createElement to create
    var hCell = document.createElement("TH");
    //append its child and add in the header text using for loop to add numbers
    hCell.appendChild(document.createTextNode("Header" + (i + 1)))
    //set the border style to black
    hCell.style.border = '1px solid black';
    //append it using the for loop and continue until we finish all header cells
    tableRow.appendChild(hCell);
  }
  //using a nested for loop like a 2d array we will create the rest of the 3x4 cells
  for (var x = 0; x < 3; x++)
  {
    //we call insertRow and insert rows into the tableRow
    var tableRow = tableItself.insertRow();
    for (var y = 0; y < 4; y++)
    {
      //create a var for the table columns and use the for loop to insert Cells
      var tableC = tableRow.insertCell();
      //append each child and fill in the cells with data
      tableC.appendChild(document.createTextNode((y + 1) + ',' + (x + 1)));
      //set styling so it appears to be a table with a border
      tableC.style.border = '1px solid black';
    }
  }
  //now we will create the buttons
  pageBody.appendChild(tableItself);
  //set a var to the table and we will choose the default selected cell
  var table = document.getElementById("theTable");
  //set the rowIterator to 1 as its top cell
  var rowIterator = 1;
  //set the colum iterator to 0 as its the 0th cell
  var cIterator = 0;
  //now using the table.row we can set the default cell to black
  table.rows[rowIterator].cells[cIterator].style.border = '2px solid black';
  //create a var that will be the buttons now create for up, down, left, right, markcell
  var button = document.createElement("input");
  //set the type to button which we will use for all
  button.type = "Button";
  button.value = "up";  //set the value for the button
  button.name = "up"; //set the name to up for the button
  button.onclick = function()
  {
    //now we use this to create the click function
    var userClick = table.rows[rowIterator].cells[cIterator];
    //we need to check if its already at the top spot. If it is just set it to itself and it wont do anything
    if (rowIterator == 1)
    {
      userClick = userClick;
    }
    else
    {
      //otherwise we need to adjust the original cell to regular border, change the rowIterator and then set the new cell to bold
      table.rows[rowIterator].cells[cIterator].style.border = '1px solid black';
      //change the iterator
      rowIterator = rowIterator - 1;
      //change the iterator itself in spatial position
      userClick = table.rows[rowIterator].cells[cIterator];
      //adjust the border of the new cell
      userClick.style.border = '2px solid black';
    }
  };
  //now we do the same for the down button this is an exact copy of UP will not comment since its just a direct copy
  pageBody.appendChild(button);
  var button = document.createElement("input");
  button.type = "Button";
  button.value = "down";
  button.name = "down";
  button.onclick = function()
  {
    var userClick = table.rows[rowIterator].cells[cIterator];
    if (rowIterator == 3)
    {
      userClick = userClick;
    }
    else
    {
      table.rows[rowIterator].cells[cIterator].style.border = '1px solid black';
      rowIterator = rowIterator + 1;
      userClick = table.rows[rowIterator].cells[cIterator];
      userClick.style.border = '2px solid black';
    }
  };
  //now we create the button for left which is again an exact copy of above will not comment
  pageBody.appendChild(button);
  var button = document.createElement("input");
  button.type = "Button";
  button.value = "left";
  button.name = "left";
  button.onclick = function()
  {
    var userClick = table.rows[rowIterator].cells[cIterator];
    if (cIterator == 0)
    {
      userClick = userClick;
    }
    else
    {
      table.rows[rowIterator].cells[cIterator].style.border = '1px solid black';
      cIterator = cIterator - 1;
      userClick = table.rows[rowIterator].cells[cIterator];
      userClick.style.border = '2px solid black';
    }
  };
  //now we create the button for right same as above will not comment
  pageBody.appendChild(button);
  var button = document.createElement("input");
  button.type = "Button";
  button.value = "right";
  button.name = "right";
  button.onclick = function()
  {
    var userClick = table.rows[rowIterator].cells[cIterator];
    if (cIterator == 3)
    {
      userClick = userClick;
    }
    else
    {
      table.rows[rowIterator].cells[cIterator].style.border = '1px solid black';
      cIterator = cIterator + 1;
      userClick = table.rows[rowIterator].cells[cIterator];
      userClick.style.border = '2px solid black';
    }
  };
  //now we do the same for the markcell button but the function will be different
  pageBody.appendChild(button);
  // Creating button Mark cell
  var button = document.createElement("input");
  button.type = "Button";
  button.value = "markcell";
  button.name = "markcell";
  //for this function instead of adjusting cells it needs to permentantly change the color
  button.onclick = function()
  {
    //so we just use the iterator we were using to traverse the table and change style backgroundColor to yellow
    table.rows[rowIterator].cells[cIterator].style.backgroundColor = 'yellow';
  };
  pageBody.appendChild(button);
}
//run the JS
window.onload = Table_init();

//works cited: https://github.com/vanven/cs-290-dom-events/blob/master/script.js
