console.log("Write a JavaScript program that declares a function but calls it before it is declared. Because of function hoisting this will work in JavaScript. Go prove it!");
console.log(double(2));          //call the function before it is even declared

//function double will take in x
function double(x)
{
  return 2 * x;         //we double x and return it
}
console.log("Testing that even after its declared you can call and it will work")
console.log(double(8));          //this is a test to call it after we declare our function

console.log("Also write a function which is assigned to a variable. Call it before it is assigned and prove that this does not work.");
console.log(doubledouble());    //we write a function assigned to a variable call it before its assigned

doubledouble = function()
{
  return 2 * 2;
}
