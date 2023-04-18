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

console.log(getValue(food, "price"))