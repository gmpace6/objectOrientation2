// const dog = {
//     name: 'Freida',
//     color: 'brown/black',
//     hunger: 40,
//     mood: 'feisty',
//     age: 9,
//   };

// console.log(dog.name)    // prints Freida

// console.log(dog['name']) // also prints Freida

  

// let {hunger, name, color, mood, age} = dog


// console.log(age)

// const dog = {
//     name: 'Freida',
//     color: 'brown/black',
//     age: 9
//   }
  
//   const dog2 = {
//     name: 'Buddy',
//     color: 'gray',
//     age: 1
//   }
  
//   const {age: freidaAge} = dog
//   const {age: buddyAge} = dog2
  
//   console.log(freidaAge) // 9
//   console.log(buddyAge) // 1
//   console.log(age) // undefined

const dog = {
    name: 'Freida',
    color: 'brown/black',
    hunger: 40,
    mood: 'feisty',
    age: 9,
  };
  
  
  dog.nickname = 'Puppers';     // dot notation
  dog['nickname'] = 'Puppers'; // square brackets
  dog.weight = '1 kraken'
  dog['eyeColor'] = 'red'
  console.log(dog)

delete dog.eyeColor
delete dog['weight']

  for (let attribute in dog) {
    console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
  }

const food = {
    name: "pizza",
    price: "90"
}

function getValue(obj, prop){
    return obj[prop]
}

// let dog1 = {
//     'name': 'Freida',
//     'age': 9,
//     'color': 'brown'
//   };
  
//   let dog2 = {
//     'name': 'Libby',
//     'age': 3,
//     'nickname': 'Libbers'
//   };

  function bark(dog){
    console.log('Arf! I am', dog.name, 'the dog!');
  }

console.log(getValue(food, "price"))

class Dog {
    constructor(name, color){
      this.name = name;
      this.color = color;
    }

    bark(){
      console.log('Arf! I am', this.name, 'the dog!');
    }
}



let dog1 = new Dog('Freida', 'brown');
let dog2 = new Dog('Sally', 'pink');

console.log(dog1.name)  // Freida
console.log(dog2.name)  // Sally

dog1.bark()    // Arf, I'm Freida the dog!
dog2.bark()    // Arf, I'm Sally the dog!

  class Puppy extends Dog {
    constructor(name, color, trainingLevel) {
      super(name, color)
  
      this.trainingLevel = trainingLevel
    }
  
    levelUp(num) {
      this.trainingLevel += num
    }
  }

