// const SYM = Symbol();

// const oo = {a:1, b:2, c:3, SYN:4};

// for(let prop in oo){
//     //if(!oo.hasOwnProperty(prop)) continue;
//     console.log(`${prop}: ${oo[prop]}`);
// }
// class Car {
//     constructor(make, model){
//       this.make = make;
//       this.model = model;
//       this._userGears = ['P', 'N', 'R', 'D'];
//       this._userGear = this._userGears[0];
//     }
    
//     get userGear() {return this._userGear;}
//     set userGear(value){
//       if(this._userGears.indexOf(value) < 0)
//           throw new Error(`Invalid gear:${value}`);
//       this._userGear = value;
//     }
//     shift(gear) {this.userGear = gear;}
//   }

// const car1 = new Car();
// const car2 = new Car();

// car1.shift === Car.prototype.shift;	//true
// car1.shift('D');
// //car1.shift('d');				//error
// car1.userGear;				//'D'
// car1.shift === car2.shift		//true;

// car1.shift = function(gear) {this.userGear = gear.toUpperCase();}
// car1.shift === Car.prototype;		//false
// car1.shift === car2.shift;		//false
// car1.shift('r');
// console.log(car1.userGear);			//'R'


class Vehicle{
  constructor(){
    this.passengers = [];
    console.log("Vehicle created");
    }
  addPassenger(p){
    this.passengers.push(p)
    }
}

class Car extends Vehicle {
  constructor(){
    super();
    console.log("Car created");
    }
    deployAirbags() {
    console.log("BWOOSH");
    }
}

const v = new Vehicle();
v.addPassenger("Fank");
v.addPassenger("Judy");
console.log(v.passengers);

const c2 = new Car();
c2.addPassenger("Alice");
c2.addPassenger("Cameron");
console.log(c2.passengers);

//v.deployAirbags(); //error
c2.deployAirbags(); //"BWOOSH"

const roles = new Set();
roles.add("User");
roles.add("Admin");
roles.add("JH");

console.log(roles);

function validateEmail(email){
  return email.match(/@/)? email : new Error(`invalid email: ${email}`);
}

const email = null;

try{
  const validatedEmail = validateEmail(email);

  if(validatedEmail instanceof Error)
    console.log(`Error: ${validatedEmail.message}`);
  else
    console.log(`Valid email: ${validatedEmail}`);
    
}catch(err){
  console.log(`Error: ${err.message}`);
}