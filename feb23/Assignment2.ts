let city=["Pune","Mumbai","Goa","Hydrabad","Ahmednagar","Panjab","Delhi"];

console.log("Before sorting city list: ");
console.log(city);

console.log("After sorting alphabetically city list is: ");
city.sort();
console.log(city);
console.log("-----------------------------------------------------------------");

console.log("Sort an array based on Length of each String in array in ascending order");
city.sort((s1,s2) => s1.length - s2.length);
console.log(city);
console.log("-----------------------------------------------------------------");

console.log("Sort an array based on Length of each String in array in descending order");
city.sort((s1,s2) => s2.length - s1.length);
console.log(city);
console.log("-----------------------------------------------------------------");

