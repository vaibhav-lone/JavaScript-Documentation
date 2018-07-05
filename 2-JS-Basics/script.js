//----------------------- Lecture: Variables -----------------------
/*
var name = 'Vaibhav';
console.log(name);

var lastName = 'Lone'; // variable name is in camel case
console.log(lastName);

var age = 24;
console.log(age);

var fullAge = true;
console.log(fullAge) */

//----------------------- Lecture: Variables 2 -----------------------
/*
var name = 'vaibhav';
var age = 24;

//console.log(name + age);
//console.log(age + age);

// creating  multiple variables in single line
var job,isMarried;

//console.log(job); // here we have not assigned any value to job so it will have default 'undefined' value

job = 'devloper';
isMarried = false;

//console.log(name + ' ' + age + ' ' + job + ' ' + isMarried);
console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

job = 'Architect'; // this is variable mutation
age = 'Thirty Two';
name = 'Maruti';

console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// to get Data from console
var bookName = prompt('Name of your favourite Book?');
console.log(bookName);

// to generate the alert 
alert('Your Favourite book is ' + bookName);

*/

//----------------------- Lecture: Operators -----------------------
/*
var now = 2018
var birthYear = now - 26;
birthYear = now - 26 * 2; // Javascript applies operator precedence so multiply happens first then substraction happens

console.log(birthYear);

var ageJohn = 32;
var ageMark = 26;
ageJohn = (3 + 5) * 4 - 6; // search for 'operator precedence' to know which will be calculated first

console.log(ageJohn);

//ageJohn = ageMark = 26
// assignment operator has least precedence and the associativity is right-to-left which means the 26 first will be assigned to Mark and then it will be assigned to John

ageJohn++; // increamented by one: ageJohn = ageJohn + 1
ageMark *= 2; // : ageMark = ageMark * 2
console.log(ageJohn);
console.log(ageMark);
*/
//----------------------- Lecture: if/else statements -----------------------
/* 
var name = 'Nilu';
var age = 26;
var isMarried = 'no';

if(isMarried === 'yes')
{
    console.log(name + ' is married!');
}
else{
    console.log(name + ' is a happy guy!!!');
}

//isMarried = false;
//
//if(isMarried){
//    console.log('Yesss!!!');
//}
//else{
//    console.log('Greattttt!!!!');
//} 


// TYPE COERCION - Converting one data type to another
// operator '==' does type coercion
// operator '===' does not do type coercion
if( 23 == '23'){
    console.log('Type Coercion happened');
}
if(23 === '23'){
    console.log('Type Coercion did not happen');
} */

//----------------------- Lecture: Boolean logic and switch -----------------------

/*
var age = 35;

if(age < 20){
    console.log('John is eligible for liscence');
}
else{
    console.log('John is teenager');
}

if(age>20 && age<30){
    console.log('John is a HAPPY man');
} else if(age>30 && age<40){
    console.log('John is a MARRIED man');
}else{
    console.log('John is no more!');
}

var job = 'teacher';

job = prompt('What is John\'s profession');

switch(job){
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a BMW for Nina');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default :
        console.log('John is bekar insan');
}

*/


//******************* CODING CHALLENGE *******************
/*
// This is static
var height1 = 20, age1 = 25;
var height2 = 30, age2 = 20;

var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;

if(score1 > score2){
    console.log('Player1 wins with a score ' + score1);
} else if(score1 < score2){
    console.log('Player2 wins with a score ' + score2);
} else if(score1 == score2){
    console.log('There is tie between Player1 and Player2');
} */

/*
// This is Dynamic
var height1, height2, age1, age2;

height1 = prompt('Enter height(in cm) of Player1');
age1 = prompt('Enter age(in yrs) of Player1');
height2 = prompt('Enter height(in cm) of Player2');
age2 = prompt('Enter age(in yrs) of Player2');

var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;

if(score1 > score2){
    console.log('Player1 wins with a score ' + score1);
} else if(score1 < score2){
    console.log('Player2 wins with a score ' + score2);
} else if(score1 == score2){
    console.log('There is tie between Player1 and Player2');
} */

/*
// When Third Player Joins the Game
var height1 = 120, age1 = 25;
var height2 = 130, age2 = 40;
var height3 = 140, age3 = 30;

var score1 = height1 + age1 * 5;
var score2 = height2 + age2 * 5;
var score3 = height3 + age3 * 5;

if(score1 > score2 && score1 > score3){
    console.log('Player1 wins the game with a score ' + score1);
} else if(score2 > score1 && score2 > score3 ){
    console.log('Player2 wins the game with a score ' + score2);
} else if(score3 > score1 && score3 > score2){
    console.log('Player3 wins the game with a score ' + score3);
} else{
    console.log('It is a draw');
} */


//----------------------- Lecture: Functions -----------------------

// Things to Learn : 1. Functions can call other functions also and 2. Function need not return any value always

/*
//This function calculates the age using DOB
function calculateAge(yearOfBirth){
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageChiku = calculateAge(1969);
var ageMonu = calculateAge(1948);
var ageTilu = calculateAge(1996);
console.log(ageJohn);
console.log(ageChiku);
console.log(ageMonu);
console.log(ageTilu);

// This function calculates years remained for retirement and displays it or it will display if the person is already retired

// in below function the name and year are "parameters" and the values John and 1990 are the "arguments"
function yrsUntilRetire(name,year){
    var age = calculateAge(year);
    var retireYears = 65 - age;
    if(retireYears >= 0){
        console.log('Years left for retirement of ' + name + ' are ' + retireYears);    
    }else{
        console.log(name + ' is already retired ' + ' since ' + (-retireYears) + ' years.');
    }
    
}
 
yrsUntilRetire('John',1990);
yrsUntilRetire('Monu',1948);
yrsUntilRetire('Chiku',1969);

*/

