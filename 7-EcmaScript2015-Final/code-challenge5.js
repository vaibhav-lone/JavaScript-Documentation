/*
/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per sq km.`
    );
  }
}

class Streets extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "noraml");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949)
];

const allStreets = [
  new Streets("Ocean Avenue", 1999, 1.1, 4),
  new Streets("Evergreen Avenue", 2008, 2.7, 2),
  new Streets("4th Street", 2015, 0.8),
  new Streets("Sunset Boulevard", 1982, 2.5, 5)
];

function calc(arr) {
  // here we are going to use the reduce method which will accumulate all the numbers to single number for adding up all the elements in the array
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0); // here first parameter is that we are adding prev and current values and second parameter is that we are starting to add with the initial number 0

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("--------------- Parks Report ---------------");
  // 1. Tree Density of each Park : numTrees/park area
  p.forEach(el => el.treeDensity());

  // 2. Avg age of each park : sum of all ages/numParks
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);

  console.log(`Our ${p.length} parks have an average of ${avgAge} years`);

  // 3. Name of park that has > 1000 trees
  //here we will use the findIndex method of ES6 which will find the name of the park without finding its index
  const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}
function reportStreets(s) {
  console.log("--------------- Streets Report ---------------");
  // 1. Total and average length of town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );
  // 2. Classification of all streets: tiny/small/normal/big/huge and default is normal
  s.forEach(el => el.classifyStreet());
}
reportParks(allParks);
reportStreets(allStreets);
