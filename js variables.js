//TASK-1:Store the following into variables: geographic location, job title.
//Output your fortune to the screen like so: "You will be a job title in geographic location.

var location = "coimbatore";
var jobTitle = "fullstack developer";
console.log("You will be a " + jobTitle + " in " + location + ".");

//TASK-2: On a single line, declare three variables with the given names and values: firstName = "Ram" lastName = "Kumar" age = 30.

var firstName = "Ram", lastName = "Kumar" , age =30;
console.log("Ram","Kumar",30);

//TASK-3: Age Calculator

// Want to find out how old you'll be? Calculate it!
// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

var birthYear = 1997;
var futureYear = 2023;
var age1 = futureYear - birthYear;
var age2 = age1 - 1; 
console.log("I will be either " + age1 + " or " + age2 + " in " + futureYear);

//TASK-4: Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 25; // current age in years
var maxAge = 80; // maximum age in years
var snacksPerDay = 2; // estimated amount of snacks per day
var yearsRemaining = maxAge - currentAge; // calculate how many years you have left
var daysRemaining = yearsRemaining * 365; // calculate how many days you have left
var totalSnacks = daysRemaining * snacksPerDay; // calculate the total number of snacks
console.log("You will need " + totalSnacks + " snacks to last you until the ripe old age of " + maxAge + ".");



