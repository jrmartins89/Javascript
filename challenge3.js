const mark = {
  firstName: 'Mark',
  lastName: 'Miler',
  height: 1.80,
  mass: 100,
  BMI: function(){
    return this.mass/(this.height*this.height);
  }
};


const john = {
  firstName: 'John',
  lastName: 'Smith',
  height: 1.69,
  mass: 78,
  BMI: function(){
    return this.mass/(this.height*this.height);
  }
};

function higherBMI(){
if(john.BMI()>mark.BMI()){
  console.log(`${john.firstName}'s BMI(${john.BMI()}) is higher than ${mark.firstName}'s(${mark.BMI()})`);
}
else if(mark.BMI()> john.BMI()){
  console.log(`${mark.firstName}'s BMI(${mark.BMI()}) is higher than ${john.firstName}'s(${john.BMI()})`);
}
else if(john.BMI()===mark.BMI()){
  console.log(`${mark.firstName}'s BMI(${mark.BMI()}) is equal to ${john.firstName}'s(${john.BMI()})`);
}
else{
  console.log(`Nothing can be said about the John's and Mark's BMI`);
}
}

higherBMI();
