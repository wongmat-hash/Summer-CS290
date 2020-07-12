// You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
  this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
  this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
  this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
  this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator
and an array of objects appropriate for that comparator and it will return a new array
which is sorted with the largest object in index 0 and the smallest in the last index*/
//we will use a basic SELECTION sort which swaps the smallest element with the first element
//WORKS CITED: https://humanwhocodes.com/blog/2009/09/08/computer-science-in-javascript-selection-sort/ used basic algorithm found here
function sortArr(comparator, array)
{
  var length = array.length;
  var min;

  for (var i = 0; i < length; i++)
  { //set min to this position
    min = i;
    for (var j = i+1; j< length; j++)
    {
      //check rest of array to see if smaller
      if (comparator(array[j], array[min]))
      {
        min = j
      }
    }
    //if min isnt in pos swap
    if (i !=min)
    {
      var temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}

/* A comparator takes two arguments and uses some algorithm to compare them. If the first
argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers*/
function exComparator( int1, int2){
  if (int1 > int2){
      return true;
  } else {
      return false;
  }
}

/* For all comparators if students are 'tied' according to the comparison rules then the order of
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
  // your code here
  /*
  //here we check with an if statement the data for student 1 is > than student 2
  if (student1.yearInSchool > student2.yearInSchool)
  {
    return true;
  }
  //no need to check anything else just return false if its not true
  else
  {
    return false;
  }
  */
  //we will use the exComparator function to call a function within a function
  return exComparator(student1.yearInSchool, student2.yearInSchool);
}

/* This compares two students based on their major. It should be case insensitive and
makes which are alphabetically earlier in the alphabet are "greater" than ones that
come later (from A-Z).*/
function majorComparator(student1, student2) {
  // your code here
  //in order to compare we need to make sure we are in the same case to compare
  //create 2 variables that we will use to store the same cases
  var student1case_insensitive = student1.major.toLowerCase();    //now student1case_insensitive should be all lower case major
  var student2case_insensitive = student2.major.toLowerCase();    //now student2case_insensitive should be all lower case major
  /*
  if (student1case_insensitive > student2case_insensitive)
  {
    return true;      //returns true if its greater
  }
  else
  {
    return false;     //compares and returns false if not true
  }
  */
  //return exComparator(student1.major.toLowerCase(), student2.major.toLowerCase())
  return exComparator(student1case_insensitive, student2case_insensitive);

}

/* This compares two students based on the club they're in. The ordering from "greatest"
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed).
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
  // your code here

  //same thing as the major comparison above since its case insensitive we need to change student1case_insensitive
  var club1case_insensitive = student1.club.toLowerCase();
  var club2case_insensitive = student2.club.toLowerCase();
  //now both our local vars should hold the case insensitive
  //we can just do our normal true false cases
  //first check if they are equal if so then the year returns
  if (club1case_insensitive == club2case_insensitive)
  {
    //return true if the 1st student is greater in years
    if (student1.yearInSchool > student2.yearInSchool)
    {
      return true;
    }
    //otherwise just return false
    else
    {
      return false;
    }
  }
  //now build out the special ordering
  //improv
  else if (student1.club.toLowerCase() == "improv" && student2.club.toLowerCase() != "improv")
  {
    return true;        //if the second user is NOT improv then the first one is greater
  }
  //cat
  else if (student1.club.toLowerCase() == "cat" && student2.club.toLowerCase() != "improv" && student2.club.toLowerCase() != "cat")
  {
    return true;       //if the second user is NOT cat then the first one is true
  }
  //art
  else if (student1.club.toLowerCase() == "art" && student2.club.toLowerCase() != "improv" && student2.club.toLowerCase()!= "cat" && student2.club.toLowerCase()!= "art")
  {
    return true;      //if the second user is NOT art then return true
  }
  //guitar
  else if (student1.club.toLowerCase() == "guitar" && student2.club.toLowerCase() != "improv" && student2.club.toLowerCase()!= "cat" && student2.club.toLowerCase()!= "art")
  {
    return true;      //if the second user is NOT guitar then return true
  }
  else
  {
    return false;     //otherwise the second is greater
  }
}
/*
function printArray(array)
{
  for (var i = 0; i < array.length; i++)
  {
    var display = array[i];
    console.log(student.name + ' ' + student.major + ' ' + student.yearInSchool + ' ' + student.club)
  }
}
*/
function logMe(sortedArray, length, bool)
{
  var closureArray = sortedArray;
  if (bool == 0)
  for (var z = 0; z < length; z++)
  {
    console.log(closureArray[z].name + " - " + closureArray[z].major + " - " + closureArray[z].yearInSchool);
  }
  else if (bool == 1)
  {
    for (var z = 0; z < length; z++)
    {
      console.log(closureArray[z].name + " - " + closureArray[z].major + " - " + closureArray[z].yearInSchool + " - " + closureArray[z].club);
    }
  }
}

/* Your program should output the following to the console.log, including each of the opening and closing
stars. All values in parenthesis should be replaced with appropriate values. To accomplish this, you will
have to sort the array of students using each comparator and then loop through the array and and call logMe
on each student of the now-sorted array. If the argument is 'true' then it prints the student's name, major,
year in school, and club affiliation. If the argument is 'false' then the club affiliation is ommited and
just the student's name, major and year in school is logged. Please carefully note which sorted results require
the club to be displayed and which do not.
*/

//display the stars
console.log('**********');
//display the string
console.log('The students sorted by year in school are:');
//create a var for closure and pass it to our sortArr with the years compared and the array
var sortedYear = sortArr(yearComparator, students)  //we pass the yearComparator as a comparator and the students array
var sYlength = sortedYear.length;
var clubY = 0;
//sortedYear should now include the sorted list of students by year
logMe(sortedYear, sYlength, clubY);
/*
(Name - Major - Year) // of the "greatest" student
...

(Name - Major - Year) // of the "least" student
*/
console.log('**********');
console.log('The students sorted by major are:');
var sortedMajor = sortArr(majorComparator, students)
sMlength = sortedMajor.length;
var clubM = 0;
logMe(sortedMajor, sMlength, clubM);
/*

(Name - Major - Year) // of the "greatest" student
...
(Name - Major - Year) // of the "least" student
*/
console.log('**********');
console.log('The students sorted by club affiliation are:');
var sortedClub = sortArr(clubComparator, students)
sClength = sortedClub.length;
var clubC = 1;
logMe(sortedClub, sClength, clubC);
/*
(Name - Major - Year - Club) // of the "greatest" student
...
(Name - Major - Year - Club) // of the "least" student
*/
console.log('**********');
/*
As an example of what is expected to be printed to the console with logMe being sent True for a single student:
Jim - Sports Science - 2 - Guitar
*/
