const dog = {
    name: 'Freida',
    color: 'brown/black',
    hunger: 40,
    mood: 'feisty',
    age: 9,
  };

console.log(dog.name)    // prints Freida

console.log(dog['name']) // also prints Freida

  

let {hunger, name, color, mood, age} = dog


console.log(age)

