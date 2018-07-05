/////////////////////////////////
// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

/* EXAMPLE OF FUNCTIONS-SCOPED AND BLOCK-SCOPED:
the 'var' is function-scoped and the 'let' and 'const' of the ES6 are block-scoped means we can not use the these variables outside the function block
'var' > is function-scoped can be used globaly and accessed inside the function also
'let' > is block-scoped and can be used inside a function and that to within the {'here'} and can not be accessed outsite the scope of that function
'const' > is a block-scoped and can be declared and defined only once and can not be changed again once defined. Also this has the same scope as the 'let'

*/ /*
// ES5
function driversLicence5(passedTest) {
    
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;
    
    if (passedTest) {
        firstName = 'John';
    }
    
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);



var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/////////////////////////////////
// Lecture: Blocks and IIFEs
// A block is not restricted to if/for/while functions only, it can also be created just like {'this is a block'}
/* 
// ES6
{
  const a = 5;
  let b = 4;
  var c = 3;
}

//console.log(a + b); // we can not access these a and b as they are in a block. just like data privacy=IIFE in ES5
console.log(c); // this can be accessible as the 'var' is not a block-scope element

// ES5
(function() {
  var c = 10;
})();

// console.log(c); // this obviously won't work as here we have created an IIFE in ES5 way
*/

/////////////////////////////////
// Lecture: Strings

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 - we have templet literals 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
*/

/////////////////////////////////
// Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES5 - MAP FUNCTION:
// using the map function gives access to current element, current index and entire array
// map function does the following work:
//  years =  [1990, 1965, 1982, 1937]
//  ages5 =  [28,    53,   36,   81]
// what the map function does is it takes an element from years array and perform operations on it or with it and stores the result in the ages5 array at the same index as the index of the element taken
var ages5 = years.map(function(el) {
  return 2018 - el; // this will get added to the array
});
console.log(ages5);

// ES6 - Provides much better way with arrow functions

// Method - 1: when we have single parameter
//const ages6 = years.map(el => 2018 - el);
//console.log(ages6);

// Method - 2: when we have more than one parameters or when we dont have parameters we have to use paranthesis > ()
let ages6 = years.map(
  (el, index) => `Age Element ${index + 1} : ${2018 - el} years`
);
console.log(ages6);

