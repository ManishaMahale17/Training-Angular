let ages = [10,20,30,40,50,60,70, 80, 90];
//using ForEach ()
console.log("Using forEach Method ages are: ");
ages.forEach((age) =>{
    console.log(age);
});
     console.log();
    
    //using filter()
    console.log("Using filter Method age having length greater than 18: ");
    
    let adult_age = ages.filter((age)=>{
        return age >= 18;
    });
    console.log(adult_age); 
    console.log(); 

    //using map()
    console.log("Using map Method squres of all ages: ");
    let age_squres = ages.map((age) => {
      return age ** 2;
    });
    console.log(age_squres);
    console.log();