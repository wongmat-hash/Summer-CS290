//function called buildList that takes in a variable called list for the function
function buildList(list)
{   //it declares a local variable called result which is an empty array
    var result = [];
    //it then starts a loop using a for statement that iterates the length of the list
    for (var i = 0; i < list.length; i++)
    {
        //in the for loop we declare a new variable called item
        //however the BUG is here, we are losing scope so we need to break up our closures
        /*
        var item = 'item' + list[i];    //item will have a string + list index i
        //we now push into result array we declared above locally
        result.push(function()
        {
          alert(item + ' ' + list[i])
        });
        */
        //FIX IMPLEMENTED HERE: we add a new loop as per the colsures and loops lecture to avoid this error
        //similar to the generateFunctionList() function we add a new function, that takes i
        (function(i)
        {
          var item = 'item' + list[i];        //this is the same as above just moved
          result.push(function()              //this is exactly the same as above just moved
          {
            alert(item + ' ' + list[i])       //this is exactly the same as above just moved
          });
        }(i));                                //immediatley we will call the function with i 
      }
    return result;  //return the local result array
}

//function called testList
function testList()
{   //it declares a local var called fnlist which calls buildList function with an array
    var fnlist = buildList([1,2,3]);
    // using j only to help prevent confusion - could use i
    //again using a for loop we iterate through the length of the array we declared above
    for (var j = 0; j < fnlist.length; j++)
    {   //this iterates through our fnlist array above and fills
        fnlist[j]();
    }
}

//test our function which will call testList we created above
testList();
