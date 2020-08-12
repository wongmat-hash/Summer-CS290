
//here we make an obj and we set its value
let obj = {here: {is: "an"}, object: 2};
//now we want to console log the function deepEqual with 2 inputs both as our obj
console.log(deepEqual(obj, obj));
//it should print something from deepEqual
//->should return true since obj == obj

console.log(deepEqual(obj, {here: 1, object:2}));
//now we want to console log the function deepEqual with the obj input as the first then the second is another input not equal
//->should return false because obj not a what defined in second statement

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
//now we want to console log the function deepEqual with the obj and exactly what we set it to above (see let obj =...)
//->should return true because obj is literally what is in second statement


//this is the deepEqual function that sill check to see if its equal or not
//1. deepEqual will take two values and return true only if they are the same value or are objects with the same properties
//2. where the values of the properties are equal when compared with a recursive call to deepEqual
//3. if it produces object for both values you should do a deep comparison
//4. you have to take into account typeof null also produces an object
function deepEqual(x, y)      //its a function that takes in 2 inputs to check we will call them x and y
{
  //first check if x == y if it is we can just return true right away
  if (x === y)                //we simply use the === operator to compare the properties to see if they are equal as a first step
  {
    return true;            //this means they are equal to each other or ARE each other so return true no need to run complex analysis to save time
  }
  //if first pass check does not pass then check if x == null or if a != "object" and same for y
  //if any of these conditions turns out true then return false
  //this essentially tests to see if we are dealing with real objects or not and we double check to make sure none are null
  //if any of these assert to be true then we can instantly return false instead
  else if (x == null || typeof x != "object" || y == null || typeof y !="object")
  //so here we check if x = null or the typeof returns anything but object and same for y
  {
    return false;           //just directly return false of any of these conditions are satisfied since its null or not an object
  }

  //we are using the for in syntax to assign the key of every property in an object in our case its our obj we declared above
  //using the for in allows use to iterate through the keys so we should be able to see:
  //1. here: {is: "an"}
  //2. object: 2
  //by iterating through we can compare and make sure that they are the same or not

  var propX = 0, propY = 0;           //we simply declare these as our counters and initiate them to 0 for our loop below

  //use a for loop we continue to iterate and check each item
  for (var prop in x)                 //stated above, we use the var prop in to iterate through but in this case we count and save in propX
  {
    propX += 1;
  }

  //user a for loop to check the second  statement
  for (var prop in y)                 //same thing in y we will now count and store in propY
  {
    propY += 1;
    if (!(prop in x) || !deepEqual(x[prop], y[prop]))     //essentially we check if its either not in our first input or when we run deepEqual recursively
                                                          //what we pass into the recursive function will be the values of the keys to check this time to see if they equal
    {                                                     //in this example it would be checking if: {is: "an"} === {is: "an"} which is the same if not return false
      return false;
    }
  }
  //after we check and nothing comes back false we can be assured that our keys and values match in our 2 inputs
  return propX == propY                                   //this last portion checks our counters. If the counters == each other also we can return true as they are equal
}


//works cited: https://medium.com/@zolotova17/deep-comparison-exercise-explanation-987c4db2cc5e