//----------------------- Lecture: Statements and Expressions -----------------------


/* An expression is meant to produce a value while a statement is just meant to perform some operation 

> Example of Statement
function someFunction(parameter){
    // some code
}

> Example of Expression
var someFuncion = function(parameter){
    //some code
}
*/

//----------------------- Lecture: Arrays -----------------------
/*
// Two methods of declaring the arrays
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990,1969,1948);

// Accessing the array elements
console.log(names[2], years[0]);

// Modifying the array elements
names[1] = 'vaibhav';
console.log(names);


var john = ['John', 'Smith', 1990, 'Teacher', false];
john.push('blue'); // To insert/ append any new element in array
console.log(john);

john.unshift('Mr.'); // To insert any new value at the beginning of the array
console.log(john);

john.pop(); // To remove the last element from the array
john.shift(); // To remove the first element from the array
console.log(john);

console.log(john.indexOf(1990)); // To get the index of a particular element in the array and if the element is not there in array it will return '-1'

// Lets find out if John is a teacher
if(john.indexOf('Teacher') === -1){
    console.log('John is not a teacher.');
}

*/

//----------------------- Lecture: Objects -----------------------
/*
// Objects have a key:value pair
// Objects dont have a order of elements

// Ways of creating objects
// Method - 1: Object Literals

var john = {
    name: 'John',
    age: 25,
    job: 'Teacher',
    contact: 2939485,
    isMarried: false
};

console.log(john);

// To reach values out of object
console.log(john.job);
console.log(john['job']);
// both of above will give same output as we are reffering to same object and key

// Data Mutation in Object
john.name = 'Vaibhav';
john['job'] = 'programmer';
john.color = 'Purple'; // here we are adding a new key:value pair to the object
console.log(john);

// Method - 2: New Object
var minti = new Object();
minti.name = 'Minti';
minti.age = 28;
minti.job = 'Doctor';
minti['contact'] = 8473485;
minti['isMarried'] = false;

console.log(minti);

*/

//----------------------- Lecture: Objects and Methods-----------------------

// Version 1.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    YOB: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Judi', 'Jackson','Jennifer','James'],
    calculateAge: function(YOB){ // this is a function expression
        return 2018 - 1990;    
    }
};

console.log(john);
console.log(john.family);
console.log(john.family[3]);
console.log(john.calculateAge(1990));

var age = john.calculateAge(1965);
john.age = age; // but this is wrong since we have mentioned the YearOfBirth of John as 1990 in object. so to overcome this problem we go for version 2.0

*/

//Version 2.0
// >>> IMPORTANT : Use of Keyword "this" <<<
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    YOB: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Judi', 'Jackson','Jennifer','James'],
    calculateAge: function(){ // this is a function expression
        this.age = 2018 - this.YOB;    
    }
};

console.log(john); // only this stmt will not add the key age and vlue of it in the object... for that we need to call the function calculateAge function first like below

john.calculateAge();
console.log(john);

*/


//----------------------- Lecture: Loops -----------------------

// ===== For Loop =====
/*
// following loop will print the numbers from 0 to 9
for (var i = 0; i < 10 ; i++){
    console.log(i);
}

// printing all the names in a array length of which we dont know using length method

var names = ['James', 'John', 'Jenny', 'Jack', 'Judi', 'Jennifer'];

for(i=0;i < names.length; i++){
    console.log(names[i]);
}

// The Above for loop will print the names in order 0 to 6 and below for will print the names in reverse order

for(var i = names.length - 1; i >= 0; i--){
    console.log(names[i]);
}

*/

// ===== While Loop =====
/*
var names = ['James', 'John', 'Jenny', 'Jack', 'Judi', 'Jennifer'];

var i = 0;

while(i < names.length){
    console.log(names[i]);
    i++;
}

// ===== 'break' Statement =====
// following loop will print only upto 3 and after that it will break the loop
var i = 1;
while(i <= 5){
    console.log(i);
    if(i === 3){
        break;
    }
    i++;
}

// ===== 'continue' Statement =====
// following loop will print values 1-5 and skip at 3 because it will continue the loop at value 3 and there by not executing the console.log statement
for(var i = 1; i <= 5 ; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
}
*/

//******************* CODING CHALLENGE *******************
/*
var years = [2001,1985,1994,2014,1973];
var ages = [];

for(var i=0; i<years.length; i++){
    ages[i] = 2018 - years[i];
}

for( i=0; i < ages.length; i++){
    if(ages[i] > 18){
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
    } else{
        console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
    }
}*/


function printFullAge(years){    
    var ages = [];
    var fullAges = [];
    
    for(var i=0; i<years.length; i++){
        ages[i] = 2018 - years[i];
    }

    for( i=0; i < ages.length; i++){
        if(ages[i] > 18){
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
            fullAges.push(true);
        } else{
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
            fullAges.push(false);

        }
    }
    return fullAges;
}

var years = [2001,1985,1994,2014,1973];
var full_1 = printFullAge(years);
var full_2 = printFullAge([2012,1915,1999]);













































