var ages = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//using ForEach ()
console.log("Using forEach Method ages are: ");
ages.forEach(function (age) {
    console.log(age);
});
console.log();
//using filter()
console.log("Using filter Method age having length greater than 18: ");
var adult_age = ages.filter(function (age) {
    return age >= 18;
});
console.log(adult_age);
console.log();
//using map()
console.log("Using map Method squres of all ages: ");
var age_squres = ages.map(function (age) {
    return Math.pow(age, 2);
});
console.log(age_squres);
console.log();
