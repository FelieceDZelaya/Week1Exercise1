// Store the following into variables: number of children, partner's name, geographic location, job title.

var numChildren = 25;
var partnersName = "Feliece Zelaya";
var geoLocation = "Belize City";
var jobTitle = "Software Developer";

// Output your fortune to the screen like so: You will be a X in Y, and married to Z with N kids.

console.log("You will be a " + jobTitle + " in " + geoLocation + 
            ", and married to " + partnersName + " with " + numChildren + " kids");

// Store your birth year in a variable. Store a future year in a variable. 
// Calculate your 2 possible ages for that year based on the stored values.

var birthYear = 1991;
var futureYear = 2020;
var futureAge = futureYear-birthYear;

// Output them to the screen like so: I will be either NN or NN inYYYY, substituting the values.

console.log("I will be " + futureAge + " in " + futureYear);

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: You will need NN to last youuntil the ripe old age of X.

var currAge = 26;
var maxAge = 30;
var amtPerDay = 5;
var consumAmt = ((maxAge-currAge) * 365) * 5;

console.log("You will need " + consumAmt + " to last until the ripe old age of " + maxAge);

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output The circumference is NN.
// Calculate the area based on the radius, and output The area is NN.

var radius = 5;
var circum = Math.PI * 2 * radius;

console.log("The circumfrence is " + circum);

var area = circum * radius * radius;
console.log("The area is " + area);

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output NN°C is NN°F.
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output NN°F is NN°C.

var celsius = 50;
var fahrenheit = ((celsius * 9) / 5) + 32;

console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheit = 70;
var celsius = ((fahrenheit - 32) * 5) / 9;

console.log(fahrenheit + "°F is " + celsius + "°C");