// Method - 3: when we have more than one line code in map function
ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age Element ${index + 1} : ${age} years`;
});
console.log(ages6);
/*
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

/////////////////////////////////
// Lecture: Arrow functions 2
// IMPORTANT:
//> Arrow functions do not have 'this' keyword,
//> they have Lexical 'this' variable
/*
// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    // 1. here clickMe is method belongs to object box5
    var self = this; // 3. here we are finding a workaround or the solution to it is we create another variable here and assign that with 'self' keyword

    document.querySelector(".green").addEventListener("click", function() {
      // 2. here the function() is a regular call back function and its not a method
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
//box5.clickMe(); // this won't work as we intended. because, for the regular function the 'this' keyword will always point to the global object and only for the method call 'this' keyword will actually point to that object

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    // Be careful here. Dont use the arrow function here, because in this if we use the arrow function here then the 'this' keyword which is shared lexically by arrow function will point to its surroundings which is the window object or global object and we will get the result of undefined
    document.querySelector(".green").addEventListener("click", () => {
      //  here we are using an arrow function and it does not have any parameters so we have used blank ()...
      // Also using arrow function we can have the 'this' keyword now as in case of arrow functions the 'this' keyword points to the object instead of the global object
      // arrow function shares the 'this' keyword lexicaly of its surroundings
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box66.clickMe();


function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}

new Person('Mike').myFriends6(friends);
*/

/////////////////////////////////
// Lecture: Destructuring
// Destructuring gives us a very convinient way to extract data from a datastructure like array or object
/*
// ES5
var john = ["John", 28];
// var name = john[0];
// var age = john[1];

// console.log(name, age);

// ES6 - here we have destructuring, which means we dont have to create new variables for each element of array like we did above in ES5
const [name, age] = ["John", 26];
console.log(name, age);

// we can also use destructuring in objects
// ES5
const obj = {
  firstName: "Mary",
  lastName: "Kane"
};
console.log(obj.firstName, obj.lastName);

// ES6 - here we need to make sure while we destructure the data we need to have the same key names to the new variables that we assign

const { firstName, lastName } = obj;
console.log(firstName, lastName);

// In case if we dont want to use the same variable and key names:
const { firstName: a, lastName: b } = obj;
console.log(a, b);

function calcAgeRetire(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retire] = calcAgeRetire(1990);
console.log(age2, retire);

*/

/////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll(".box");

//ES5
//const boxesArr5 = document.querySelectorAll(".box");
//console.log(boxesArr5); // this will provide a list of nodes with the class name 'box' and not an array

// now lets say we wish to change the color of all boxes at once
// for this purpose we can not use the array method to iterate through each node and hence we need to use the Array prototype function 'slice' with call method to change the 'this' variable to 'boxes' variable

var boxesArr5 = Array.prototype.slice.call(boxes);
console.log(boxesArr5); // here we get an array of the nodes so now we can use the forEach method to access each node

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = " yellow";
});

//ES6
var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.backgroundColor = "pink"));

// or we can still shorten it as below
Array.from(boxes).forEach(cur => (cur.style.backgroundColor = "maroon"));

// Lets Look how we can use the for loop of ES5 and for-of loop of ES6
// e.g. lets suppose we need to change the text of the first and thrid box and not to touch the second box. With use of Array methods we can not simply continue or break the loops in middle and hence we can go for 'for' loop or 'for-of' loop

//ES5 Version of For loop

for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }
  boxesArr5[i].textContent = "I changed to yellow!!!";
  boxesArr5[i].style.color = "white";
}

//ES6 Version by using for-of loop
for (const cur of boxesArr6) {
  if (cur.className === "box blue") {
    continue;
  }
  cur.textContent = "This is ES6 Version";
}

// we can again optimize this ES6 code further
for (const curElement of boxesArr6) {
  if (curElement.className.includes("blue")) {
    continue;
  }
  curElement.textContent = "More shortened code";
}
*/

// We have TWO NEW methods in ES6 in addition to 'indexOf' method
// e.g. suppose we have group of childrens and we know that only one of them is of full age. So let's find out who and how old that person is
/*
//ES5
var ages = [12, 17, 8, 21, 14, 11];
// now lets create an array with map method which will return true for full age and false for not full age
var full = ages.map(function(cur) {
  return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true)); // here we get the index of the person whose if full age
console.log(ages[full.indexOf(true)]); // here we are showing age of person with full age

//ES6 - two new methods are: findIndex and findMethod
// method-1: findIndex = when we wish to find the index of a particular element
console.log(ages.findIndex(cur => cur >= 18)); // this is more like map function which has the access to current element, current index and entire array

// method-2: find = when we are just interested in a particular element and not the index of it we use this method
console.log(ages.find(cur => cur >= 18)); // when this condition becomes true the find method will just return the element for which this condition is true and not the index of it

*/

/////////////////////////////////
// Lecture: Spread operator -->> '...' (three dots is spread operator)
/*
var addFourAges = function(a, b, c, d) {
  return a + b + c + d;
};

//ES5
// Spread operator can be used to expand an array like below
// Method-1: calling function and passing values
var sum1 = addFourAges(18, 21, 30, 15);
console.log(sum1);
// Method-2: using apply method
ages = [18, 21, 30, 15];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);
// Method-3: using the spread operator
var sum3 = addFourAges(...ages);
console.log(sum3);

//ES6 
// Spread opeartor can also be used to join two arrays
var famSmith = ["John", "Jenny", "Jack"];
var famKane = ["Sam", "Serena", "Switie"];

var bigFam = [...famSmith, "Lily", ...famKane];
console.log(bigFam);

// Spread operator not only works on arrays but also works on node lists that we get when we use querySelectorAll method
var h = document.querySelector("h1");
var boxes = document.querySelectorAll(".box");
var all = [h, ...boxes];

Array.from(all).forEach(cur => (cur.style.color = "yellow"));


*/

/////////////////////////////////
// Lecture: Rest parameters:
/* 
> Rest parameters looks exactly the same like 'spread' operators as they use same notation with 3 dots,but they are very different 
> rest parameters and spread opeartors are exactly opposite
> Spread Operators takes an array and transforms it into single values: 
[array of values] --> (multiple single values)
> Rest parameters receive a couple of single values and transforms them into an array when we call a function with multiple paramters : 
(multiple single values) --> [array of single values]
> Spread operator is called in function definition
> Rest parameter is used in function declaration as a parameter to that function
*/
/*
//ES5
function isFullAge5() {
  // when we have multiple parameters and when we dont pass the parameters and we use the 'arguments' keyword instead
  //console.log(arguments);
  // 1. Convert the passed parameters(here arguments) into an array
  var argsArr = Array.prototype.slice.call(arguments);
  console.log(argsArr);
  // 2. Loop through the array and return the result using a function
  argsArr.forEach(function(cur) {
    console.log(2018 - cur >= 18);
  });
}

isFullAge5(1990, 1987, 2010, 1954);

// ES6 Way to do it is using the Rest parameter & that too in just one line
function isFullAge6(...years) {
  console.log(years.forEach(cur => 2018 - cur >= 18));
}


//ES5
function isFullAge5(limit) {
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}


//isFullAge5(16, 1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);


//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log( (2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);
*/

/////////////////////////////////
// Lecture: Default parameters
/*
// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastname = lastName);
  nationality === undefined
    ? (nationality = "French")
    : (nationality = nationality);
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

var john = new SmithPerson("John", 1990); // here we are not passing all the parameters that are there in the function constructor. In this case the JavaScript will take those parameters as undefined / or it will take the defaults that we have specified in the function constructor above
var emily = new SmithPerson("Emily", 1994, "Diaz", "American"); // here we are passing all the required parameters to the emily object so the defaults that we have specified in the above function constructor will be overwritten

//ES6 - easy peasy - no need of ternary opearator to search for undefined values

function JacksonPerson(
  firstName,
  lastName = "Jackson",
  yearOfBirth,
  nationality = "Spanish"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

*/

/////////////////////////////////
// Lecture: Maps
/* In ES6 we have this new datastructure 'map' and has nothing to do with the 'map' function which we use for arrays or the google maps
> map is new key:value pair data structer in ES6 like the key:value pair of objects
> map is not limited to strings like we are limited in objects, infact we can use any primitive data type in maps, ex. numbers,strings,booleans
>  */
/*
const question = new Map(); // here we have created a new empty map
// now we will set the key value pairs for this new map
question.set(
  "question",
  " What is the official name of the latest major Javascript version? "
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct Answer !!!");
question.set(false, "Wrong Answer!! Please try again.");

// to retrive data from this Map we use get method: question.get(key);
console.log(question.get("question"));

// just like in 'arrays' we have 'length' we have the 'size' property here in 'Maps'
console.log(question.size);

// We can delete any key in the map with 'delete' method
//question.delete(4);
console.log(question);

// We can check if certain key is in the map or not with 'has' method
if (question.has(4)) {
  question.delete(4); // this will definitly not do anything because we have already deleted this key before
  console.log("Answer 4 was here before and now its deleted !!!");
}

// If we want to delete all keys from the map we can use 'clear' method
//question.clear();

// Maps are iterable - means we can loop through them, but objects are not iterable
// we can use the same forEach method of arrays for maps also
// question.forEach((value, key) =>
//   console.log(`This is ${key} and is set to ${value}`)
//);

// We can also use the for-of loop for iteration through the map
// to get both the key and value in map we can use the destructure of ES6
// for (let [key, value] of question.entries()) {
//   console.log(`This is ${key} and is set to ${value}`);
// }
for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt("Write the correct answer"));

console.log(question.get(ans === question.get("correct")));

*/

/////////////////////////////////
// Lecture: Classes
// Important things to know:
// > class definitions are not hoisted like the function constructors
// > so first implement a class and later in code start using it
// > we can only add 'methods to classes' and 'not the properties'
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

/////////////////////////////////
// Lecture: Classes and subclasses
/*
//ES5
var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var john = new Person5("John", 1998, "teacher");
john.calcAge();

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

// now we want the prototype of Athlete5 to be the prototype of Person5 so that they become connected

var johnAthlete5 = new Athlete5("John", 1996, "swimmer", 3, 10);
johnAthlete5.calcAge();
johnAthlete5.wonMedal(); // these functions can only be called after the object has been created, otherwise we will get the error

//ES6 Version with Class
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1996, "swimmer", 3, 10);
johnAthlete6.calcAge();
johnAthlete6.wonMedal();
 */
//
