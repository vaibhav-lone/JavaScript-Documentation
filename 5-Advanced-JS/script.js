// Aim: to create an object by using a function constructor
// ----------------------- function constructor -----------------------
/*
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

// in JavaScript we always write a function constructor's name with a capital letter
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
  // this.calculateAge = function() {
  //   console.log(2018 - this.yearOfBirth);
  // }; 
};

// Example of Inheritance: Creating a prototype function calculateAge(). Remember prototype is just another property of an object so we can use it with a '.' dot

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1968, "designer");
var jack = new Person("Jack", 1954, "retired");

john.calculateAge();
jane.calculateAge();
jack.calculateAge();
// Here none of the instance objects are attached to the calculateAge function but still they will be able to use the function because its a prototype of the parent object Person: this is called function inheritance

// We can also have a Property inheritance

Person.prototype.lastName = "Johnson";

console.log(john.lastName);
console.log(jane.lastName);
console.log(jack.lastName);
// Here all the instance object will inherit the prototype property lastName of the function constructor and all will have a same value Johnson

*/

// Object.create METHOD-2
// with object.create method things work differently
// > first define an object that will act as a prototype
// > then create a new object based on that very prototype
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1990 },
  job: { value: "teacher" }
});
*/

// Primitives vs Objects
/* we know that basically only Numbers, Strings, Boolean, Undefined and Null are primitives
 and everything else is objects
 > So a big difference between primitives and objects is that variables containing primitives actually hold that data inside the variable itself on objects its very different. 
 > Variables associated with objects do not actually contain the object, but instead they contain a reference to the place in memeory where the object sits, where object is actually stored.
 */
// ----------------------- Primitive Variables -----------------------
/*
var a = 23;
var b = a;
a = 50;

console.log(a);
console.log(b); // This shows the primitive variables actually store the value in them

// Object Variables
var obj1 = {
  name: "john",
  age: 20
};
var obj2 = obj1;
obj2.age = 78;

console.log(obj1.age);
console.log(obj2.age); // This shows the object variables store the reference of memory location in them

// Functions
var age = 57;
var obj = {
  name: "vaibz",
  city: "Bangalore"
};

function change(a, b) {
  a = 20;
  b.city = "Milano";
}

change(age, obj);

console.log(age);
console.log(obj.city);  */
// From above example when we pass a primitive variable into a function as an argument it just creates a copy of it and we even if we change it in function multiple times its value remains unchanged outside the function.
// > When we pass an object into a function as an argument we simply pass the reference to the memory location where the object is stored. Thats why when we change the value of city inside the function it directly makes changes in the same memory location where the obj is stored and it gets reflected outside the function.

// Functions in JavaScript
/* 
> Function in JavaScript is instance of the Object type;
> A function behaves like any other object;
> We can store function in a variable;
> We can pass a function as an argument to another function;
> We can return a function from a function    */

// ----------------------- Passing functions as arguments -----------------------
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el > 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var heartRate = arrayCalc(ages, maxHeartRate);
console.log(heartRate);
*/

// ----------------------- Functions returning Functions -----------------------
// here we are going to create a function which creates different interview questions for different jobs
// > for each job we will return a function that builds a string using the persons name as an input
/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + " can you please explain what UX design is ? ");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + " What do you do ?");
    };
  }
}

var teacherQuestion = interviewQuestion("something");
teacherQuestion("John");

var designerQuestion = interviewQuestion("designer");
designerQuestion("Mery");

var question = interviewQuestion("nothing");
question("Jackson");

interviewQuestion("designer")("Judy"); // this is a valid stmt because it get executed from left to right
*/

// ----------------------- IIFE: Immediately Invoked Function Expression -----------------------
/* It provides Data Privacy

*/

// Lets write a normal function first
/* function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game(); */

// Lets write IIFE - immediately invoked function expression

/*(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})(); //This is an IIFE

// Lets add some goodluck to the game. More the goodLuck more the chances to win the game

(function(goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(1); // This will always be true
*/

// ----------------------- Closures -----------------------
/* 
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
retirementUS(1998);

// var retirementUS = retirement(66)(1998);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

// Example of Job and Interview question using power of closures:

function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + " can you please explain what UX design is ? ");
    } else if (job === "teacher") {
      console.log("What subject do you teach " + name + "?");
    } else {
      console.log("Hello " + name + " What do you do ?");
    }
  };
}
// Here instead of 3 times return we are returning only once by using property of closures
interviewQuestion("teacher")("Alex");
interviewQuestion("designer")("Jeremy");
interviewQuestion("other")("Derek");
*/
// ----------------------- Bind, Call and Apply -----------------------
// These powerful methods allow us to call a function and set the  'this' variable manually

var john = {
  name: "John",
  age: "28",
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          " ladies and gentlemen. " +
          "I'm " +
          this.name +
          ". I'm a " +
          this.job +
          ". I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey, What's up? I'm " +
          this.name +
          ". I'm a " +
          this.job +
          ". I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};
// var style = prompt("Enter the style");
// var time_of_day = prompt("Enter the time of the day");
// john.presentation(style, time_of_day);

john.presentation("friendly", "morning");
//  -------------------- 'Call' Method  --------------------
// Example of Method borrowing : call method
var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

//  here we can seee that we dont have the presentation function present in the emily object. but still we can borrow it from john object with a call method like below

john.presentation.call(emily, "formal", "morning");
// As we know the first parameter when not defined is always by default its 'this' variable, but here we are changing the 'this' variable, so that it will now point to emily object rather than john object

//  -------------------- 'Apply' Method  --------------------
// There is a 'apply method' which is similer to 'call method', but the difference is that the apply method accepts the arguments as an array, so there are only two arguments, first of which is 'this' variable and the second is array of other arguments
// Example of Apply Method

john.presentation.apply(emily, ["friendly", "afternoon"]);

// -------------------- The 'Bind' Method  --------------------
/* Bind method is also similler to call and apply method which allows us to set the 'this' variable explicitely,
> However the difference is that bind doesn't immediately call the function but instead it generates copy of function so that we can store it somewhere. Which is useful to create a funciton with 'preset arguments'
> So basically 'bind' method returns a 'function' */

var johnFriendly = john.presentation.bind(john, "friendly"); // here we are presetting the friendly argument and we will pass the timeOfDay argument later

johnFriendly("morning");
johnFriendly("night");

// simillerly lets create formal for emily
var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("night");
emilyFormal("afternoon");

// This method is called 'carrying' in which we create a funciton based on another function but with some preset parameters

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}
// here we are checking if the person is full age or not and in different countries the limit is different, so we pass the limit value as well in the function
function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

// above is fine because the calculateAge function receives only one argument which is the year,
// while the isFullAge receives two arguments i.e. limit and age of person, so here we can use the bind method to preset the limit argument and then later on pass the age parameter

var fullJapan = isFullAge.bind(this, 20);
var ages1 = arrayCalc(ages, fullJapan);
console.log(ages);
console.log(ages1);
