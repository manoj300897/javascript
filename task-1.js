//task-1
// Store geographic location and job title in variables
var location = "coimbatore";
var jobTitle = "fullstack developer";
// Output
console.log("You will be a " + jobTitle + " in " + location + ".");


//task-2
var firstName = "Ram", lastName = "Kumar" , age =30;
console.log("Ram","Kumar",30);

//task-3
var birthYear = 1997;
var futureYear = 2023;
var age1 = futureYear - birthYear;
var age2 = age1 - 1; 
// Output
console.log("I will be either " + age1 + " or " + age2 + " in " + futureYear);

//task-4
var currentAge = 25; // current age in years
var maxAge = 80; // maximum age in years
var snacksPerDay = 2; // estimated amount of snacks per day

var yearsRemaining = maxAge - currentAge; // calculate how many years you have left
var daysRemaining = yearsRemaining * 365; // calculate how many days you have left
var totalSnacks = daysRemaining * snacksPerDay; // calculate the total number of snacks

console.log("You will need " + totalSnacks + " snacks to last you until the ripe old age of " + maxAge + ".");

//task-5
var x = 10;
var y = 7;

// 1. Multiply 5 with 7, alerting the result
alert(5 * 7);

// 2. Alert the reminder, once 13 is divided by 7
alert(13 % 7);

// 3. Apply the right assignment operator, which will result in x being 20
x += y;
alert(x)
x *= 3;
alert(x);

//task-6
var anchoviesPizzaScore = 0;
var  pepperoniPizzaScore = 4;
var  hawaiianPizzaScore = 4;
var  chickenBaconRanchPizzaScore = 6;

console.log(anchoviesPizzaScore < pepperoniPizzaScore);
console.log(chickenBaconRanchPizzaScore > hawaiianPizzaScore);
console.log(hawaiianPizzaScore > pepperoniPizzaScore);
console.log(pepperoniPizzaScore <= chickenBaconRanchPizzaScore);
console.log(hawaiianPizzaScore >= pepperoniPizzaScore);

//task-7
var num1 = 3;
var num2 = -7;
var num3 = 2;

var product = num1 * num2 * num3;

if (product > 0) {
  alert("The sign is +");
} else if (product < 0) {
  alert("The sign is -");
} else {
  alert("The product is zero");
}

//task-8
Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
for (var i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

